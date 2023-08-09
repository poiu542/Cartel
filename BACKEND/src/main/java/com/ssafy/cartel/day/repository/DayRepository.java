package com.ssafy.cartel.day.repository;

import com.ssafy.cartel.day.entity.Day;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DayRepository extends JpaRepository<Day, Integer> {
}
