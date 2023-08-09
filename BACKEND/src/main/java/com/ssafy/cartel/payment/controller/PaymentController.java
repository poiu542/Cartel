package com.ssafy.cartel.payment.controller;

import com.ssafy.cartel.payment.entity.Payment;
import com.ssafy.cartel.payment.dto.PaymentDto;
import com.ssafy.cartel.payment.service.PaymentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/payment")
public class PaymentController {
    private final PaymentService paymentService;

    // 목록 조회
    @GetMapping("/")
    public ResponseEntity<List<Payment>> findAllPayments(){
        List<Payment> payments = paymentService.findAll();

        return ResponseEntity.ok()
                .body(payments);
    }

    // 조회
    @GetMapping("/{id}")
    public ResponseEntity<?> findPayment(@PathVariable Integer id) {
        Optional<Payment> payment = paymentService.findById(id);
        return ResponseEntity.ok().body(payment);
    }

    // 등록
    @PostMapping("/")
    public ResponseEntity<?> registPayment(@RequestBody PaymentDto paymentDto){
        Payment save = paymentService.save(paymentDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(save);
    }

    // 수정
    @PutMapping("/{id}")
    public ResponseEntity<?> updatePayment(@PathVariable Integer id, @RequestBody PaymentDto paymentDto) {
        paymentService.update(id, paymentDto);
        return ResponseEntity.ok().build();
    }

    // 삭제
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletePayment(@PathVariable Integer id){
        paymentService.delete(id);
        return ResponseEntity.ok().build();
    }
}
