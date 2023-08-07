package com.ssafy.cartel.config.jwt;

import com.ssafy.cartel.domain.User;
import com.ssafy.cartel.service.UserDetailService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Header;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.util.Collections;
import java.util.Date;
import java.util.Set;

@RequiredArgsConstructor
@Service
public class TokenProvider {

    private final JwtProperties jwtProperties;
    private final UserDetailsService userDetailsService;

    public String generateToken(User user, Duration expired){
        Date now = new Date();
        return makeToken(new Date(now.getTime() + expired.toMillis()), user);
    }

    private String makeToken(Date expired, User user) {

        Date now = new Date();

        return Jwts.builder()
                .setHeaderParam(Header.TYPE, Header.JWT_TYPE)
                .setIssuer(jwtProperties.getIssuer())
                .setIssuedAt(now)
                .setExpiration(expired)
                .setSubject(user.getEmail())
                .claim("id", user.getId())
                .signWith(SignatureAlgorithm.HS256, jwtProperties.getSecretKey())
                .compact(); //jwt
    }

    public boolean validToken(String token){ //검증

        try{
            Jwts.parser()
                    .setSigningKey(jwtProperties.getSecretKey())
                    .parseClaimsJws(token);
            return true;
        }catch (Exception e){
            return false;
        }
    }

    public Authentication getAuthentication(String token){
        Claims claims = getClaims(token);
        UserDetails userDetails = userDetailsService.loadUserByUsername(claims.getSubject());
        Set<SimpleGrantedAuthority> authorities = Collections.singleton(new SimpleGrantedAuthority(userDetails.getAuthorities()));

        return new UsernamePasswordAuthenticationToken(new org.springframework.security.core.userdetails.User(
                claims.getSubject(),"",authorities),token,authorities);

    }

    private Claims getClaims(String token) {
    }
}
