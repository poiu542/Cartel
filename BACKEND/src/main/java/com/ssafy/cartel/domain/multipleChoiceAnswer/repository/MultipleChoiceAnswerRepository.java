package com.ssafy.cartel.domain.multipleChoiceAnswer.repository;

import com.ssafy.cartel.domain.multipleChoiceAnswer.entity.MultipleChoiceAnswer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MultipleChoiceAnswerRepository extends JpaRepository<MultipleChoiceAnswer, Integer> {
}
