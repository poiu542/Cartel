package com.ssafy.cartel.consulting.repository;

import com.ssafy.cartel.consulting.entity.Consulting;
import com.ssafy.cartel.counsel.dto.CounselDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ConsultingRepository extends JpaRepository<Consulting, Integer> {

    @Query("select c from Consulting c join fetch c.clientId ")
    Consulting selectConsulting(Integer id);
}
