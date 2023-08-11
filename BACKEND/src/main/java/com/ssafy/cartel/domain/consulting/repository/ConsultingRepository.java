package com.ssafy.cartel.domain.consulting.repository;

import com.ssafy.cartel.domain.consulting.entity.Consulting;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ConsultingRepository extends JpaRepository<Consulting, Integer> {

    @Query("select c from Consulting c join fetch c.clientId ")
    Consulting selectConsulting(Integer id);
}
