package com.ssafy.cartel.service;

import com.ssafy.cartel.domain.Article;
import com.ssafy.cartel.domain.Career;
import com.ssafy.cartel.domain.Counselor;
import com.ssafy.cartel.domain.User;
import com.ssafy.cartel.dto.ArticleDto;
import com.ssafy.cartel.dto.CareerDto;
import com.ssafy.cartel.dto.UserDto;
import com.ssafy.cartel.repository.CareerRepository;
import com.ssafy.cartel.repository.CounselorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CareerService {

    private final CounselorRepository counselorRepository;
    private final CareerRepository careerRepository;


    public Career save(CareerDto career){
        Counselor counselor = counselorRepository.findById(career.getCounselorId())
                .orElseThrow(()-> new IllegalArgumentException("not found counselorId"));;

        return careerRepository.save(Career.builder()
                .content(career.getContent())
                .counselor(counselor)
                .state(0)
                .build());
    }

}
