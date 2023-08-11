package com.ssafy.cartel.domain.payment.repository;

import com.ssafy.cartel.domain.payment.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentRepository extends JpaRepository<Payment, Integer> {
}
