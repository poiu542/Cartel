package com.ssafy.cartel.review.dto;

import com.ssafy.cartel.client.entity.Client;
import com.ssafy.cartel.curriculum.entity.Curriculum;
import com.ssafy.cartel.review.entity.Review;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@NoArgsConstructor //기본 생성자
@AllArgsConstructor //모든 필드값을 파라미터로 받는 생성자
@Getter
public class ReviewDto {

    private Client clientId;
    private Curriculum curriculumId;
    private Integer state;
    private LocalDateTime date;

    public Review toEntity() {
        return Review.builder()
                .clientId(clientId)
                .curriculumId(curriculumId)
                .state(state)
                .date(LocalDateTime.now())
                .build();
    }
}
