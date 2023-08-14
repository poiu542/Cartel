package com.ssafy.cartel.controller;

import com.ssafy.cartel.domain.Comment;
import com.ssafy.cartel.dto.CommentDto;
import com.ssafy.cartel.dto.CommentResponse;
import com.ssafy.cartel.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class CommentController {

    private final CommentService commentService;

    @PostMapping("/articles/comments")
    public Comment addComment(@RequestBody CommentDto commentDto){
        Comment comment = commentService.save(commentDto);

        return comment;
    }

    @GetMapping("/articles/comments/{id}")//post id
    public ResponseEntity<List<CommentResponse>> comments(@PathVariable Integer id){
        List<CommentResponse> comments = commentService.getComments(id)
                .stream()
                .map(CommentResponse::new)
                .toList();

        return ResponseEntity.ok()
                .body(comments);
    }

    @GetMapping("/articles/comments/user/{id}")//user id
    public ResponseEntity<List<CommentResponse>> userComments(@PathVariable Integer id){
        List<CommentResponse> comments = commentService.getUserComments(id)
                .stream()
                .map(CommentResponse::new)
                .toList();

        return ResponseEntity.ok()
                .body(comments);
    }

    @DeleteMapping("/articles/comments/{id}")//댓글 번호
    public ResponseEntity<String> delComment(@PathVariable Integer id){
        commentService.delete(id);

        return ResponseEntity.ok("댓글 삭제 완료");
    }



}
