package com.ssafy.cartel.domain.payment.service;

import com.ssafy.cartel.domain.payment.dto.PaymentDto;
import com.ssafy.cartel.domain.payment.entity.Payment;
import com.ssafy.cartel.domain.payment.repository.PaymentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Transactional(readOnly = true)
@RequiredArgsConstructor //final , @notnull 붙은 필드의 생성자 추가
@Service //빈으로 등록
public class PaymentService {
    private final PaymentRepository paymentRepository;

    @Transactional
    public Payment save(PaymentDto paymentDto){
        return paymentRepository.save(paymentDto.toEntity());
    }

    public List<Payment> findAll(){
        return paymentRepository.findAll();
    }

    public Optional<Payment> findById(Integer id){
        return Optional.ofNullable(paymentRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("not found:" + id)));
    }

    @Transactional
    public void delete(Integer id){
        paymentRepository.deleteById(id);
    }

    @Transactional
    public Payment update(Integer id, PaymentDto paymentDto){
        Payment payment = paymentRepository.findById(id)
                .orElseThrow(()-> new IllegalArgumentException("not found:" + id));

        payment.update(paymentDto.getStatus());

        return payment;
    }


}