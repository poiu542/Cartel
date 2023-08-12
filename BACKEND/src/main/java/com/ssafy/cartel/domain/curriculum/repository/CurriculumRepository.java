package com.ssafy.cartel.domain.curriculum.repository;

import com.ssafy.cartel.domain.curriculum.entity.Curriculum;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CurriculumRepository extends JpaRepository<Curriculum, Integer> {
}
