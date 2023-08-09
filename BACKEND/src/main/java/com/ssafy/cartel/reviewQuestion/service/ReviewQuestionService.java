package com.ssafy.cartel.reviewQuestion.service;

import com.ssafy.cartel.reviewQuestion.entity.ReviewQuestion;
import com.ssafy.cartel.reviewQuestion.dto.ReviewQuestionDto;
import com.ssafy.cartel.reviewQuestion.repository.ReviewQuestionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Transactional(readOnly = true)
@RequiredArgsConstructor //final , @notnull 붙은 필드의 생성자 추가
@Service //빈으로 등록
public class ReviewQuestionService {
    private final ReviewQuestionRepository reviewQuestionRepository;

    @Transactional
    public ReviewQuestion save(ReviewQuestionDto reviewQuestionDto){
        return reviewQuestionRepository.save(reviewQuestionDto.toEntity());
    }

    public List<ReviewQuestion> findAll(){
        return reviewQuestionRepository.findAll();
    }

    public Optional<ReviewQuestion> findById(Integer id){
        return Optional.ofNullable(reviewQuestionRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("not found:" + id)));
    }

    @Transactional
    public void delete(Integer id){
        reviewQuestionRepository.deleteById(id);
    }

    @Transactional
    public ReviewQuestion update(Integer id, ReviewQuestionDto reviewQuestionDto){
        ReviewQuestion reviewQuestion = reviewQuestionRepository.findById(id)
                .orElseThrow(()-> new IllegalArgumentException("not found:" + id));

        reviewQuestion.update(reviewQuestionDto.getQuestion());
        return reviewQuestion;
    }


}