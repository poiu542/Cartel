package com.ssafy.cartel.domain.counselBoard.dto;

import com.ssafy.cartel.domain.counselor.entity.Counselor;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor //기본 생성자
@AllArgsConstructor //모든 필드값을 파라미터로 받는 생성자
@Getter
public class CounselBoardDto {

    private String content;
    private Integer state;
    private Counselor counselorId;

}
