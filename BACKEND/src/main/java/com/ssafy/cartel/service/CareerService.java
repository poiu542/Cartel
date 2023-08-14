package com.ssafy.cartel.service;

import com.ssafy.cartel.domain.Career;
import com.ssafy.cartel.domain.Counselor;
import com.ssafy.cartel.dto.CareerDto;
import com.ssafy.cartel.repository.CareerRepository;
import com.ssafy.cartel.repository.CounselorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Transactional(readOnly = true)
@RequiredArgsConstructor //final , @notnull 붙은 필드의 생성자 추가
@Service //빈으로 등록
public class CareerService {
    private final CareerRepository careerRepository;
    private final CounselorRepository counselorRepository;

    @Transactional
    public Career save(CareerDto careerDto){
        Counselor counselor = counselorRepository.findById(careerDto.getCounselorId()).orElseThrow();
        return careerRepository.save(careerDto.toEntity(counselor));
    }

    public List<CareerDto> findAll(){
        List<Career> career = careerRepository.findAll();
        List<CareerDto> careerDtoList = new ArrayList<>();

        for (int i = 0; i < career.size(); i++) {
            CareerDto careerDto = CareerDto.builder()
                    .careerId(career.get(i).getId())
                    .content(career.get(i).getContent())
                    .state(career.get(i).getState())
                    .counselorId(career.get(i).getCounselorId().getId())
                    .build();

            careerDtoList.add(careerDto);
        }
        return careerDtoList;
    }

    public CareerDto findById(Integer id){
        Career career = careerRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("not found:" + id));
        CareerDto careerDto = CareerDto.builder()
                .careerId(career.getId())
                .content(career.getContent())
                .state(career.getState())
                .counselorId(career.getCounselorId().getId())
                .build();

        return careerDto;
    }

//    @Transactional
//    public void delete(Integer id){
//        careerRepository.deleteById(id);
//    }
//
//    @Transactional
//    public Career update(Integer id, UpdateCareerRequest updateCareerRequest){
//        Career career = careerRepository.findById(id)
//                .orElseThrow(()-> new IllegalArgumentException("not found:" + id));
//
//        career.update(updateCareerRequest.getContent(), updateCareerRequest.getState());
//
//        return career;
//    }


}