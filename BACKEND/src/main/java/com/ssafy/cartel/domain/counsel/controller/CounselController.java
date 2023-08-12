package com.ssafy.cartel.domain.counsel.controller;

import com.ssafy.cartel.domain.counsel.entity.Counsel;
import com.ssafy.cartel.domain.counsel.dto.CounselDto;
import com.ssafy.cartel.domain.counsel.service.CounselService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/counsel")
public class CounselController {
    private final CounselService counselService;

    //상담 목록 조회
    @GetMapping
    public ResponseEntity<List<Counsel>> findAllCounsels(){
        List<Counsel> counsels = counselService.findAll();

        return ResponseEntity.ok()
                .body(counsels);
    }

    // 조회
    @GetMapping("/{counsel_id}")
    public ResponseEntity<?> findCounsel(@PathVariable Integer counsel_id) {
        Counsel counsel = counselService.findById(counsel_id);
        return ResponseEntity.ok().body(counsel);
    }

    // 등록
    @PostMapping
    public ResponseEntity<?> registCounsel(@RequestBody CounselDto counselDto){
        counselService.save(counselDto);
        return ResponseEntity.ok().build();
    }

    // 수정
    @PutMapping("/{counsel_id}")
    public ResponseEntity<?> updateCounsel(@PathVariable Integer counsel_id, @RequestBody CounselDto counselDto) {
        counselService.update(counsel_id, counselDto);
        return ResponseEntity.ok().build();
    }

    // 삭제
    @DeleteMapping("/{counsel_id}")
    public ResponseEntity<?> deleteCounsel(@PathVariable Integer counsel_id){
        counselService.delete(counsel_id);
        return ResponseEntity.ok().build();
    }
}
