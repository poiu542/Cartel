package com.ssafy.cartel.reviewQuestion.repository;

import com.ssafy.cartel.reviewQuestion.entity.ReviewQuestion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewQuestionRepository extends JpaRepository<ReviewQuestion, Integer> {
}
