package com.ssafy.cartel.dto.kakaopay;

import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class ReadyResponse {
    private String tid; // 결제 고유 번호
    private String next_redirect_pc_url; // pc 웹일 경우 받는 결제 페이지
    private String created_at; // 결제 준비 요청 시간, Datetime
}
