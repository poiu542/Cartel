package com.ssafy.cartel.domain.reviewAnswer.controller;

import com.ssafy.cartel.domain.reviewAnswer.dto.ReviewAnswerDto;
import com.ssafy.cartel.domain.reviewAnswer.entity.ReviewAnswer;
import com.ssafy.cartel.domain.reviewAnswer.service.ReviewAnswerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/review_answer")
public class ReviewAnswerController {
    private final ReviewAnswerService reviewAnswerService;

    // 목록 조회
    @GetMapping("/")
    public ResponseEntity<List<ReviewAnswer>> findAllReviewAnswers(){
        List<ReviewAnswer> reviewAnswers = reviewAnswerService.findAll();

        return ResponseEntity.ok()
                .body(reviewAnswers);
    }

    // 조회
    @GetMapping("/{id}")
    public ResponseEntity<?> findReviewAnswer(@PathVariable Integer id) {
        Optional<ReviewAnswer> reviewAnswer = reviewAnswerService.findById(id);
        return ResponseEntity.ok().body(reviewAnswer);
    }

    // 등록
    @PostMapping("/")
    public ResponseEntity<?> registReviewAnswer(@RequestBody ReviewAnswerDto reviewAnswerDto){
        reviewAnswerService.save(reviewAnswerDto);
        return ResponseEntity.ok().build();
    }

    // 수정
    @PutMapping("/{id}")
    public ResponseEntity<?> updateReviewAnswer(@PathVariable Integer id, @RequestBody ReviewAnswerDto reviewAnswerDto) {
        reviewAnswerService.update(id, reviewAnswerDto);
        return ResponseEntity.ok().build();
    }

    // 삭제
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteReviewAnswer(@PathVariable Integer id){
        reviewAnswerService.delete(id);
        return ResponseEntity.ok().build();
    }
}
