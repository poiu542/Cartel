package com.ssafy.cartel.domain.multipleChoiceAnswer.dto;

import com.ssafy.cartel.domain.multipleChoiceType.entity.MultipleChoiceType;
import com.ssafy.cartel.domain.reviewQuestion.entity.ReviewQuestion;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor //기본 생성자
@AllArgsConstructor //모든 필드값을 파라미터로 받는 생성자
@Getter
public class MultipleChoiceAnswerDto {

    private ReviewQuestion reviewQuestion;
    private MultipleChoiceType multipleChoiceType;

}
