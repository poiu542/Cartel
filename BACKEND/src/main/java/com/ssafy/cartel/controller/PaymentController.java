package com.ssafy.cartel.controller;

import com.ssafy.cartel.domain.Client;
import com.ssafy.cartel.domain.User;
import com.ssafy.cartel.dto.ArticleResponse;
import com.ssafy.cartel.dto.PaymentDto;
import com.ssafy.cartel.repository.ClientRepository;
import com.ssafy.cartel.service.ClientService;
import com.ssafy.cartel.service.PaymentService;
import com.ssafy.cartel.service.UserService;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
public class PaymentController {
    private final PaymentService paymentService;
    private final ClientService clientService;
    private final  UserService userService;

    @PostMapping("/payment")
    public ResponseEntity<String> findArticle(@RequestBody PaymentDto payment){//가격, userid, counselid
        User user = userService.findbyId(payment.getUserId());
        userService.type(1,user);

        //내담자 save
        Client client = clientService.save(payment);
        Integer id = client.getId();
        //결제
        paymentService.save(payment,id);

        return ResponseEntity.ok("결제성공");
    }
}
