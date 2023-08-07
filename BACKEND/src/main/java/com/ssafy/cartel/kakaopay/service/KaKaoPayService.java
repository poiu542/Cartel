package com.ssafy.cartel.kakaopay.service;

import com.ssafy.cartel.kakaopay.dto.ApproveResponse;
import com.ssafy.cartel.kakaopay.dto.ReadyResponse;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional
public class KaKaoPayService {
    static final String cid = "TC0ONETIME"; // 가맹점 테스트 코드
    static final String admin_key = "f6d80f231672a8d686291105a5f973e5"; // 본인 애플리케이션의 어드민 키
    private ReadyResponse readyResponse;
    private ApproveResponse approveResponse;

    /**
     * 결제 요청 헤더값
     */
    private HttpHeaders getHeaders() {
        HttpHeaders httpHeaders = new HttpHeaders();

        String auth = "KakaoAK " + admin_key;

        httpHeaders.set("Authorization", auth);
        httpHeaders.set("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

        return httpHeaders;
    }

    /**
     * 결제 준비 요청 본문
     */
    public ReadyResponse payReady(int totalAmount) {
        // 카카오페이 요청 양식
        MultiValueMap<String, String> parameters = new LinkedMultiValueMap<>();
        parameters.add("cid", cid);
        parameters.add("partner_order_id", "1001");           // 가맹점 주문번호, 최대 100자
        parameters.add("partner_user_id", "cartel");             //	가맹점 회원 id, 최대 100자
        parameters.add("item_name", "상담 1");             // 상품명, 최대 100자
        parameters.add("quantity", "1");                        // 상품 수량
        parameters.add("total_amount", String.valueOf(totalAmount));   // 상품 총액
        parameters.add("tax_free_amount", "0");            // 상품 비과세 금액
        parameters.add("approval_url", "http://localhost:8080/payment/success"); // 성공 시 redirect url
        parameters.add("cancel_url", "http://localhost:8080/payment/cancel"); // 취소 시 redirect url
        parameters.add("fail_url", "http://localhost:8080/payment/fail"); // 실패 시 redirect url

        // 파라미터, 헤더
        HttpEntity<MultiValueMap<String, String>> requestEntity = new HttpEntity<>(parameters, this.getHeaders());

        // 외부에 보낼 url
        RestTemplate restTemplate = new RestTemplate();

        readyResponse = restTemplate.postForObject(
                "https://kapi.kakao.com/v1/payment/ready",
                requestEntity,
                ReadyResponse.class);
        log.info("결재준비 응답객체: " + readyResponse);
        return readyResponse;
    }

    /**
     * 결제 승인 요청 본문
     */
    public ApproveResponse payApprove(String pg_token) {
        // 승인 요청 양식
        MultiValueMap<String, String> parameters = new LinkedMultiValueMap<>();
        parameters.add("cid", cid); // 가맹점 코드, 10자
        parameters.add("tid", readyResponse.getTid()); // 결제 고유번호, 결제 준비 API 응답에 포함
        parameters.add("partner_order_id", "가맹점 주문 번호");
        parameters.add("partner_user_id", "회사명");
        parameters.add("pg_token", pg_token);  // 결제승인 요청을 인증하는 토큰. 사용자 결제 수단 선택 완료 시, approval_url로 redirection해줄 때 pg_token을 query string으로 전달

        // 파라미터, 헤더
        HttpEntity<MultiValueMap<String, String>> requestEntity = new HttpEntity<>(parameters, this.getHeaders());

        // 외부에 보낼 url
        RestTemplate restTemplate = new RestTemplate();

        approveResponse = restTemplate.postForObject(
                "https://kapi.kakao.com/v1/payment/approve",
                requestEntity,
                ApproveResponse.class);
        log.info("결재승인 응답객체: " + approveResponse);

        return approveResponse;
    }

}
