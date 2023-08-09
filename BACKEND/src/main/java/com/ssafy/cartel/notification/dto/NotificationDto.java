package com.ssafy.cartel.notification.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@NoArgsConstructor //기본 생성자
@AllArgsConstructor //모든 필드값을 파라미터로 받는 생성자
@Getter
public class NotificationDto {

    private String message;
    private Integer type;
    private LocalDateTime time;

}
