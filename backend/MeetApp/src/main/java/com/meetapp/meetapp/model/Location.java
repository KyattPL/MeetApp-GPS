package com.meetapp.meetapp.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;
import org.locationtech.jts.geom.Coordinate;
import org.locationtech.jts.geom.GeometryFactory;
import org.locationtech.jts.geom.Point;
import org.n52.jackson.datatype.jts.GeometryDeserializer;
import org.n52.jackson.datatype.jts.GeometrySerializer;

@Entity
@Getter
@Setter
public class Location {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "location_generator")
    @SequenceGenerator(name = "location_generator", sequenceName = "location_sequence", allocationSize = 1)
    private Integer id;

    @NotNull
    @JoinColumn(nullable = false)
    @ManyToOne(optional = false)
    private City city;

    @NotNull
    @JoinColumn(nullable = false)
    @ManyToOne(optional = false)
    private Voivodeship voivodeship;

    @NotNull
    @JsonSerialize(using = GeometrySerializer.class)
    @JsonDeserialize(using = GeometryDeserializer.class)
    @Column(nullable = false, columnDefinition = "geometry(Point,4326)")
    private Point point;

    public Location() {
        id = 0;
    }

    public Location(City city, Voivodeship voivodeship, Double latitude, Double longitude) {
        this();

        this.city = city;
        this.voivodeship = voivodeship;

        GeometryFactory geometryFactory = new GeometryFactory();
        this.point = geometryFactory.createPoint(new Coordinate(longitude, latitude));
    }
}
