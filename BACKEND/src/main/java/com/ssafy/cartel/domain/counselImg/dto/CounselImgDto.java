package com.ssafy.cartel.domain.counselImg.dto;

import com.ssafy.cartel.domain.counsel.entity.Counsel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor //기본 생성자
@AllArgsConstructor //모든 필드값을 파라미터로 받는 생성자
@Getter
public class CounselImgDto {
    private String imgUrl;
    private Integer state;
    private Counsel counselId;


}
