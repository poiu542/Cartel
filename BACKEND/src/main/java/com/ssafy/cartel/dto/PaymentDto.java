package com.ssafy.cartel.dto;

import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class PaymentDto {
    private Integer amount;
    private Integer userId;
    private Integer counselId;
}
