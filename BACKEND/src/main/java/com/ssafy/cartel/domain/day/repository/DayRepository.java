package com.ssafy.cartel.domain.day.repository;

import com.ssafy.cartel.domain.day.entity.Day;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DayRepository extends JpaRepository<Day, Integer> {
}
