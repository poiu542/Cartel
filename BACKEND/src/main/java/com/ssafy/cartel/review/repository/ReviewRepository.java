package com.ssafy.cartel.review.repository;

import com.ssafy.cartel.review.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Integer> {
}
