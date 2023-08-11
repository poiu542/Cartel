package com.ssafy.cartel.domain.user.service;

<<<<<<< HEAD
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.ssafy.cartel.domain.user.entity.User;
import com.ssafy.cartel.domain.user.dto.EmailAuthRequest;
import com.ssafy.cartel.domain.user.dto.UserDto;
import com.ssafy.cartel.domain.user.repository.UserRepository;
import com.ssafy.cartel.util.RedisUtil;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Objects;
import java.util.Optional;
import java.util.Random;

@RequiredArgsConstructor
@Service
@Slf4j
public class UserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final RedisUtil redisUtil;
    private final JavaMailSender mailSender;

    @Autowired
    private AmazonS3 s3Client;

    @Value("${cloud.aws.s3.bucket}")
    private String bucketName;

    public User save(UserDto userDto){
        return userRepository.save(User.builder()
                .email(userDto.getEmail())
                .nickname(userDto.getNickname())
                .password(bCryptPasswordEncoder.encode(userDto.getPassword())) //암호화
                .name(userDto.getName())
                .point(0)
                .state(0)
                .profileUrl(userDto.getProfileUrl())
                .type(0)
                .build());
    }

    //refreshtoken user
    public User findbyRefreshToken(String Token){
        return userRepository.findByRefreshToken(Token)
                .orElseThrow(()-> new IllegalArgumentException("unexpexted token"));
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
        String subject = "[우린 약하지 않아] 회원가입 인증번호";
        String text = "안녕하세요. <br.> [우린 약하지 않아] 회원 가입을 위한 인증번호는 "+ authKey + "입니다.<br/>";

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

    @Transactional
    public void update(User user,String token){
        user.refresh(token);
    }

    // MultipartFile을 전달받아 File로 전환한 후 S3에 업로드
    public String upload(MultipartFile multipartFile) throws IOException {
        File uploadFile = convert(multipartFile)
                .orElseThrow(() -> new IllegalArgumentException("MultipartFile -> File 전환 실패"));
        return upload(uploadFile);
    }

    private String upload(File uploadFile) {
        String fileName = uploadFile.getName();
        String uploadImageUrl = putS3(uploadFile, fileName);

        removeNewFile(uploadFile);  // 로컬에 생성된 File 삭제 (MultipartFile -> File 전환 하며 로컬에 파일 생성됨)

        return uploadImageUrl;      // 업로드된 파일의 S3 URL 주소 반환
    }

    private String putS3(File uploadFile, String fileName) {
        s3Client.putObject(
                new PutObjectRequest(bucketName, fileName, uploadFile)
                        .withCannedAcl(CannedAccessControlList.PublicRead)	// PublicRead 권한으로 업로드 됨
        );
        return s3Client.getUrl(bucketName, fileName).toString();
    }

    private void removeNewFile(File targetFile) {
        if(targetFile.delete()) {
            log.info("파일이 삭제되었습니다.");
        }else {
            log.info("파일이 삭제되지 못했습니다.");
        }
    }

    private Optional<File> convert(MultipartFile file) throws  IOException {
        File convertFile = new File(Objects.requireNonNull(file.getOriginalFilename()));
        if(convertFile.createNewFile()) {
            try (FileOutputStream fos = new FileOutputStream(convertFile)) {
                fos.write(file.getBytes());
            }
            return Optional.of(convertFile);
        }
        return Optional.empty();
    }
}
=======
import com.ssafy.cartel.domain.user.dto.UserDto;
import com.ssafy.cartel.domain.user.entity.User;
import com.ssafy.cartel.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Transactional(readOnly = true)
@RequiredArgsConstructor //final , @notnull 붙은 필드의 생성자 추가
@Service //빈으로 등록
public class UserService {
    private final UserRepository userRepository;

    @Transactional
    public User save(UserDto userDto){
        return userRepository.save(userDto.toEntity());
    }

    public List<User> findAll(){
        return userRepository.findAll();
    }

    public Optional<User> findById(Integer id){
        return Optional.ofNullable(userRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("not found:" + id)));
    }

    @Transactional
    public void delete(Integer id){
        userRepository.deleteById(id);
    }

    @Transactional
    public User update(Integer id, UserDto userDto){
        User user = userRepository.findById(id)
                .orElseThrow(()-> new IllegalArgumentException("not found:" + id));

        user.update(userDto.getEmail(), userDto.getNickname(), userDto.getName(), userDto.getPhone());

        return user;
    }


}
>>>>>>> 450fc5b08cc0bcdcbee8d5ab7b997741843b6736
