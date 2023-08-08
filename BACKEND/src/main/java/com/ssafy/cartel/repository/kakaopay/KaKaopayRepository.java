package com.ssafy.cartel.repository.kakaopay;

import com.ssafy.cartel.domain.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface KaKaopayRepository extends JpaRepository<Payment, Integer> {
}
