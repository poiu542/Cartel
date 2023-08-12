package com.ssafy.cartel.domain.reviewQuestion.controller;

import com.ssafy.cartel.domain.reviewQuestion.dto.ReviewQuestionDto;
import com.ssafy.cartel.domain.reviewQuestion.entity.ReviewQuestion;
import com.ssafy.cartel.domain.reviewQuestion.service.ReviewQuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/review_question")
public class ReviewQuestionController {
    private final ReviewQuestionService reviewQuestionService;

    // 목록 조회
    @GetMapping("/")
    public ResponseEntity<List<ReviewQuestion>> findAllReviewQuestions(){
        List<ReviewQuestion> reviewQuestions = reviewQuestionService.findAll();

        return ResponseEntity.ok()
                .body(reviewQuestions);
    }

    // 조회
    @GetMapping("/{id}")
    public ResponseEntity<?> findReviewQuestion(@PathVariable Integer id) {
        Optional<ReviewQuestion> reviewQuestion = reviewQuestionService.findById(id);
        return ResponseEntity.ok().body(reviewQuestion);
    }

    // 등록
    @PostMapping("/")
    public ResponseEntity<?> registReviewQuestion(@RequestBody ReviewQuestionDto reviewQuestionDto){
        reviewQuestionService.save(reviewQuestionDto);
        return ResponseEntity.ok().build();
    }

    // 수정
    @PutMapping("/{id}")
    public ResponseEntity<?> updateReviewQuestion(@PathVariable Integer id, @RequestBody ReviewQuestionDto reviewQuestionDto) {
        reviewQuestionService.update(id, reviewQuestionDto);
        return ResponseEntity.ok().build();
    }

    // 삭제
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteReviewQuestion(@PathVariable Integer id){
        reviewQuestionService.delete(id);
        return ResponseEntity.ok().build();
    }
}
