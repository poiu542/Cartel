package com.ssafy.cartel.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import java.util.Collection;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class User implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id", updatable = false)
    private Integer id;

    @Column(name = "user_email", nullable = false)
    private String email;

    @Column(name = "user_password", nullable = false)
    private String password;

    @Column(name = "user_nickname", nullable = false)
    private String nickname;

    @Column(name = "user_name")
    private String name;

    @Column(name = "user_phone")
    private String phone;

    @Column(name = "user_point")
    private Integer point;

    @Column(name = "user_profile_url")
    private String profileUrl;

    @Column(name = "user_state", nullable = false)
    private Integer state;

    @Column(name = "user_type", nullable = false)
    private Integer type;

    @Column(name = "user_refresh_token")
    private String refreshToken;

    @Builder
    public User(String email, String password, String nickname, String name, String phone, Integer point, String profileUrl, Integer state, Integer type, String refreshToken) {
        this.email = email;
        this.password = password;
        this.nickname = nickname;
        this.name = name;
        this.phone = phone;
        this.point = point;
        this.profileUrl = profileUrl;
        this.state = state;
        this.type = type;
        this.refreshToken = refreshToken;
    }

    @Override //사용자 권한 반환
    public Collection<? extends GrantedAuthority> getAuthorities() {
        String userType = "user";
        if(type ==1)
            userType = "client";
        else if(type ==2)
            userType ="counselor";
        else if (type ==3)
            userType = "admin";


        return List.of(new SimpleGrantedAuthority(userType));
    }

    @Override//사용자 아이디 반환
    public String getUsername() {
        return email;
    } // 이메일 유니크 속성

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }


    public User refresh(String newToken){ // 토큰 갱신
        this.refreshToken = newToken;
        return this;
    }

}
