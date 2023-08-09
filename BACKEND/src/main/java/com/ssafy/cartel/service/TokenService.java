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

    public String createNewAccessToken(String token){

        if(!tokenProvider.validToken(token)){
            throw new IllegalArgumentException("unexpected token");
        }

        User user = userService.findbyRefreshToken(token);
        return tokenProvider.generateToken(user, Duration.ofMillis(60));
        //return tokenProvider.generateToken(user, Duration.ofHours(4));

    }
}
