package com.meetapp.meetapp.service;

import com.meetapp.meetapp.model.Location;
import com.meetapp.meetapp.repository.LocationRepository;
import org.locationtech.jts.geom.Coordinate;
import org.locationtech.jts.geom.GeometryFactory;
import org.locationtech.jts.geom.Polygon;
import org.locationtech.jts.geom.PrecisionModel;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LocationService {
    private final LocationRepository locationRepository;

    public LocationService(LocationRepository locationRepository) {
        this.locationRepository = locationRepository;
    }

    public List<Location> retrieveLocations(String nameSearch) {
        List<Location> foundLocs = locationRepository.findDistinctTop10ByCityNameContainingIgnoreCaseOrderById(nameSearch);
        return foundLocs;
    }

    public List<Location> retrieveLocationsInBox(Double upperLat, Double lowerLat, Double leftLon, Double rightLon) {
        GeometryFactory geometryFactory = new GeometryFactory(new PrecisionModel(), 4326);
        Coordinate[] coords = new Coordinate[] {
                new Coordinate(leftLon, lowerLat),
                new Coordinate(leftLon, upperLat),
                new Coordinate(rightLon, upperLat),
                new Coordinate(rightLon, lowerLat),
                new Coordinate(leftLon, lowerLat)
        };

        Polygon box = geometryFactory.createPolygon(coords);
        List<Location> foundLocs = locationRepository.findWithin(box);
        return foundLocs;
    }
}
