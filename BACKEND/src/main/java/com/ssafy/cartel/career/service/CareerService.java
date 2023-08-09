package com.ssafy.cartel.career.service;

import com.ssafy.cartel.career.entity.Career;
import com.ssafy.cartel.career.dto.CareerDto;
import com.ssafy.cartel.career.dto.UpdateCareerRequest;
import com.ssafy.cartel.career.repository.CareerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Transactional(readOnly = true)
@RequiredArgsConstructor //final , @notnull 붙은 필드의 생성자 추가
@Service //빈으로 등록
public class CareerService {
    private final CareerRepository careerRepository;

    @Transactional
    public Career save(CareerDto careerDto){
        return careerRepository.save(careerDto.toEntity());
    }

    public List<Career> findAll(){
        return careerRepository.findAll();
    }

    public Optional<Career> findById(Integer id){
        return Optional.ofNullable(careerRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("not found:" + id)));
    }

    @Transactional
    public void delete(Integer id){
        careerRepository.deleteById(id);
    }

    @Transactional
    public Career update(Integer id, UpdateCareerRequest updateCareerRequest){
        Career career = careerRepository.findById(id)
                .orElseThrow(()-> new IllegalArgumentException("not found:" + id));

        career.update(updateCareerRequest.getContent(), updateCareerRequest.getState());

        return career;
    }


}