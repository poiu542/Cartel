package com.ssafy.cartel.evaluation.dto;

import com.ssafy.cartel.client.entity.Client;
import com.ssafy.cartel.counselor.entity.Counselor;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@NoArgsConstructor //기본 생성자
@AllArgsConstructor //모든 필드값을 파라미터로 받는 생성자
@Getter
public class EvaluationDto {

    private float rate;
    private String content;
    private LocalDateTime date;
    private Integer state;
    private Client clientId;
    private Counselor counselorId;

}
