package com.ssafy.cartel.domain.reviewAnswer.dto;

import com.ssafy.cartel.domain.reviewAnswer.entity.ReviewAnswer;
import com.ssafy.cartel.domain.reviewQuestion.entity.ReviewQuestion;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@NoArgsConstructor //기본 생성자
@AllArgsConstructor //모든 필드값을 파라미터로 받는 생성자
@Getter
public class ReviewAnswerDto {

    private String answer;
    private LocalDateTime date;
    private ReviewQuestion reviewQuestion;

    public ReviewAnswer toEntity() {
        return ReviewAnswer.builder()
                .answer(answer)
                .date(LocalDateTime.now())
                .reviewQuestion(reviewQuestion)
                .build();
    }
}
