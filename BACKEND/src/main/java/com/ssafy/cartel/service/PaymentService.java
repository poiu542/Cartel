package com.ssafy.cartel.service;


import com.ssafy.cartel.controller.PaymentController;
import com.ssafy.cartel.domain.Payment;
import com.ssafy.cartel.domain.User;
import com.ssafy.cartel.dto.PaymentDto;
import com.ssafy.cartel.dto.UserDto;
import com.ssafy.cartel.repository.PaymentRepository;
import com.ssafy.cartel.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@RequiredArgsConstructor
@Service
public class PaymentService {

    private final PaymentRepository paymentRepository;
    private final UserRepository userRepository;

    public Payment save(PaymentDto paymentDto){
        User user = userRepository.findById(paymentDto.getUserId())
                .orElseThrow(()-> new IllegalArgumentException("not found user"));

        return paymentRepository.save(Payment.builder()
                .status(0)
                .amount(paymentDto.getAmount())
                .time(LocalDateTime.now())
                .user(user)
                .method("카카오 페이")
                .build());
    }
}
