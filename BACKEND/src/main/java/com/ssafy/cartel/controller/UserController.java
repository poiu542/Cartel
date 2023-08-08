package com.ssafy.cartel.controller;


import com.ssafy.cartel.dto.EmailAuthRequest;
import com.ssafy.cartel.dto.UserDto;
import com.ssafy.cartel.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class UserController {

    private final AuthenticationManager authenticationManager;
    private final UserService userService;

    @PostMapping("/signup/email")
    public ResponseEntity<Void> authMail(@RequestBody EmailAuthRequest request){
        userService.authMail(request);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/signup/email/auth")
    public ResponseEntity<String> validAuthMailCode(@RequestBody EmailAuthRequest request){
        if(userService.validAuthMailCode(request))
            return ResponseEntity.ok("인증되었습니다.");
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("인증코드를 확인해주세요.");
    }

    @PostMapping("/signup")
    public void signup(@RequestBody UserDto userDto){
        userService.save(userDto); //회원가입
    }

    @PostMapping("/login")
    public void login(@RequestParam String email, @RequestParam String password){
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(email,password));
    }


}
