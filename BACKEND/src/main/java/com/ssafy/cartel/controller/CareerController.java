package com.ssafy.cartel.controller;

import com.ssafy.cartel.dto.CareerDto;
import com.ssafy.cartel.service.CareerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping("/career")
public class CareerController {
    private final CareerService careerService;

    @GetMapping
    // 목록 조회
    public ResponseEntity<List<CareerDto>> findAllCareers(){
        List<CareerDto> careerDtoList = careerService.findAll();
        return ResponseEntity.ok()
                .body(careerDtoList);
    }

    // 조회
    @GetMapping("/{career_id}")
    public ResponseEntity<?> findCareer(@PathVariable Integer career_id) {
        CareerDto careerDto = careerService.findById(career_id);
        return ResponseEntity.ok().body(careerDto);
    }

    // 등록
    @PostMapping
    public ResponseEntity<?> registCareer(@RequestBody CareerDto careerDto){
        careerService.save(careerDto);
        return ResponseEntity.ok().build();
    }

    // 수정
//    @PutMapping("/{career_id}")
//    public ResponseEntity<?> updateCareer(@PathVariable Integer career_id, @RequestBody UpdateCareerRequest request) {
//        careerService.update(career_id, request);
//        return ResponseEntity.ok().build();
//    }
//
//    // 삭제
//    @DeleteMapping("/{career_id}")
//    public ResponseEntity<?> deleteCareer(@PathVariable Integer career_id){
//        careerService.delete(career_id);
//        return ResponseEntity.ok().build();
//    }
}
