package com.ssafy.cartel.domain.career.dto;

import com.ssafy.cartel.domain.career.entity.Career;
import com.ssafy.cartel.domain.counselor.entity.Counselor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CareerDto {
    private Integer id;
    private String content;
    private Integer state;
    private Integer counselorId;

    public Career toEntity(Counselor counselor){
        return Career.builder()
                .content(getContent())
                .state(0)
                .counselor(counselor)
                .build();
    }
}
