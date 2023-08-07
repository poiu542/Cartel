package com.ssafy.cartel.controller;


import com.ssafy.cartel.dto.UserDto;
import com.ssafy.cartel.service.UserService;
import lombok.RequiredArgsConstructor;
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

    @PostMapping("/signup")
    public String signup(@RequestBody UserDto userDto){
        userService.save(userDto); //회원가입
        return " ";
    }

    @PostMapping("/login")
    public String login(@RequestParam String email, @RequestParam String password){
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(email,password));
        return "";
    }


}
