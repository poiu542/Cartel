package com.ssafy.cartel.domain.counselor.controller;

import com.ssafy.cartel.domain.counselor.entity.Counselor;
import com.ssafy.cartel.domain.counselor.repository.CounselorRepository;
import com.ssafy.cartel.domain.counselor.service.LicenseImgService;
import com.ssafy.cartel.domain.counselor.service.RegistImgService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/counselor")
@Transactional
public class CounselorImgController {

    @Autowired
    private LicenseImgService licenseImgService;

    @Autowired
    private RegistImgService registImgService;

    @Autowired
    private CounselorRepository counselorRepository;

    @PostMapping("/upload/regist")
    public ResponseEntity<String> uploadRegistFile(@RequestParam(value = "file") MultipartFile multipartFile, Integer counselorId) throws IOException {
        String imgURL = licenseImgService.upload(multipartFile);
        Counselor counselor = counselorRepository.findById(counselorId)
                .orElseThrow(() -> new IllegalArgumentException("해당 counselor가 존재하지 않습니다."));
        counselor.updateRegistImg(imgURL);
        System.out.println(imgURL);
        return new ResponseEntity<>(imgURL, HttpStatus.OK);
    }

    @PostMapping("/upload/license")
    public ResponseEntity<String> uploadLicenseFile(@RequestParam(value = "file") MultipartFile multipartFile, Integer counselorId) throws IOException {
            String imgURL = registImgService.upload(multipartFile);
            Counselor counselor = counselorRepository.findById(counselorId)
                    .orElseThrow(() -> new IllegalArgumentException("해당 counselor가 존재하지 않습니다."));
            counselor.updateLicenseImg(imgURL);

        return new ResponseEntity<>(imgURL, HttpStatus.OK);
    }

//    @GetMapping("download/{fileName}")
//    public ResponseEntity<ByteArrayResource> downloadFile(@PathVariable String fileName) {
//        byte[] data = counselorImgService.downloadFile(fileName);
//        ByteArrayResource resource = new ByteArrayResource(data);
//        return ResponseEntity
//                .ok()
//                .contentLength(data.length)
//                .header("Content-type", "application/octet-stream")
//                .header("Content-disposition", "attachment; filename=\"" + fileName + "\"")
//                .body(resource);
//    }
//
//    @DeleteMapping("/delete/{fileName}")
//    public ResponseEntity<String> deleteFile(@PathVariable String fileName) {
//        return new ResponseEntity<>(counselorImgService.deleteFile(fileName), HttpStatus.OK);
//    }
}
