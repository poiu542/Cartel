package com.ssafy.cartel.domain.counselor.entity;


import com.ssafy.cartel.domain.user.entity.User;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Counselor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "counselor_id", updatable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id",nullable = false)
    private User userId;

    @Column(name = "counselor_regist")
    private String regist;

    @Column(name = "counselor_license")
    private String license;

    @Column(name = "counselor_school")
    private String school;

    @Column(name = "counselor_company")
    private String company;

    @Column(name = "counselor_ratesum")
    private Integer rateSum;

    @Column(name = "counselor_state")
    private Integer state;

    @Column(name = "counselor_introduction")
    private String introduction;

    @Builder
    public Counselor(User userId, String regist, String license, String school, String company, Integer rateSum, Integer state, String introduction) {
        this.userId = userId;
        this.regist = regist;
        this.license = license;
        this.school = school;
        this.company = company;
        this.rateSum = rateSum;
        this.state = state;
        this.introduction = introduction;
    }

    public void updateRegistImg(String imgURL) {
        this.regist = imgURL;
    }

    public void updateLicenseImg(String imgURL) {
        this.license = imgURL;
    }
}
