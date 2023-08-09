package com.ssafy.cartel.curriculum.repository;

import com.ssafy.cartel.curriculum.entity.Curriculum;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CurriculumRepository extends JpaRepository<Curriculum, Integer> {
}
