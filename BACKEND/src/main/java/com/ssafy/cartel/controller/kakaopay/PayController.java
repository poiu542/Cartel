package com.ssafy.cartel.controller.kakaopay;

import com.ssafy.cartel.domain.Payment;
import com.ssafy.cartel.dto.kakaopay.ApproveResponse;
import com.ssafy.cartel.dto.kakaopay.ReadyResponse;
import com.ssafy.cartel.repository.kakaopay.KaKaopayRepository;
import com.ssafy.cartel.service.kakaopay.KaKaoPayService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;


@Slf4j
@RestController
@RequestMapping("/payment")
@RequiredArgsConstructor
public class PayController {
    private final KaKaoPayService kakaoPayService;

    @Autowired
    private KaKaopayRepository kaKaopayRepository;

    /**
     * 결제 준비 요청하기
     */
    @PostMapping ("/ready")
    public @ResponseBody ReadyResponse payReady(@RequestParam(name = "total_amount") int totalAmount) {
        log.info("주문가격:"+totalAmount);
        // 카카오 결제 준비하기	- 결제요청 service 실행.
        ReadyResponse readyResponse = kakaoPayService.payReady();
        log.info("결재고유 번호: " + readyResponse.getTid());
        return readyResponse; // 클라이언트에 보냄.(tid,next_redirect_pc_url이 담겨있음.)
    }

    /**
     * 결제 승인 요청하기
     */
    @PostMapping("/approve")
    public String payApprove(@RequestParam("pg_token") String pgToken, @ModelAttribute("tid") String tid, Integer paymentId, LocalDateTime time) {
        log.info("결제승인 요청을 인증하는 토큰: " + pgToken);
        log.info("결재고유 번호: " + tid);
        // 카카오 결재 요청하기
        ApproveResponse approveResponse = kakaoPayService.payApprove(pgToken);
        if (pgToken.length() > 0) {
            Payment payment = kaKaopayRepository.findById(paymentId)
                    .orElseThrow(() -> new IllegalArgumentException("해당 payment가 존재하지 않습니다."));
            payment.updateStatus(0);
            payment.updateApprovedTime(time);
            payment.updateTid(tid);
        } else {
        }
        // 카카오 페이로 넘겨받은 결재정보값을 저장.
        return "redirect:/approval_url";
    }

    /**
     * 결제 취소
     */
    @GetMapping("/cancel")
    public String payCancel(@ModelAttribute("tid") String tid, Integer paymentId, LocalDateTime time) {
        Payment payment = kaKaopayRepository.findById(paymentId)
                .orElseThrow(() -> new IllegalArgumentException("해당 payment가 존재하지 않습니다."));
        if (payment.getStatus() == 0) {
            payment.updateStatus(1);
            payment.updateCanceledTime(time);
            payment.updateTid(tid);
        } else {
        }
        return "redirect:/cancel_url";
    }

    /**
     * 결제 실패
     */
    @GetMapping("/fail")
    public String payFail() {
        return "redirect:/fail_url";
    }

    // approval_url, cancel_url, fail_url은 카카오페이 API 요청 응답을 받아 처리할 주소입니다. 이 값들의 도메인(Domain)은 앱 정보에 등록된 웹 플랫폼 도메인과 일치해야 합니다.
}
