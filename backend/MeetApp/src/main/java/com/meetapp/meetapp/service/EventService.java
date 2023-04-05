package com.meetapp.meetapp.service;

import com.meetapp.meetapp.configuration.Constants;
import com.meetapp.meetapp.dto.*;
import com.meetapp.meetapp.model.*;
import com.meetapp.meetapp.repository.*;
import com.meetapp.meetapp.security.SessionManager;
import com.meetapp.meetapp.specification.EventSpecifications;
import jakarta.servlet.http.HttpSession;
import lombok.val;
import org.locationtech.jts.geom.Coordinate;
import org.locationtech.jts.geom.GeometryFactory;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.format.DateTimeParseException;
import java.util.HashSet;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Set;

@Service
public class EventService {
    private final EventRepository eventRepository;
    private final LocationRepository locationRepository;
    private final ClientRepository clientRepository;
    private final CategoryRepository categoryRepository;
    private final CityRepository cityRepository;
    private final VoivodeshipRepository voivodeshipRepository;

    public EventService(EventRepository eventRepository, LocationRepository locationRepository,
                        ClientRepository clientRepository, CategoryRepository categoryRepository,
                        CityRepository cityRepository, VoivodeshipRepository voivodeshipRepository) {
        this.eventRepository = eventRepository;
        this.locationRepository = locationRepository;
        this.clientRepository = clientRepository;
        this.categoryRepository = categoryRepository;
        this.cityRepository = cityRepository;
        this.voivodeshipRepository = voivodeshipRepository;
    }

    public List<EventDTO> retrieveEvents(List<Integer> categoryIds, List<Integer> locationIds,
                                         Integer sortOption, String nameSearch, Boolean shouldDisplayActive,
                                         Integer page) {

        Specification<Event> specification;

        if (shouldDisplayActive) {
            specification = Specification.where(EventSpecifications.isActive());
        } else {
            specification = Specification.where(EventSpecifications.isInactive());
        }

        if (categoryIds != null) {
            specification = specification.and(EventSpecifications.hasCategory(categoryIds));
        }

        if (locationIds != null) {
            specification = specification.and(EventSpecifications.hasLocation(locationIds));
        }

        if (nameSearch != null) {
            specification = specification.and(EventSpecifications.titleContains(nameSearch));
        }

        if (sortOption != null) {
            PageRequest nextPage = PageRequest.of(page, Constants.PAGE_SIZE, paramToSortOrThrow(sortOption));

            return eventRepository.findAll(specification, nextPage).stream()
                    .map((Event event) -> new EventDTO(new PostDTO(event), event.getTitle(), event.getDescription(),
                            event.getEnrolled(), event.getPersonQuota(), event.getSchedule(),
                            new DateTimeDTO(event.getStartDate()), new DateTimeDTO(event.getEndDate()),
                            event.getPicture())).toList();
        } else {
            PageRequest nextPage = PageRequest.of(page, Constants.PAGE_SIZE);

            return eventRepository.findAll(specification, nextPage).stream()
                    .map((Event event) -> new EventDTO(new PostDTO(event), event.getTitle(), event.getDescription(),
                            event.getEnrolled(), event.getPersonQuota(), event.getSchedule(),
                            new DateTimeDTO(event.getStartDate()), new DateTimeDTO(event.getEndDate()),
                            event.getPicture())).toList();
        }
    }

    public EventDTO retrieveEvent(Integer eventId) {
        val foundEvent = findEventOrThrow(eventId);
        return new EventDTO(new PostDTO(foundEvent), foundEvent.getTitle(), foundEvent.getDescription(),
                foundEvent.getEnrolled(), foundEvent.getPersonQuota(), foundEvent.getSchedule(),
                new DateTimeDTO(foundEvent.getStartDate()), new DateTimeDTO(foundEvent.getEndDate()),
                foundEvent.getPicture());
    }

    public EditEventDTO retrieveEditDetails(Integer eventId) {
        val foundEvent = findEventOrThrow(eventId);
        return new EditEventDTO(new PostDTO(foundEvent), foundEvent.getTitle(), foundEvent.getDescription(),
                foundEvent.getEnrolled(), foundEvent.getPersonQuota(), foundEvent.getSchedule(),
                new DateTimeDTO(foundEvent.getStartDate()), new DateTimeDTO(foundEvent.getEndDate()),
                foundEvent.getPicture(), foundEvent.getCategories());
    }

    public Boolean isLoggedUserEnrolled(Integer eventId, HttpSession session) {
        Client foundClient = findClientOrThrow(SessionManager.retrieveEmailOrThrow(session));
        return eventRepository.existsByIdIsAndEnrolleesContains(eventId, foundClient);
    }

    public EventDTO enrollEvent(Integer eventId, HttpSession session) {
        Event foundEvent = findEventOrThrow(eventId);
        Client foundClient = findClientOrThrow(SessionManager.retrieveEmailOrThrow(session));

        Integer personQuota = foundEvent.getPersonQuota();
        Integer currentlyEnrolled = foundEvent.getEnrolled();

        if (!isLoggedUserEnrolled(eventId, session) && (personQuota == null || currentlyEnrolled < personQuota)) {
            foundClient.getPosts().add(foundEvent);
            foundEvent.setEnrolled(foundEvent.getEnrolled() + 1);
        }

        Client savedClient = clientRepository.save(foundClient);
        Event savedEvent = eventRepository.save(foundEvent);
        return new EventDTO(new PostDTO(new Post(savedClient,
                savedEvent.getLocation(), savedEvent.getCategories())), savedEvent.getTitle(),
                savedEvent.getDescription(), savedEvent.getEnrolled(), savedEvent.getPersonQuota(),
                savedEvent.getSchedule(), new DateTimeDTO(savedEvent.getStartDate()),
                new DateTimeDTO(savedEvent.getEndDate()), savedEvent.getPicture());
    }

    public EventDTO unenrollEvent(Integer eventId, HttpSession session) {
        Event foundEvent = findEventOrThrow(eventId);
        Client foundClient = findClientOrThrow(SessionManager.retrieveEmailOrThrow(session));

        if (isLoggedUserEnrolled(eventId, session)) {
            foundClient.getPosts().remove(foundEvent);
            foundEvent.setEnrolled(foundEvent.getEnrolled() - 1);
        }

        Client savedClient = clientRepository.save(foundClient);
        Event savedEvent = eventRepository.save(foundEvent);
        return new EventDTO(new PostDTO(new Post(savedClient,
                savedEvent.getLocation(), savedEvent.getCategories())), savedEvent.getTitle(),
                savedEvent.getDescription(), savedEvent.getEnrolled(), savedEvent.getPersonQuota(),
                savedEvent.getSchedule(), new DateTimeDTO(savedEvent.getStartDate()),
                new DateTimeDTO(savedEvent.getEndDate()), savedEvent.getPicture());
    }

    public Event createEvent(EventCreationDTO newEvent, HttpSession session) {
        String email = SessionManager.retrieveEmailOrThrow(session);
        Client foundClient = findClientOrThrow(email);
        City foundCity = findCityOrThrow(newEvent.getCityId());
        Voivodeship foundVoivodeship = findVoivodeshipOrThrow(newEvent.getVoivodeshipId());
        Instant startDate = parseDateOrThrow(newEvent.getStartDate());
        Instant endDate = parseDateOrThrow(newEvent.getEndDate());
        String pictureUri = newEvent.getPicture() != null ? savePictureAndGetPath(newEvent.getPicture()) : null;

        timeInFutureOrThrow(startDate);
        timeInFutureOrThrow(endDate);
        personQuotaPositiveOrThrow(newEvent.getPersonQuota());

        if (startDate.isAfter(endDate)) {
            throw new IllegalArgumentException("The start date must be before the end date.");
        }

        List<Category> foundCategories = findCategories(newEvent.getCategoryIds());

        Location newLocation = new Location(foundCity, foundVoivodeship, newEvent.getLatitude(),
                newEvent.getLongitude(), true);

        Event eventToSave =
                new Event(foundClient, locationRepository.save(newLocation), newEvent.getTitle(), newEvent.getDescription(), startDate,
                        endDate, new HashSet<>(foundCategories), newEvent.getPersonQuota(), newEvent.getSchedule());
        eventToSave.setPicture(pictureUri);

        return eventRepository.save(eventToSave);
    }

    public Event updateEvent(Integer eventId, EventCreationDTO updatedEvent, HttpSession session) {
        String email = SessionManager.retrieveEmailOrThrow(session);
        Client supposedAuthor = findClientOrThrow(email);
        Instant startDate = parseDateOrThrow(updatedEvent.getStartDate());
        Instant endDate = parseDateOrThrow(updatedEvent.getEndDate());
        Event foundEvent = findEventOrThrow(eventId);
        String pictureUri = updatedEvent.getPicture() != null ? savePictureAndGetPath(updatedEvent.getPicture()) : null;

        timeInFutureOrThrow(startDate);
        timeInFutureOrThrow(endDate);
        personQuotaPositiveOrThrow(updatedEvent.getPersonQuota());

        if (startDate.isAfter(endDate)) {
            throw new IllegalArgumentException("The start date must be before the end date.");
        }

        if (foundEvent.getAuthor().equals(supposedAuthor)) {
            Location existingLocation = foundEvent.getLocation();
            existingLocation.setCity(findCityOrThrow(updatedEvent.getCityId()));
            existingLocation.setVoivodeship(findVoivodeshipOrThrow(updatedEvent.getVoivodeshipId()));
            existingLocation.setIsPostRelated(true);
            existingLocation.setPoint(new GeometryFactory().createPoint(new Coordinate(
                    updatedEvent.getLongitude(),
                    updatedEvent.getLatitude()
            )));

            foundEvent.setDescription(updatedEvent.getDescription());
            foundEvent.setTitle(updatedEvent.getTitle());
            foundEvent.setSchedule(updatedEvent.getSchedule());
            foundEvent.setEndDate(endDate);
            foundEvent.setStartDate(startDate);
            foundEvent.setPersonQuota(updatedEvent.getPersonQuota());
            foundEvent.setLocation(locationRepository.save(existingLocation));
            foundEvent.setIsActive(true);
            foundEvent.setPicture(pictureUri);
            foundEvent.setCategories(new HashSet<>(findCategories(updatedEvent.getCategoryIds())));

            return eventRepository.save(foundEvent);
        } else {
            throw new SecurityException(
                    "Event with id: " + eventId + " does not belong to the user with id: " + supposedAuthor.getId());
        }
    }

    public void deleteEvent(Integer eventId, HttpSession session) {
        Event eventToDelete = findEventOrThrow(eventId);
        String email = SessionManager.retrieveEmailOrThrow(session);
        Client supposedAuthor = findClientOrThrow(email);

        if (eventToDelete.getAuthor().equals(supposedAuthor)) {
            eventRepository.deleteById(eventId);
        }
    }

    public String savePictureAndGetPath(MultipartFile picture) {
        try {
            LocalDateTime today = LocalDateTime.now();
            String datePath = today.getYear() + String.valueOf(today.getMonthValue());
            Path fileNameAndPath = Paths.get("src/main/pictures/" + datePath, picture.getOriginalFilename());
            Files.createDirectories(Paths.get("src/main/pictures/" + datePath));
            Files.write(fileNameAndPath, picture.getBytes());
            return String.valueOf(Paths.get("pictures/", datePath, picture.getOriginalFilename()));
        } catch (IOException e) {
            throw new RuntimeException("Event photo with name: " + picture.getOriginalFilename() +
                    " could not be saved.");
        }
    }

    public List<Category> findCategories(Set<Integer> categoryIds) {
        return categoryRepository.findAllById(categoryIds);
    }

    public Event findEventOrThrow(Integer eventId) {
        return eventRepository.findById(eventId)
                .orElseThrow(() -> new NoSuchElementException("An event with id: " + eventId + " does not exist."));
    }

    public Location findLocationOrThrow(Integer locationId) {
        return locationRepository.findById(locationId).orElseThrow(
                () -> new NoSuchElementException("A location with id: " + locationId + " does not exist."));
    }

    public City findCityOrThrow(Integer cityId) {
        return cityRepository.findById(cityId).orElseThrow(
                () -> new NoSuchElementException("A city with id: " + cityId + " does not exist."));
    }

    public Voivodeship findVoivodeshipOrThrow(Integer voivodeshipId) {
        return voivodeshipRepository.findById(voivodeshipId).orElseThrow(
                () -> new NoSuchElementException("A voivodeship with id: " + voivodeshipId + " does not exist."));
    }

    public Client findClientOrThrow(String email) {
        return clientRepository.findClientByEmail(email)
                .orElseThrow(() -> new NoSuchElementException("A client with email: " + email + " does not exist."));
    }

    public Instant parseDateOrThrow(String dateString) {
        try {
            return Instant.parse(dateString);
        } catch (DateTimeParseException e) {
            throw new IllegalArgumentException("A string '" + dateString + "' is not in a proper time format");
        }
    }

    public void timeInFutureOrThrow(Instant timeToCheck) {
        if (Instant.now().isAfter(timeToCheck)) {
            throw new IllegalArgumentException("Time '" + timeToCheck + "' is not a future time");
        }
    }

    public void personQuotaPositiveOrThrow(Integer personQuota) {
        if (personQuota != null && personQuota <= 0) {
            throw new IllegalArgumentException("Person quota cannot be less than or equal to 0");
        }
    }

    public Sort paramToSortOrThrow(Integer sortOption) {
        return switch (sortOption) {
            case 2 -> Sort.by(Sort.Direction.ASC, "creationDate").and(Sort.by(Sort.Direction.ASC, "Id"));
            case 3 -> Sort.by(Sort.Direction.ASC, "enrolled");
            case 4 -> Sort.by(Sort.Direction.DESC, "enrolled");
            case 5 -> Sort.by(Sort.Direction.ASC, "startDate");
            default -> Sort.by(Sort.Direction.DESC, "creationDate").and(Sort.by(Sort.Direction.DESC, "Id"));
        };
    }
}
