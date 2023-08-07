package com.ssafy.cartel.controller.awsS3;

import com.ssafy.cartel.domain.Counselor;
import com.ssafy.cartel.domain.User;
import com.ssafy.cartel.repository.counselor.CounselorRepository;
import com.ssafy.cartel.service.awsS3.CounselorImgService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/counselor")
public class CounselorImgController {

    @Autowired
    private CounselorImgService counselorImgService;

    @Autowired
    private CounselorRepository counselorRepository;

    @PostMapping("/upload/regist")
    public ResponseEntity<String> uploadRegistFile(@RequestParam(value = "file") MultipartFile multipartFile, Integer counselorId) throws IOException {
        if (multipartFile.getSize() > 0) {
            String imgURL = counselorImgService.uploadFile(multipartFile);
            Counselor counselor = counselorRepository.findById(counselorId)
                    .orElseThrow(() -> new IllegalArgumentException("해당 counselor가 존재하지 않습니다."));
            counselor.updateRegistImg(imgURL);
        } else {
        }
        return new ResponseEntity<>(counselorImgService.uploadFile(multipartFile), HttpStatus.OK);
    }

    @PostMapping("/upload/profile")
    public ResponseEntity<String> uploadProfileFile(@RequestParam(value = "file") MultipartFile multipartFile, Integer counselorId) throws IOException {
        if (multipartFile.getSize() > 0) {
            String imgURL = counselorImgService.uploadFile(multipartFile);
            Counselor counselor = counselorRepository.findById(counselorId)
                    .orElseThrow(() -> new IllegalArgumentException("해당 counselor가 존재하지 않습니다."));
            counselor.updateProfileImg(imgURL);
        } else {
        }
        return new ResponseEntity<>(counselorImgService.uploadFile(multipartFile), HttpStatus.OK);
    }

    @PostMapping("/upload/license")
    public ResponseEntity<String> uploadLicenseFile(@RequestParam(value = "file") MultipartFile multipartFile, Integer counselorId) throws IOException {
        if (multipartFile.getSize() > 0) {
            String imgURL = counselorImgService.uploadFile(multipartFile);
            Counselor counselor = counselorRepository.findById(counselorId)
                    .orElseThrow(() -> new IllegalArgumentException("해당 counselor가 존재하지 않습니다."));
            counselor.updateLicenseImg(imgURL);
        } else {
        }
        return new ResponseEntity<>(counselorImgService.uploadFile(multipartFile), HttpStatus.OK);
    }

    @GetMapping("download/{fileName}")
    public ResponseEntity<ByteArrayResource> downloadFile(@PathVariable String fileName) {
        byte[] data = counselorImgService.downloadFile(fileName);
        ByteArrayResource resource = new ByteArrayResource(data);
        return ResponseEntity
                .ok()
                .contentLength(data.length)
                .header("Content-type", "application/octet-stream")
                .header("Content-disposition", "attachment; filename=\"" + fileName + "\"")
                .body(resource);
    }

    @DeleteMapping("/delete/{fileName}")
    public ResponseEntity<String> deleteFile(@PathVariable String fileName) {
        return new ResponseEntity<>(counselorImgService.deleteFile(fileName), HttpStatus.OK);
    }


}
