package com.ssafy.cartel.domain.evaluation.repository;

import com.ssafy.cartel.domain.evaluation.entity.Evaluation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EvaluationRepository extends JpaRepository<Evaluation, Integer> {
}
