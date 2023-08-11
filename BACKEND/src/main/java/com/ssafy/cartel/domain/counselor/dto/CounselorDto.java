package com.ssafy.cartel.domain.counselor.dto;

<<<<<<< HEAD
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
=======
import com.ssafy.cartel.domain.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor //기본 생성자
@AllArgsConstructor //모든 필드값을 파라미터로 받는 생성자
@Getter
public class CounselorDto {

    private User userId;
    private String regist;
    private String license;
    private String school;
    private String company;
    private Integer rateSum;
    private Integer state;
    private String introduction;

>>>>>>> 450fc5b08cc0bcdcbee8d5ab7b997741843b6736
}
