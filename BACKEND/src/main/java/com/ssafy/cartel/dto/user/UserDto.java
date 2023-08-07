package com.ssafy.cartel.dto.user;

import com.ssafy.cartel.domain.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor //기본 생성자
@AllArgsConstructor //모든 필드값을 파라미터로 받는 생성자
@Getter

public class UserDto {
    private String email;
    private String password;
    private String nickname;
    private String name;
    private String phone;
    private Integer point;
    private String profileUrl;
    private Integer state;
    private Integer type;
    private String refreshToken;

    public User toEntity() {
        return User.builder()
                .email(email)
                .password(password)
                .nickname(nickname)
                .name(name)
                .phone(phone)
                .type(type)
                .point(point)
                .profileUrl(profileUrl)
                .state(state)
                .type(type)
                .refreshToken(refreshToken)
                .build();
    }
}

