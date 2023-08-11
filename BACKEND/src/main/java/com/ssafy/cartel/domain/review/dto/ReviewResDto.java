package com.ssafy.cartel.domain.review.dto;

import lombok.*;

import java.time.LocalDateTime;

@NoArgsConstructor //기본 생성자
@AllArgsConstructor //모든 필드값을 파라미터로 받는 생성자
@Getter
@Setter
@Builder
public class ReviewResDto {

    private Integer counselId;
    private String counselTitle;
    private String consulting;
    private LocalDateTime consultingDate;
    private Integer userId;
    private String userNickname;
    private Integer consultingId;

}
