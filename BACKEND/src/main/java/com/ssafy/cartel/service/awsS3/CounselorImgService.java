package com.ssafy.cartel.service.awsS3;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.amazonaws.services.s3.model.S3Object;
import com.amazonaws.services.s3.model.S3ObjectInputStream;
import com.amazonaws.util.IOUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.UUID;

@Service
@Slf4j
public class CounselorImgService {
    @Autowired
    private AmazonS3 s3Client;

    @Value("${cloud.aws.s3.bucket}")
    private String bucketName;

    public String uploadFile(MultipartFile multipartFile) throws IOException {
//        File fileObj = convertMultiPartFileToFile(file);
//        String filename = System.currentTimeMillis() + "_" + file.getOriginalFilename();
//        s3Client.putObject(new PutObjectRequest(bucketName, filename, fileObj));
//        return "File uploaded : " + filename;
        // S3에 저장되는 파일의 이름이 중복되지 않기 위해서
        // UUID로 생성한 랜덤 값과 파일 이름을 연결하여 S3에 업로드 하겠습니다.
        String s3FileName = UUID.randomUUID() + "-" + multipartFile.getOriginalFilename();

        // 그리고 Spring server 에서 S3로 파일을 업로드해야 하는데
        // 이 때 파일의 사이즈를 ContentLength 로 S3에 알려주기 위해서 ObjectMetadata 를 사용합니다.
        ObjectMetadata objMeta = new ObjectMetadata();
        // 주소로 접근 했을때 이미지 보여줌
        objMeta.setContentType(multipartFile.getContentType());
        // 주소로 접근 했을때 다운로드됨
        // objMeta.setContentLength(multipartFile.getInputStream().available());

        // 그리고 이제 S3 API 메소드인 putObject를 이용하여 파일 Stream을 열어서 S3에 파일을 업로드 합니다.
        s3Client.putObject(bucketName, s3FileName, multipartFile.getInputStream(), objMeta);
        // 이미지 볼 수 있는 url 준다.
        return s3Client.getUrl(bucketName, s3FileName).toString();
    }

    public byte[] downloadFile(String fileName) {
        S3Object s3Object = s3Client.getObject(bucketName, fileName);
        S3ObjectInputStream inputStream = s3Object.getObjectContent();
        try {
            byte[] content = IOUtils.toByteArray(inputStream);
            return content;
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

    public String deleteFile(String fileName) {
        s3Client.deleteObject(bucketName, fileName);
        return fileName + " removed ...";
    }

    private File convertMultiPartFileToFile(MultipartFile file) {
        File convertedFile = new File(file.getOriginalFilename());
        try(FileOutputStream fos = new FileOutputStream(convertedFile)) {
            fos.write(file.getBytes());
        } catch (IOException e) {
            log.error("Error converting multipartFile to file", e);
        }
        return convertedFile;
    }
}
