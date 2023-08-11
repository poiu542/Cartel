package com.ssafy.cartel.domain.counselor.controller;

import com.ssafy.cartel.domain.counselor.entity.Counselor;
import com.ssafy.cartel.domain.counselor.dto.CounselorDto;
import com.ssafy.cartel.domain.counselor.repository.CounselorRepository;
import com.ssafy.cartel.domain.counselor.service.CounselorService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class CounselorController {
    @Autowired
    private CounselorService counselorService;
    @Autowired
    private CounselorRepository counselorRepository;


    @PostMapping("/signup/counselor")
    public ResponseEntity<String> signup(@RequestBody CounselorDto counselorDto){
        if(counselorService.save(counselorDto) != null) {//회원가입
            Counselor counselor = counselorRepository.findById(counselorDto.getId())
                    .orElseThrow(() -> new IllegalArgumentException("해당 counselor가 없습니다."));
            counselorService.changeUserType(counselor.getId());
            return ResponseEntity.ok("회원가입이 완료 되었습니다.");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("회원가입 실패");
        }
    }
}
