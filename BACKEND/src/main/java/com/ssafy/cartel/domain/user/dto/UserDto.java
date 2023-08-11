package com.ssafy.cartel.domain.user.dto;


import com.ssafy.cartel.domain.user.entity.User;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
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

    public User toEntity(User user){
        return User.builder()
                .email(email)
                .password(password)
                .nickname(nickname)
                .name(name)
                .phone(phone)
                .point(point)
                .profileUrl(profileUrl)
                .state(state)
                .type(type)
                .build();
    }
}
