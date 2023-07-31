package com.ssafy.cartel.domain.user.dto;

import lombok.Getter;
import lombok.NoArgsConstructor; // 기본 생성자 생성

@NoArgsConstructor
@Getter
public class UserSignUpDto {
    private String email; // 이메일
    private String password; // 비밀번호
    private String nickname; // 닉네임
    private String name; // 이름
    private String phone; // 핸드폰 번호
    private String point; // 포인트
}
