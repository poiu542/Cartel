package com.ssafy.cartel.consulting.controller;

import com.ssafy.cartel.consulting.dto.ConsultingResDto;
import com.ssafy.cartel.consulting.entity.Consulting;
import com.ssafy.cartel.consulting.dto.ConsultingDto;
import com.ssafy.cartel.consulting.service.ConsultingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/consulting")
public class ConsultingController {
    private final ConsultingService consultingService;

    // 목록 조회
    @GetMapping()
    public ResponseEntity<List<Consulting>> findAllConsultingList(){
        List<Consulting> consultingList = consultingService.findAll();

        return ResponseEntity.ok()
                .body(consultingList);
    }

    // 조회
    @GetMapping("/{consulting_id}")
    public ResponseEntity<?> findConsulting(@PathVariable Integer consulting_id) {
        ConsultingResDto consultingResDto = consultingService.findById(consulting_id);
        return ResponseEntity.ok().body(consultingResDto);
    }

    // 등록
    @PostMapping()
    public ResponseEntity<?> registConsulting(@RequestBody ConsultingDto consultingDto){
        consultingService.save(consultingDto);
        return ResponseEntity.ok().build();
    }

//    // 수정
//    @PutMapping()
//    public ResponseEntity<?> updateConsulting(@PathVariable Integer id, @RequestBody ConsultingDto consultingDto) {
//        consultingService.update(id, consultingDto);
//        return ResponseEntity.ok().build();
//    }

//    // 삭제
//    @DeleteMapping("/")
//    public ResponseEntity<?> deleteConsulting(@PathVariable Integer id){
//        consultingService.delete(id);
//        return ResponseEntity.ok().build();
//    }
}
