package com.ssafy.cartel.domain.consulting.controller;

import com.ssafy.cartel.domain.consulting.entity.Consulting;
import com.ssafy.cartel.domain.consulting.dto.ConsultingDto;
import com.ssafy.cartel.domain.consulting.service.ConsultingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/counsel/consulting")
public class ConsultingController {
    private final ConsultingService consultingService;

    // 목록 조회
    @GetMapping("/")
    public ResponseEntity<List<Consulting>> findAllConsultings(){
        List<Consulting> consultings = consultingService.findAll();

        return ResponseEntity.ok()
                .body(consultings);
    }

    // 조회
    @GetMapping("/{id}")
    public ResponseEntity<?> findConsulting(@PathVariable Integer id) {
        Optional<Consulting> consulting = consultingService.findById(id);
        return ResponseEntity.ok().body(consulting);
    }

    // 등록
    @PostMapping("/")
    public ResponseEntity<?> registConsulting(@RequestBody ConsultingDto consultingDto){
        consultingService.save(consultingDto);
        return ResponseEntity.ok().build();
    }

    // 수정
    @PutMapping("/")
    public ResponseEntity<?> updateConsulting(@PathVariable Integer id, @RequestBody ConsultingDto consultingDto) {
        consultingService.update(id, consultingDto);
        return ResponseEntity.ok().build();
    }

    // 삭제
    @DeleteMapping("/")
    public ResponseEntity<?> deleteConsulting(@PathVariable Integer id){
        consultingService.delete(id);
        return ResponseEntity.ok().build();
    }
}
