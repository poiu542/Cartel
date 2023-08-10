package com.ssafy.cartel.config.jwt;


import com.ssafy.cartel.domain.User;


import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Header;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.util.Collections;
import java.util.Date;
import java.util.Set;

// 유효성 검사, 토큰에서 필요한 정보 가져오기
@RequiredArgsConstructor
@Service
public class TokenProvider { //토큰 생성

    private final JwtProperties jwtProperties;

    public String generateToken(User user, Duration expired){
        Date now = new Date();
        return makeToken(new Date(now.getTime() + expired.toMillis()), user);
    }

    //jwt 토큰 생성하기
    private String makeToken(Date expired, User user) {

        Date now = new Date(); //지금
        String type = "user";
        if(user.getType()==1)
            type = "client";
        else if(user.getType()==2)
            type = "counselor";
        else if(user.getType()==3)
            type = "admin";


        return Jwts.builder()
                .setHeaderParam(Header.TYPE, Header.JWT_TYPE)
                .setIssuer(jwtProperties.getIssuer())
                .setIssuedAt(now)
                .setExpiration(expired) //만료 시간
                .setSubject(user.getEmail())
                .claim("type",type)
                .claim("id", user.getId())
                .signWith(SignatureAlgorithm.HS256, jwtProperties.getSecretKey())
                .compact(); //jwt
    }

    public boolean validToken(String token){ //검증
        try{
            Jwts.parser()
                    .setSigningKey(jwtProperties.getSecretKey()) // 비밀값으로 복호화
                    .parseClaimsJws(token);
            return true;
        }catch (Exception e){// 복호화 했는데 유효하지 않으면 에러
            return false;
        }
    }

    //토큰 기반으로 인증 정보 가져오기
    public Authentication getAuthentication(String token){
        Claims claims = getClaims(token);// 클레임, 내용과 관련된 정보를 담기

        Set<SimpleGrantedAuthority> authorities = Collections.singleton(new SimpleGrantedAuthority(claims.get("type", String.class)));

        return new UsernamePasswordAuthenticationToken(new org.springframework.security.core.userdetails.User(
                claims.getSubject(),"",authorities),token,authorities);

    }

    //토큰 기반으로 유저 ID가져오기
    public Integer getUserId(String token){
        Claims claims = getClaims(token);
        return claims.get("id", Integer.class);
    }


    private Claims getClaims(String token) {
        return Jwts.parser()// 토큰 기반 클래임 조회
                .setSigningKey(jwtProperties.getSecretKey())
                .parseClaimsJws(token)
                .getBody();
    }
}