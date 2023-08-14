package com.ssafy.cartel.controller;

import com.ssafy.cartel.dto.CounselImgDto;
import com.ssafy.cartel.service.CounselImgService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/counsel_img")
@Slf4j
public class CounselImgController {
    private final CounselImgService counselImgService;

    // 전체 조회
    @GetMapping
    public ResponseEntity<List<CounselImgDto>> findAllCounselImgs(){
        List<CounselImgDto> counselImgDtoList = counselImgService.findAll();

        return ResponseEntity.ok()
                .body(counselImgDtoList);
    }

    // 조회
    @GetMapping("/{counsel_img_id}")
    public ResponseEntity<?> findCounselImg(@PathVariable Integer counsel_img_id) {
        CounselImgDto counselImgDto = counselImgService.findById(counsel_img_id);
        return ResponseEntity.ok().body(counselImgDto);
    }

    // 등록
    @PostMapping
    public ResponseEntity<?> registCounselImg(@RequestBody CounselImgDto counselImgDto){
        counselImgService.save(counselImgDto);
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
