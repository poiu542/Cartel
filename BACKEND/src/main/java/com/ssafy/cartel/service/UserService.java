package com.ssafy.cartel.service;

import com.ssafy.cartel.domain.User;
import com.ssafy.cartel.dto.EmailAuthRequest;
import com.ssafy.cartel.dto.UserDto;
import com.ssafy.cartel.repository.UserRepository;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Random;

@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final RedisUtil redisUtil;
    private final JavaMailSender mailSender;

    public Integer save(UserDto userDto){
        return userRepository.save(User.builder()
                .email(userDto.getEmail())
                .nickname(userDto.getNickname())
                .password(bCryptPasswordEncoder.encode(userDto.getPassword()))
                .build()).getId();
    }

    // 인증 메일 전송 로직
    // 6자리 코드 랜덤 생성 후 전송
    @Transactional
    public void authMail(EmailAuthRequest request) {
        Random random = new Random();
        String authKey = String.valueOf(random.nextInt(888888)+111111);

        sendAuthEmail(request.getEmail(), authKey);
    }

    // 이메일 내용 작성 부분
    private void sendAuthEmail(String email, String authKey) {
        String subject = "제목";
        String text = "회원 가입을 위한 인증번호는 "+ authKey + "입니다.<br/>";

        try{
            MimeMessage mimeMessage = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true, "utf-8");
            helper.setTo(email);
            helper.setSubject(subject);
            helper.setText(text, true);
            mailSender.send(mimeMessage);

        } catch (MessagingException e) {
            e.printStackTrace();
        }

        // 유효시간 (5분간 유효)
        redisUtil.setDataExpire(authKey, email, 60 * 50L);
    }

    // 이메일 인증 코드 검증
    public boolean validAuthMailCode(EmailAuthRequest emailAuthRequestDto) {
        String emailFindByCode = redisUtil.getData(emailAuthRequestDto.getAuthCode());
        return emailFindByCode.equals(emailAuthRequestDto.getEmail());
    }
}
