package com.ssafy.cartel.controller;

import com.ssafy.cartel.domain.Counselor;
import com.ssafy.cartel.domain.User;
import com.ssafy.cartel.dto.*;
import com.ssafy.cartel.service.CareerService;
import com.ssafy.cartel.service.CounselorService;
import com.ssafy.cartel.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@Controller
public class CounselorController {

    private final UserService userService;
    private final CounselorService counselorService;
    private final CareerService careerService;

    @PostMapping("/signup/counselor")
    public ResponseEntity<String> signupCounselor(@RequestBody CounselorSignupRequest request){
        System.out.println(request.getUserDto().getEmail());
        User user = userService.save(request.getUserDto());
        Counselor counselor = counselorService.save(request.getCounselorDto(),user);
        System.out.println(request.getCareersDto());

        if(request.getCareersDto() != null) {
            for (CareerDto career : request.getCareersDto()) {
                career.setCounselorId(counselor.getId());
                careerService.save(career);
            }
        }
        return ResponseEntity.ok("상담사 회원가입 완료");
    }

    @PutMapping("/userinfo/counselor/{id}") // 상담사 id
    public ResponseEntity<String> updateCounselor(@PathVariable Integer id,@RequestBody UpdateUserRequest userRequest, @RequestBody UpdateCounselorRequest counselorRequest) throws IOException {
        Counselor counselor = counselorService.findById(id);
        Integer userId = counselor.getUser().getId();
        userService.update(userId, userRequest);
        counselorService.update(id,counselorRequest);

        return ResponseEntity.ok().body("상담사 정보 수정 완료");
    }

    @GetMapping("/userinfo/counselor/{id}") //상담사 아이디
    public ResponseEntity<CounselorResponse> userInfo(@PathVariable Integer id){
        Counselor counselor = counselorService.findById(id);
        User user = counselor.getUser();
        Integer userId = user.getId();
        String username = user.getName();
        String profile = user.getProfileUrl();
        CounselorResponse counselorResponse = new CounselorResponse(counselor,userId, username, profile );



        //System.out.println(counselor.getId());
        //Map<String,Object> userInfo= new HashMap<>();
        //userInfo.put("user", user);
        //userInfo.put("counselor", counselor);

        return ResponseEntity.ok().body(counselorResponse);
    }





}
