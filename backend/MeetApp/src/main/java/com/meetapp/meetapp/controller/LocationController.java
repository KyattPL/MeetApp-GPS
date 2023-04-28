package com.meetapp.meetapp.controller;

import com.meetapp.meetapp.model.Location;
import com.meetapp.meetapp.model.Post;
import com.meetapp.meetapp.service.LocationService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class LocationController {
    private final LocationService locationService;

    public LocationController(LocationService locationService) {
        this.locationService = locationService;
    }

    @GetMapping("/locationsNonPost")
    public List<Location> getLocationsNonPost(@RequestParam(required = false) String nameSearch) {
        return locationService.retrieveLocationsNonPost(nameSearch);
    }

    @GetMapping("/map/getLocationsInBox")
    public List<Post> getLocationsInBox(@RequestParam Double upperLat, @RequestParam Double lowerLat,
                                        @RequestParam Double leftLon, @RequestParam Double rightLon,
                                        @RequestParam(required = false) Boolean areEventsOn,
                                        @RequestParam(required = false) Boolean areMeetingsOn,
                                        @RequestParam(required = false) Boolean areAnnouncementsOn) {
        return locationService.retrieveLocationsInBox(upperLat, lowerLat, leftLon, rightLon, areEventsOn,
                areMeetingsOn, areAnnouncementsOn);
    }

    @GetMapping("/map/getLocationsInCircle")
    public List<Post> getLocationsInCircle(@RequestParam Double latitude, @RequestParam Double longitude,
                                           @RequestParam(required = false) Boolean areEventsOn,
                                           @RequestParam(required = false) Boolean areMeetingsOn,
                                           @RequestParam(required = false) Boolean areAnnouncementsOn,
                                           @RequestParam Double maxRange) {
        return locationService.retrieveLocationsInCircle(latitude, longitude, areEventsOn, areMeetingsOn,
                areAnnouncementsOn, maxRange);
    }
}
