package com.ssafy.cartel.repository;

import com.ssafy.cartel.domain.Consulting;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ConsultingRepository extends JpaRepository<Consulting, Integer> {

}
