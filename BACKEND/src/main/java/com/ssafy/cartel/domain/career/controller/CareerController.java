package com.ssafy.cartel.domain.career.controller;

import com.ssafy.cartel.domain.career.entity.Career;
import com.ssafy.cartel.domain.career.dto.CareerDto;
import com.ssafy.cartel.domain.career.dto.UpdateCareerRequest;
import com.ssafy.cartel.domain.career.service.CareerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/counsel/career")
public class CareerController {
    private final CareerService careerService;

    @GetMapping("/")
    // 목록 조회
    public ResponseEntity<List<Career>> findAllCareers(){
        List<Career> careers = careerService.findAll();
        return ResponseEntity.ok()
                .body(careers);
    }

    // 조회
    @GetMapping("/{career_id}")
    public ResponseEntity<?> findCareer(@PathVariable Integer career_id) {
        Optional<Career> career = careerService.findById(career_id);
        return ResponseEntity.ok().body(career);
    }

    // 등록
    @PostMapping("/")
    public ResponseEntity<?> registCareer(@RequestBody CareerDto careerDto){
        careerService.save(careerDto);
        return ResponseEntity.ok().build();
    }

    // 수정
    @PutMapping("/{career_id}")
    public ResponseEntity<?> updateCareer(@PathVariable Integer career_id, @RequestBody UpdateCareerRequest request) {
        careerService.update(career_id, request);
        return ResponseEntity.ok().build();
    }

    // 삭제
    @DeleteMapping("/{career_id}")
    public ResponseEntity<?> deleteCareer(@PathVariable Integer career_id){
        careerService.delete(career_id);
        return ResponseEntity.ok().build();
    }
}
