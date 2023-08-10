package com.ssafy.cartel.controller;

import com.ssafy.cartel.config.jwt.TokenProvider;
import com.ssafy.cartel.domain.User;
import com.ssafy.cartel.dto.EmailAuthRequest;
import com.ssafy.cartel.dto.UserDto;
import com.ssafy.cartel.repository.UserRepository;
import com.ssafy.cartel.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.time.Duration;
import java.util.HashMap;
import java.util.Map;
import java.util.ResourceBundle;

@RequiredArgsConstructor
@RestController
public class UserController {

    private final AuthenticationManager authenticationManager;
    private final UserService userService;
    private final TokenProvider tokenProvider;
    private final UserRepository userRepository;

    @PostMapping("/signup/email")
    public ResponseEntity<Void> authMail(@RequestBody EmailAuthRequest request){
        userService.authMail(request);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/signup/email/auth")
    public ResponseEntity<String> validAuthMailCode(@RequestBody EmailAuthRequest request){
        if(userService.validAuthMailCode(request))
            return ResponseEntity.ok("인증되었습니다.");
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("인증코드를 다시 확인해주세요.");
    }

    @PostMapping("/signup")
    public ResponseEntity<String> signup(@RequestBody UserDto userDto){
        if(userService.save(userDto) != null)//회원가입
            return ResponseEntity.ok("회원가입이 완료 되었습니다.");
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("회원가입 실패");
    }


    @PostMapping("/login")
    public HttpHeaders login(@RequestParam String email, @RequestParam String password) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(email, password));
        User user = userRepository.findByEmail(email).get();

        SecurityContextHolder.getContext().setAuthentication(authentication);
        //accesstoken 생성 , 최초 로그인이면 refreshtoken도 만들어
        String accessToken = tokenProvider.generateToken(user, Duration.ofHours(2));

        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Bearer"+ accessToken);
        return headers;

        }
    }



