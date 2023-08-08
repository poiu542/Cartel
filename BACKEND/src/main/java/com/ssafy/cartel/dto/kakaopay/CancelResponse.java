package com.ssafy.cartel.dto.kakaopay;

import org.joda.time.DateTime;

public class CancelResponse {
    private String cid; // 가맹점 코드
    private String status; // 결제 상태
    private Amount amount; // 결제 금액 정보
    private String approved_cancel_amount; // 이번 요청으로 취소된 금액
    private DateTime canceled_at; // 결제 취소 시각
}
