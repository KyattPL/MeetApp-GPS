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

    List<Location> findDistinctTop10ByCityNameContainingIgnoreCaseOrderById(String cityName);

    @Query("select l from Location l where within(l.point,:filter) = true")
    List<Location> findWithin(Geometry filter);
}
