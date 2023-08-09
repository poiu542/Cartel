package com.ssafy.cartel.service.kakaopay;

import com.ssafy.cartel.dto.kakaopay.ApproveResponse;
import com.ssafy.cartel.dto.kakaopay.CancelResponse;
import com.ssafy.cartel.dto.kakaopay.ReadyResponse;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
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
    @Value("${app.admin.key}")
    private String admin_key; // 본인 애플리케이션의 어드민 키
    private ReadyResponse readyResponse;
    private ApproveResponse approveResponse;
    private CancelResponse cancelResponse;

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
        parameters.add("partner_order_id", "3");           // 가맹점 주문번호, 최대 100자
        parameters.add("partner_user_id", "cartel20230809");          // 가맹점 회원 id, 최대 100자
        parameters.add("item_name", "happy jajo");             // 상품명, 최대 100자
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
        log.info("결제준비 응답객체: " + readyResponse);
        return readyResponse;
    }

    /**
     * 결제 승인 요청 본문
     */
    public ApproveResponse payApprove(String tid, String pg_token) {
        // 승인 요청 양식
        MultiValueMap<String, String> parameters = new LinkedMultiValueMap<>();
        parameters.add("cid", cid); // 가맹점 코드, 10자
        parameters.add("tid", tid); // 결제 고유번호, 결제 준비 API 응답에 포함
        parameters.add("partner_order_id", "3");
        parameters.add("partner_user_id", "cartel20230809");
        parameters.add("pg_token", pg_token);  // 결제승인 요청을 인증하는 토큰. 사용자 결제 수단 선택 완료 시, approval_url로 redirection해줄 때 pg_token을 query string으로 전달

        // 파라미터, 헤더
        HttpEntity<MultiValueMap<String, String>> requestEntity = new HttpEntity<>(parameters, this.getHeaders());

        // 외부에 보낼 url
        RestTemplate restTemplate = new RestTemplate();

        approveResponse = restTemplate.postForObject(
                "https://kapi.kakao.com/v1/payment/approve",
                requestEntity,
                ApproveResponse.class);
        log.info("결제승인 응답객체: " + approveResponse);

        return approveResponse;
    }

    /**
     * 결제 취소 요청 본문
     */
    public CancelResponse payCancle(String pg_token) {
        // 승인 요청 양식
        MultiValueMap<String, String> parameters = new LinkedMultiValueMap<>();
        parameters.add("cid", cid); // 가맹점 코드, 10자
        parameters.add("tid", readyResponse.getTid()); // 결제 고유번호, 결제 준비 API 응답에 포함
        parameters.add("cancel_amount", String.valueOf(2));
        parameters.add("cancel_tax_free_amount", "0");

        // 파라미터, 헤더
        HttpEntity<MultiValueMap<String, String>> requestEntity = new HttpEntity<>(parameters, this.getHeaders());

        // 외부에 보낼 url
        RestTemplate restTemplate = new RestTemplate();

        cancelResponse = restTemplate.postForObject(
                "https://kapi.kakao.com/v1/payment/cancle",
                requestEntity,
                com.ssafy.cartel.dto.kakaopay.CancelResponse.class);
        log.info("결제승인 응답객체: " + cancelResponse);

        return cancelResponse;
    }

}
