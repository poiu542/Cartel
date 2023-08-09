package com.ssafy.cartel.payment.repository;

import com.ssafy.cartel.payment.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentRepository extends JpaRepository<Payment, Integer> {
}
