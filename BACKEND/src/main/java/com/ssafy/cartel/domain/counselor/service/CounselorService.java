package com.ssafy.cartel.domain.counselor.service;

import com.amazonaws.services.s3.AmazonS3;
import com.ssafy.cartel.domain.counselor.entity.Counselor;
import com.ssafy.cartel.domain.user.entity.User;
import com.ssafy.cartel.domain.counselor.dto.CounselorDto;
import com.ssafy.cartel.domain.counselor.repository.CounselorRepository;
import com.ssafy.cartel.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
@Slf4j
public class CounselorService {

    @Autowired
    private CounselorRepository counselorRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AmazonS3 s3Client;

    @Value("${cloud.aws.s3.bucket}")
    private String bucketName;

    public Counselor save(CounselorDto counselorDto){
        return counselorRepository.save(Counselor.builder()
                .regist(counselorDto.getRegist())
                .license(counselorDto.getLicense())
                .school(counselorDto.getSchool())
                .company(counselorDto.getCompany())
                .rateSum(0)
                .state(0)
                .build());
    }

    public void changeUserType(Integer counselorId) {
        User user = counselorRepository.findById(counselorId)
                .orElseThrow(()-> new IllegalArgumentException("해당 user 번호가 없습니다.")).getUser();
        if (user.getType() == 0) {
            user.updateType(2);
        } else {
            System.out.println("유저의 타입이 0이 아닙니다.");
        }
    }
}
