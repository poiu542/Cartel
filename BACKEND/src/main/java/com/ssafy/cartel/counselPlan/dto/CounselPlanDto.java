package com.ssafy.cartel.counselPlan.dto;

import com.ssafy.cartel.counsel.entity.Counsel;
import com.ssafy.cartel.counselPlan.entity.CounselPlan;
import com.ssafy.cartel.day.entity.Day;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;


@NoArgsConstructor //기본 생성자
@AllArgsConstructor //모든 필드값을 파라미터로 받는 생성자
@Getter
@Builder
public class CounselPlanDto {

    private String time;
    private Integer counselId;
    private Integer dayId;

    public CounselPlan toEntity(Counsel counsel,Day day){
        return CounselPlan.builder()
                .time(time)
                .counselId(counsel)
                .dayId(day)
                .build();
    }
}
