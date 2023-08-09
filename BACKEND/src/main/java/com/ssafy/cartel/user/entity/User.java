package com.ssafy.cartel.user.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.sql.results.graph.tuple.TupleResult;

import java.util.Collection;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class User{

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

    public void update(String email, String nickname, String name, String phone) {
        this.email = email;
        this.name = name;
        this.nickname = nickname;
        this.phone = phone;
    }
}
