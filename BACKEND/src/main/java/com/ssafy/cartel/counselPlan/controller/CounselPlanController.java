package com.ssafy.cartel.counselPlan.controller;

import com.ssafy.cartel.day.dto.DayDto;
import com.ssafy.cartel.day.service.DayService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/day")
public class CounselPlanController {
    private final DayService dayService;

    // 전체 조회
    @GetMapping
    public ResponseEntity<List<DayDto>> findAllDays(){
        List<DayDto> dayDtoList = dayService.findAll();

        return ResponseEntity.ok()
                .body(dayDtoList);
    }

    // 조회
    @GetMapping("/{day_id}")
    public ResponseEntity<?> findDay(@PathVariable Integer day_id) {
        DayDto dayDto = dayService.findById(day_id);
        return ResponseEntity.ok().body(dayDto);
    }

    // 등록
    @PostMapping
    public ResponseEntity<?> registDay(@RequestBody DayDto dayDto){
        dayService.save(dayDto);
        return ResponseEntity.ok().build();
    }

//    // 수정
//    @PutMapping("/{counsel_id}")
//    public ResponseEntity<?> updateCounsel(@PathVariable Integer counsel_id, @RequestBody CounselDto counselDto) {
//        counselService.update(counsel_id, counselDto);
//        return ResponseEntity.ok().build();
//    }

//    // 삭제
//    @PutMapping("/delete/{counsel_id}")
//    public ResponseEntity<?> updateCounselState(@PathVariable Integer counsel_id, CounselDto counselDto){
//        counselService.updateState(counsel_id, counselDto);
//        return ResponseEntity.ok().build();
//    }
}
