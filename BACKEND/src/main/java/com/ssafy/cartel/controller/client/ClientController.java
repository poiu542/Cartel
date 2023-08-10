package com.ssafy.cartel.controller.client;

import com.ssafy.cartel.domain.Client;
import com.ssafy.cartel.domain.User;
import com.ssafy.cartel.dto.client.ClientDto;
import com.ssafy.cartel.repository.user.UserRepository;
import com.ssafy.cartel.service.client.ClientService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/client")
public class ClientController {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ClientService clientService;

    @PostMapping("enroll/{userId}")
    public ResponseEntity<?> addClient(@PathVariable(value = "userId") Integer userId, @RequestBody ClientDto clientDto) {
        Integer type = clientService.checkType(userId);
        User user = userRepository.findById(userId)
                .orElseThrow(()-> new IllegalArgumentException("해당 user가 존재하지 않습니다."));

        //타입 수정
        if (type == 1) { // 사용자 상태가 1인 경우
            user.updateType(type);
            Client savedClient = clientService.save(clientDto);
            return ResponseEntity.status(HttpStatus.CREATED)
                    .body(savedClient);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("내담자 정보 등록 실패");
        }
    }
}
