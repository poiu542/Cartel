package com.ssafy.cartel.domain.counselor.dto;

import com.ssafy.cartel.domain.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor //기본 생성자
@AllArgsConstructor //모든 필드값을 파라미터로 받는 생성자
@Getter
public class CounselorDto {

    private User userId;
    private String regist;
    private String license;
    private String school;
    private String company;
    private Integer rateSum;
    private Integer state;
    private String introduction;

}
