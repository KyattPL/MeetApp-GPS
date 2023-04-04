package com.meetapp.meetapp.specification;

import com.meetapp.meetapp.model.Category;
import com.meetapp.meetapp.model.Location;
import com.meetapp.meetapp.model.Meeting;
import jakarta.persistence.criteria.Expression;
import lombok.val;
import org.springframework.data.jpa.domain.Specification;

import java.util.Collection;
import java.util.List;

public class MeetingSpecifications {
    public static Specification<Meeting> hasCategory(List<Integer> categoryIds) {
        return (meeting, cq, cb) -> {
            cq.distinct(true);
            val categorySubquery = cq.subquery(Category.class);
            val categoryObj = categorySubquery.from(Category.class);
            Expression<Collection<Meeting>> categoryPosts = categoryObj.get("posts");
            categorySubquery.select(categoryObj);
            categorySubquery.where(cb.in(categoryObj.get("id")).value(categoryIds), cb.isMember(meeting, categoryPosts));
            return cb.exists(categorySubquery);
        };
    }

    public static Specification<Meeting> hasLocation(List<Integer> locationIds) {
        return (meeting, cq, cb) -> {
            cq.distinct(true);
            val locationSubquery = cq.subquery(Location.class);
            val locationObj = locationSubquery.from(Location.class);

            locationSubquery.select(locationObj);
            locationSubquery.where(cb.in(locationObj.get("id")).value(locationIds),
                    cb.equal(meeting.get("location").get("city"), locationObj.get("city")),
                    cb.equal(meeting.get("location").get("voivodeship"), locationObj.get("voivodeship")));

            return cb.exists(locationSubquery);
        };
    }

    public static Specification<Meeting> titleContains(String searchedPhrase) {
        return (meeting, cq, cb) -> cb.like(cb.lower(meeting.get("title")), "%" + searchedPhrase.toLowerCase() + "%");
    }

    public static Specification<Meeting> isActive() {
        return (meeting, cq, cb) -> cb.isTrue(meeting.get("isActive"));
    }
}
