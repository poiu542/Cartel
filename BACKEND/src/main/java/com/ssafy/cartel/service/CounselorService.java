package com.ssafy.cartel.service;

import com.ssafy.cartel.domain.Counselor;
import com.ssafy.cartel.domain.User;
import com.ssafy.cartel.dto.CounselorDto;
import com.ssafy.cartel.dto.UpdateCounselorRequest;
import com.ssafy.cartel.dto.UpdateUserRequest;
import com.ssafy.cartel.repository.CounselorRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class CounselorService {

    private final CounselorRepository counselorRepository;

    public Integer save(CounselorDto counselorDto){
        return counselorRepository.save(Counselor.builder()
                .school(counselorDto.getSchool())
                .license(counselorDto.getLicenseImg())
                .regist(counselorDto.getRegistImg())
                .rateSum(0)
                .state(0)
                .build()).getId();
    }

    public Counselor findById(Integer id){
        return counselorRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("not found:" + id));

    }

    @Transactional
    public Counselor update(Integer id, UpdateCounselorRequest request){
        Counselor counselor = counselorRepository.findById(id)
                .orElseThrow(()->new IllegalArgumentException("not found"+ id));

        counselor.update(request);
        return counselor;
    }



}
