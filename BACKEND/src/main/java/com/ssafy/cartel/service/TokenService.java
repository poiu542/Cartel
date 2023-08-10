package com.ssafy.cartel.service;

import com.ssafy.cartel.config.jwt.TokenProvider;
import com.ssafy.cartel.domain.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.Duration;

@RequiredArgsConstructor
@Service
public class TokenService {
    private final TokenProvider tokenProvider;
    private final UserService userService;

    //refresh token을 전달받아서 새로운 엑세스 토큰 생성
    public String createNewAccessToken(String token){

        //토큰 유효성 검사
        if(!tokenProvider.validToken(token)){
            throw new IllegalArgumentException("unexpected token");
        }

        //사용자 찾기
        User user = userService.findbyRefreshToken(token);
        //새로운 토큰 만들기
        return tokenProvider.generateToken(user, Duration.ofMillis(60));
        //return tokenProvider.generateToken(user, Duration.ofHours(4));

    }
}
