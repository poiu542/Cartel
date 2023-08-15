package com.ssafy.cartel.controller;

import com.ssafy.cartel.domain.CounselImg;
import com.ssafy.cartel.repository.CounselImgRepository;
import com.ssafy.cartel.service.CounselImgService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/counsel")
public class CounselImgController {

    @Autowired
    private CounselImgService counselImgService;

    @Autowired
    private CounselImgRepository counselImgRepository;

    @PostMapping("/upload/img")
    public ResponseEntity<String> uploadRegistFile(@RequestParam(value = "file") MultipartFile multipartFile, Integer counselImgId, String dirname) throws IOException {
        if (multipartFile.getSize() > 0) {
            String imgURL = counselImgService.upload(multipartFile);
            CounselImg counselImg = counselImgRepository.findById(counselImgId)
                    .orElseThrow(() -> new IllegalArgumentException("해당 counselImg가 존재하지 않습니다."));
            counselImg.updateRegistImg(imgURL);
        } else {
        }
        return new ResponseEntity<>(counselImgService.upload(multipartFile), HttpStatus.OK);
    }

//    @GetMapping("download/{fileName}")
//    public ResponseEntity<ByteArrayResource> downloadFile(@PathVariable String fileName) {
//        byte[] data = counselImgService.downloadFile(fileName);
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
//        return new ResponseEntity<>(counselImgService.deleteFile(fileName), HttpStatus.OK);
//    }
}
