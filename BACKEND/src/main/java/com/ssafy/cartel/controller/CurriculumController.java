package com.ssafy.cartel.controller;

import com.ssafy.cartel.dto.CurriculumDto;
import com.ssafy.cartel.service.CurriculumService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/curriculum")
public class CurriculumController {
    private final CurriculumService curriculumService;

    // 전체 조회
    @GetMapping
    public ResponseEntity<List<CurriculumDto>> findAllCurriculums(){
        List<CurriculumDto> curriculumList = curriculumService.findAll();

        return ResponseEntity.ok()
                .body(curriculumList);
    }

    // 조회
    @GetMapping("/{curriculum_id}")
    public ResponseEntity<?> findCurriculum(@PathVariable Integer curriculum_id) {
        CurriculumDto curriculumDto = curriculumService.findById(curriculum_id);
        return ResponseEntity.ok().body(curriculumDto);
    }

    // 등록
    @PostMapping
    public ResponseEntity<?> registCurriculum(@RequestBody CurriculumDto curriculumDto){
        curriculumService.save(curriculumDto);
        return ResponseEntity.ok().build();
    }

    // 수정
    @PutMapping("/{curriculum_id}")
    public ResponseEntity<?> updateCurriculum(@PathVariable Integer curriculum_id, @RequestBody CurriculumDto curriculumDto) {
        curriculumService.update(curriculum_id, curriculumDto);
        return ResponseEntity.ok().build();
    }

//    // 삭제
//    @PutMapping("/delete/{counsel_id}")
//    public ResponseEntity<?> updateCounselState(@PathVariable Integer counsel_id, CounselDto counselDto){
//        counselService.updateState(counsel_id, counselDto);
//        return ResponseEntity.ok().build();
//    }
}