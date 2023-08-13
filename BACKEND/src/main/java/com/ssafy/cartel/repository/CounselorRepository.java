package com.ssafy.cartel.repository;


import com.ssafy.cartel.domain.Counsel;
import com.ssafy.cartel.domain.Counselor;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CounselorRepository extends JpaRepository<Counselor,Integer> {
}
