package com.ssafy.cartel.domain.review.repository;

import com.ssafy.cartel.domain.review.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Integer> {
}
