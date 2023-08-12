package com.ssafy.cartel.domain.review.service;

import com.ssafy.cartel.domain.review.entity.Review;
import com.ssafy.cartel.domain.review.dto.ReviewDto;
import com.ssafy.cartel.domain.review.repository.ReviewRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Transactional(readOnly = true)
@RequiredArgsConstructor //final , @notnull 붙은 필드의 생성자 추가
@Service //빈으로 등록
public class ReviewService {
    private final ReviewRepository reviewRepository;

    @Transactional
    public Review save(ReviewDto reviewDto){
        return reviewRepository.save(reviewDto.toEntity());
    }

    public List<Review> findAll(){
        return reviewRepository.findAll();
    }

    public Optional<Review> findById(Integer id){
        return Optional.ofNullable(reviewRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("not found:" + id)));
    }

    @Transactional
    public void delete(Integer id){
        reviewRepository.deleteById(id);
    }

    @Transactional
    public Review update(Integer id, ReviewDto reviewDto){
        Review review = reviewRepository.findById(id)
                .orElseThrow(()-> new IllegalArgumentException("not found:" + id));

        review.update(reviewDto.getClientId(),reviewDto.getCurriculumId(),reviewDto.getState(),reviewDto.getDate());
        return review;
    }


}