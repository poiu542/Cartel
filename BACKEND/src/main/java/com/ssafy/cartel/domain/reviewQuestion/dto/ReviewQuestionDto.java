package com.ssafy.cartel.domain.reviewQuestion.dto;

import com.ssafy.cartel.domain.review.entity.Review;
import com.ssafy.cartel.domain.reviewQuestion.entity.ReviewQuestion;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor //기본 생성자
@AllArgsConstructor //모든 필드값을 파라미터로 받는 생성자
@Getter
public class ReviewQuestionDto {

    private String question;
    private Integer type;
    private Review review;

    public ReviewQuestion toEntity() {
        return ReviewQuestion.builder()
                .question(question)
                .type(type)
                .review(review)
                .build();
    }
}
