package com.meetapp.meetapp.repository;

import com.meetapp.meetapp.model.Location;
import org.locationtech.jts.geom.Geometry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface LocationRepository extends JpaRepository<Location, Integer> {
    Optional<Location> findByCityNameAndVoivodeshipName(String cityName, String voivodeshipName);

    List<Location> findDistinctTop10ByIsPostRelatedFalseAndCityNameContainingIgnoreCaseOrderById(String cityName);

    @Query("select l from Location l where l.isPostRelated = true and within(l.point,:filter) = true")
    List<Location> findWithin(Geometry filter);

    @Query("select l from Location l where l.isPostRelated = true and st_distancesphere(l.point, st_makepoint(:longitude, :latitude)) <= :radius")
    List<Location> findWithinRadius(double longitude, double latitude, double radius);
}
