package com.ssafy.cartel.dto;

import com.ssafy.cartel.domain.Career;
import com.ssafy.cartel.domain.Counselor;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor //기본 생성자
@AllArgsConstructor //모든 필드값을 파라미터로 받는 생성자
@Getter
@Builder
public class CareerDto {

    private Integer careerId;
    private String content;
    private Integer state;
    private Integer counselorId;

    public Career toEntity(Counselor counselor){
        return Career.builder()
                .content(content)
                .counselorId(counselor)
                .state(state)
                .build();
    }
}
