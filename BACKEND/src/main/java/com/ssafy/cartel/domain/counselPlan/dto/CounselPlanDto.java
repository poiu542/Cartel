package com.ssafy.cartel.domain.counselPlan.dto;

import com.ssafy.cartel.domain.counsel.entity.Counsel;
import com.ssafy.cartel.domain.day.entity.Day;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@NoArgsConstructor //기본 생성자
@AllArgsConstructor //모든 필드값을 파라미터로 받는 생성자
@Getter
public class CounselPlanDto {

    private LocalDateTime time;
    private Counsel counselId;
    private Day day;

}
