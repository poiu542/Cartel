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

    private Integer clientId;
    private Integer curriculumId;
    private Integer state;
    private LocalDateTime date;

    public Review toEntity(Client client, Curriculum curriculum) {
        return Review.builder()
                .clientId(client)
                .curriculumId(curriculum)
                .state(state)
                .date(LocalDateTime.now())
                .build();
    }
}
