package com.ssafy.cartel.domain.user.dto;

<<<<<<< HEAD

import com.ssafy.cartel.domain.user.entity.User;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
=======
import com.ssafy.cartel.domain.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor //기본 생성자
@AllArgsConstructor //모든 필드값을 파라미터로 받는 생성자
@Getter
>>>>>>> 450fc5b08cc0bcdcbee8d5ab7b997741843b6736
public class UserDto {

    private String email;
    private String password;
    private String nickname;
    private String name;
    private String phone;
    private Integer point;
<<<<<<< HEAD
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
=======
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
>>>>>>> 450fc5b08cc0bcdcbee8d5ab7b997741843b6736
                .state(state)
                .type(type)
                .build();
    }
}
