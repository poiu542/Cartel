package com.ssafy.cartel.controller;

import com.ssafy.cartel.dto.ArticleResponse;
import com.ssafy.cartel.dto.PaymentDto;
import com.ssafy.cartel.repository.ClientRepository;
import com.ssafy.cartel.service.ClientService;
import com.ssafy.cartel.service.PaymentService;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
public class PaymentController {

    private final PaymentService paymentService;
    private final ClientService clientService;
    @PostMapping("/payment")
    public ResponseEntity<String> findArticle(@RequestBody PaymentDto payment){
        //결제
        paymentService.save(payment);

        //내담자 save
        Integer userId =
        clientService.save();




        return ResponseEntity.ok()
                .body("결제 성공");
    }

}
