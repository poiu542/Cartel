package com.ssafy.cartel.evaluation.repository;

import com.ssafy.cartel.evaluation.entity.Evaluation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EvaluationRepository extends JpaRepository<Evaluation, Integer> {
}
