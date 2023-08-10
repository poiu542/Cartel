//package com.ssafy.cartel.review.controller;
//
//import com.ssafy.cartel.review.entity.Review;
//import com.ssafy.cartel.review.dto.ReviewDto;
//import com.ssafy.cartel.review.service.ReviewService;
//import lombok.RequiredArgsConstructor;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//import java.util.Optional;
//
//@RestController
//@RequiredArgsConstructor
//@RequestMapping("/review")
//public class ReviewController {
//    private final ReviewService reviewService;
//
//    // 목록 조회
//    @GetMapping("/")
//    public ResponseEntity<List<Review>> findAllReviews(){
//        List<Review> reviews = reviewService.findAll();
//
//        return ResponseEntity.ok()
//                .body(reviews);
//    }
//
//    // 조회
//    @GetMapping("/{review_id}")
//    public ResponseEntity<?> findReview(@PathVariable Integer review_id) {
//        Review review = reviewService.findById(review_id).orElseThrow();
//
//
//        return ResponseEntity.ok().body(review);
//    }
//
//    // 등록
//    @PostMapping("/")
//    public ResponseEntity<?> registReview(@RequestBody ReviewDto reviewDto){
//        reviewService.save(reviewDto);
//        return ResponseEntity.ok().build();
//    }
//
//    // 수정
//    @PutMapping("/{review_id}")
//    public ResponseEntity<?> updateReview(@PathVariable Integer review_id, @RequestBody ReviewDto reviewDto) {
//        reviewService.update(review_id, reviewDto);
//        return ResponseEntity.ok().build();
//    }
//
//    // 삭제
//    @DeleteMapping("/{review_id}")
//    public ResponseEntity<?> deleteReview(@PathVariable Integer review_id){
//        reviewService.delete(review_id);
//        return ResponseEntity.ok().build();
//    }
//}
