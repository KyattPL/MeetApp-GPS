package com.meetapp.meetapp.service;

import com.meetapp.meetapp.model.Location;
import com.meetapp.meetapp.model.Post;
import com.meetapp.meetapp.repository.AnnouncementRepository;
import com.meetapp.meetapp.repository.EventRepository;
import com.meetapp.meetapp.repository.LocationRepository;
import com.meetapp.meetapp.repository.MeetingRepository;
import org.locationtech.jts.geom.Coordinate;
import org.locationtech.jts.geom.GeometryFactory;
import org.locationtech.jts.geom.Polygon;
import org.locationtech.jts.geom.PrecisionModel;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class LocationService {
    private final LocationRepository locationRepository;
    private final AnnouncementRepository announcementRepository;
    private final MeetingRepository meetingRepository;
    private final EventRepository eventRepository;

    public LocationService(LocationRepository locationRepository, AnnouncementRepository announcementRepository,
                           MeetingRepository meetingRepository, EventRepository eventRepository) {
        this.locationRepository = locationRepository;
        this.announcementRepository = announcementRepository;
        this.meetingRepository = meetingRepository;
        this.eventRepository = eventRepository;
    }

    public List<Location> retrieveLocationsNonPost(String nameSearch) {
        List<Location> foundLocs = locationRepository.findDistinctTop10ByIsPostRelatedFalseAndCityNameContainingIgnoreCaseOrderById(nameSearch);
        return foundLocs;
    }

    public List<Post> retrieveLocationsInBox(Double upperLat, Double lowerLat, Double leftLon, Double rightLon,
                                                 Boolean areEventsOn, Boolean areMeetingsOn, Boolean areAnnouncementsOn) {
        GeometryFactory geometryFactory = new GeometryFactory(new PrecisionModel(), 4326);
        Coordinate[] coords = new Coordinate[] {
                new Coordinate(leftLon, lowerLat),
                new Coordinate(leftLon, upperLat),
                new Coordinate(rightLon, upperLat),
                new Coordinate(rightLon, lowerLat),
                new Coordinate(leftLon, lowerLat)
        };

        Polygon box = geometryFactory.createPolygon(coords);
        List<Location> foundLocs = locationRepository.findWithin(box).stream().filter(Location::getIsPostRelated).toList();
        List<Post> foundPosts = new ArrayList<>();

        if (areEventsOn) {
            foundPosts.addAll(eventRepository.findAllByLocationIn(foundLocs));
        }

        if (areMeetingsOn) {
            foundPosts.addAll(meetingRepository.findAllByLocationIn(foundLocs));
        }

        if (areAnnouncementsOn) {
            foundPosts.addAll(announcementRepository.findAllByLocationIn(foundLocs));
        }

        return foundPosts;
    }

    public List<Post> retrieveLocationsInCircle(Double latitude, Double longitude, Boolean areEventsOn,
                                                Boolean areMeetingsOn, Boolean areAnnouncementsOn, Double maxRange) {

        List<Location> foundLocs = locationRepository.findWithinRadius(longitude, latitude, maxRange).stream().filter(Location::getIsPostRelated).toList();
        List<Post> foundPosts = new ArrayList<>();

        if (areEventsOn) {
            foundPosts.addAll(eventRepository.findAllByLocationIn(foundLocs));
        }

        if (areMeetingsOn) {
            foundPosts.addAll(meetingRepository.findAllByLocationIn(foundLocs));
        }

        if (areAnnouncementsOn) {
            foundPosts.addAll(announcementRepository.findAllByLocationIn(foundLocs));
        }

        return foundPosts;
    }
}
