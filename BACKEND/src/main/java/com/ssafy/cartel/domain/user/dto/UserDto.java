package com.ssafy.cartel.domain.user.dto;

import com.ssafy.cartel.domain.user.entity.User;
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
    private Integer state;
    private String profileUrl;
    private Integer type;
    private String refreshToken;

    public User toEntity() {
        return User.builder()
                .email(email)
                .name(name)
                .nickname(nickname)
                .password(password)
                .phone(phone)
                .point(point)
                .profileUrl(profileUrl)
                .refreshToken(refreshToken)
                .state(state)
                .type(type)
                .build();
    }
}
