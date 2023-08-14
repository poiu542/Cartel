package com.ssafy.cartel.controller;

import com.ssafy.cartel.domain.Evaluation;
import com.ssafy.cartel.dto.EvaluationDto;
import com.ssafy.cartel.dto.EvaluationResponse;
import com.ssafy.cartel.dto.UpdateEvaluationRequest;
import com.ssafy.cartel.service.EvaluationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
public class EvaluationController {

    private final EvaluationService evaluationService;

    @PostMapping("/evaluation")
    public ResponseEntity<?> addEvaluation(@RequestBody EvaluationDto evaluationDto) {
        Evaluation saveEvaluation = evaluationService.save(evaluationDto);

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(saveEvaluation);
    }

    @GetMapping("/evaluation/{id}")
    public ResponseEntity<?> findEvaluation(@PathVariable Integer id){
        Evaluation evaluation = evaluationService.findById(id);

        return ResponseEntity.ok().body(new EvaluationResponse(evaluation));
    }

    @DeleteMapping("/evaluation/{id}")
    public ResponseEntity<Void> deleteEvaluation(@PathVariable Integer id){
        evaluationService.delete(id);

        return ResponseEntity.ok()
                .build();
    }

    @PutMapping("/evaluation/{id}")
    public ResponseEntity<Evaluation> updateArticle(@PathVariable Integer id, @RequestBody UpdateEvaluationRequest request){
        Evaluation evaluation = evaluationService.update(id, request);

        return ResponseEntity.ok()
                .body(evaluation);
    }

    // 상담사 평점 평균
    @GetMapping("/evaluation/average/{counselId}")
    public ResponseEntity<?> averageRate(@PathVariable Integer counselId) {
        String average = evaluationService.sumRate(counselId);
        return ResponseEntity.ok()
                .body(average);
    }
}
