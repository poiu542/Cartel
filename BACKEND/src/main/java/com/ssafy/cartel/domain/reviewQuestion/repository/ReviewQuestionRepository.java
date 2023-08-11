package com.ssafy.cartel.domain.reviewQuestion.repository;

import com.ssafy.cartel.domain.reviewQuestion.entity.ReviewQuestion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewQuestionRepository extends JpaRepository<ReviewQuestion, Integer> {
}
