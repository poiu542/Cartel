package com.ssafy.cartel.repository;

import com.ssafy.cartel.domain.Consulting;
import com.ssafy.cartel.dto.ConsultingResDto;
import com.ssafy.cartel.dto.CounselDto;
import com.ssafy.cartel.dto.CounselResDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ConsultingRepository extends JpaRepository<Consulting, Integer> {

    List<Consulting> findByClientId(Consulting consulting);
}
