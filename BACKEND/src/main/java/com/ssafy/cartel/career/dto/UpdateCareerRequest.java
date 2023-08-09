package com.ssafy.cartel.career.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class UpdateCareerRequest {
    private String content;
    private Integer state;
}
