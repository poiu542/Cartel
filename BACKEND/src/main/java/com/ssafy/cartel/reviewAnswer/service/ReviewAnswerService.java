package com.ssafy.cartel.reviewAnswer.service;

import com.ssafy.cartel.reviewAnswer.entity.ReviewAnswer;
import com.ssafy.cartel.reviewAnswer.dto.ReviewAnswerDto;
import com.ssafy.cartel.reviewAnswer.repository.ReviewAnswerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Transactional(readOnly = true)
@RequiredArgsConstructor //final , @notnull 붙은 필드의 생성자 추가
@Service //빈으로 등록
public class ReviewAnswerService {
    private final ReviewAnswerRepository reviewAnswerRepository;

    @Transactional
    public ReviewAnswer save(ReviewAnswerDto reviewAnswerDto){
        return reviewAnswerRepository.save(reviewAnswerDto.toEntity());
    }

    public List<ReviewAnswer> findAll(){
        return reviewAnswerRepository.findAll();
    }

    public Optional<ReviewAnswer> findById(Integer id){
        return Optional.ofNullable(reviewAnswerRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("not found:" + id)));
    }

    @Transactional
    public void delete(Integer id){
        reviewAnswerRepository.deleteById(id);
    }

    @Transactional
    public ReviewAnswer update(Integer id, ReviewAnswerDto reviewAnswerDto){
        ReviewAnswer reviewAnswer = reviewAnswerRepository.findById(id)
                .orElseThrow(()-> new IllegalArgumentException("not found:" + id));

        reviewAnswer.update(reviewAnswerDto.getAnswer());

        return reviewAnswer;
    }


}