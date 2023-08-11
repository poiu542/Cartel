package com.ssafy.cartel.domain.career.dto;

import com.ssafy.cartel.domain.career.entity.Career;
import com.ssafy.cartel.domain.counselor.entity.Counselor;
<<<<<<< HEAD
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CareerDto {
    private Integer id;
=======
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
>>>>>>> 450fc5b08cc0bcdcbee8d5ab7b997741843b6736
    private String content;
    private Integer state;
    private Integer counselorId;

    public Career toEntity(Counselor counselor){
        return Career.builder()
<<<<<<< HEAD
                .content(getContent())
                .state(0)
                .counselor(counselor)
=======
                .content(content)
                .counselorId(counselor)
                .state(state)
>>>>>>> 450fc5b08cc0bcdcbee8d5ab7b997741843b6736
                .build();
    }
}
