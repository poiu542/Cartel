package com.ssafy.cartel.repository;


import com.ssafy.cartel.domain.Career;
import com.ssafy.cartel.domain.Counsel;
import com.ssafy.cartel.domain.Counselor;
import com.ssafy.cartel.dto.CounselorDto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CounselorRepository extends JpaRepository<Counselor,Integer> {


}
