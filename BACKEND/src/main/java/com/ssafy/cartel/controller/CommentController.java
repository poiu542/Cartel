package com.ssafy.cartel.controller;

import com.ssafy.cartel.domain.Comment;
import com.ssafy.cartel.dto.CommentDto;
import com.ssafy.cartel.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class CommentController {

    private final CommentService commentService;

    @PostMapping("/articles/comments")
    public Comment addComment(@RequestBody CommentDto commentDto){
        Comment comment = commentService.save(commentDto);

        return comment;
    }
}