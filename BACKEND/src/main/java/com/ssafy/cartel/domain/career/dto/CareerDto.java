package com.ssafy.cartel.domain.career.dto;

import com.ssafy.cartel.domain.career.entity.Career;
import com.ssafy.cartel.domain.counselor.entity.Counselor;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor //기본 생성자
@AllArgsConstructor //모든 필드값을 파라미터로 받는 생성자
@Getter
public class CareerDto {

    private String content;
    private Integer state;
    private Counselor counselorId;

    public Career toEntity(){
        return Career.builder()
                .content(content)
                .counselorId(counselorId)
                .state(state)
                .build();
    }
}
