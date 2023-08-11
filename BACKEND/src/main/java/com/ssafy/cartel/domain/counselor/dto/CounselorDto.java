package com.ssafy.cartel.domain.counselor.dto;

import com.ssafy.cartel.domain.career.entity.Career;
import com.ssafy.cartel.domain.counselor.entity.Counselor;
import com.ssafy.cartel.domain.user.entity.User;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CounselorDto {
    // User
    private String name;
    private String password;
    private String profileImg;

    // counselor
    private Integer id;
    private String regist;
    private String license;
    private String school;

    // career
    private Career career;

    public Counselor toEntity(User user){

    }
}
