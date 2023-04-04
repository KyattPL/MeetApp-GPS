package com.meetapp.meetapp.specification;

import com.meetapp.meetapp.model.*;
import jakarta.persistence.criteria.Expression;
import lombok.val;
import org.springframework.data.jpa.domain.Specification;

import java.util.Collection;
import java.util.List;

public class AnnouncementSpecifications {
    public static Specification<Announcement> hasCategory(List<Integer> categoryIds) {
        return (announcement, cq, cb) -> {
            cq.distinct(true);
            val categorySubquery = cq.subquery(Category.class);
            val categoryObj = categorySubquery.from(Category.class);
            Expression<Collection<Announcement>> categoryPosts = categoryObj.get("posts");
            categorySubquery.select(categoryObj);
            categorySubquery.where(cb.in(categoryObj.get("id")).value(categoryIds), cb.isMember(announcement, categoryPosts));
            return cb.exists(categorySubquery);
        };
    }

    public static Specification<Announcement> hasLocation(List<Integer> locationIds) {
        return (announcement, cq, cb) -> {
            cq.distinct(true);
            val locationSubquery = cq.subquery(Location.class);
            val locationObj = locationSubquery.from(Location.class);

            locationSubquery.select(locationObj);
            locationSubquery.where(cb.in(locationObj.get("id")).value(locationIds),
                        cb.equal(announcement.get("location").get("city"), locationObj.get("city")),
                        cb.equal(announcement.get("location").get("voivodeship"), locationObj.get("voivodeship")));

            return cb.exists(locationSubquery);
        };
    }

    public static Specification<Announcement> titleContains(String searchedPhrase) {
        return (announcement, cq, cb) -> cb.like(cb.lower(announcement.get("title")), "%" + searchedPhrase.toLowerCase() + "%");
    }

    public static Specification<Announcement> isActive() {
        return (announcement, cq, cb) -> cb.isTrue(announcement.get("isActive"));
    }
}
