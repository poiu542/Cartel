package com.ssafy.cartel.domain.payment.dto;

import com.ssafy.cartel.domain.client.entity.Client;
import com.ssafy.cartel.domain.payment.entity.Payment;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@NoArgsConstructor //기본 생성자
@AllArgsConstructor //모든 필드값을 파라미터로 받는 생성자
@Getter
public class PaymentDto {

    private Integer status;
    private Integer amount;
    private LocalDateTime time;
    private Client clientId;
    private String paymentId;
    private String method;

    public Payment toEntity() {
        return Payment.builder()
                .amount(amount)
                .paymentId(paymentId)
                .clientId(clientId)
                .method(method)
                .status(status)
                .time(time)
                .build();
    }
}
