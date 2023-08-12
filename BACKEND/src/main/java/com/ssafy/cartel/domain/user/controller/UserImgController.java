package com.ssafy.cartel.domain.user.controller;

import com.ssafy.cartel.domain.user.entity.User;
import com.ssafy.cartel.domain.user.repository.UserRepository;
import com.ssafy.cartel.domain.user.service.UserImgService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/user")
@Transactional
public class UserImgController {

    @Autowired
    private UserImgService userImgService;

    @Autowired
    private UserRepository userRepository;


    @PostMapping("/upload")
    public ResponseEntity<?> uploadFile(@RequestParam(value = "file") MultipartFile multipartFile, Integer userId) throws IOException {
        String imgURL = userImgService.upload(multipartFile);
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("해당 user가 존재하지 않습니다."));
        user.updateImg(imgURL);
        System.out.println(imgURL);

        return new ResponseEntity<>(imgURL, HttpStatus.OK);
    }

//    @GetMapping("download/{fileName}")
//    public ResponseEntity<ByteArrayResource> downloadFile(@PathVariable String fileName) {
//        byte[] data = userImgService.downloadFile(fileName);
//        ByteArrayResource resource = new ByteArrayResource(data);
//        return ResponseEntity
//                .ok()
//                .contentLength(data.length)
//                .header("Content-type", "application/octet-stream")
//                .header("Content-disposition", "attachment; filename=\"" + fileName + "\"")
//                .body(resource);
//    }

//    @DeleteMapping("/delete/{fileName}")
//    public ResponseEntity<String> deleteFile(@PathVariable String fileName) {
//        return new ResponseEntity<>(userImgService.deleteFile(fileName), HttpStatus.OK);
//    }


}
