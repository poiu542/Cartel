package com.ssafy.cartel.controller;

import com.ssafy.cartel.domain.Comment;
import com.ssafy.cartel.dto.CommentDto;
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

//    @GetMapping("/ariticles/comments/{id}")//post id
//    public List<Comment> comments(@PathVariable Integer id){
//        return commentService.getComments(id);
//    }


    @DeleteMapping("/articles/comments/{id}")//댓글 번호
    public ResponseEntity<String> delComment(@PathVariable Integer id){
        commentService.delete(id);

        return ResponseEntity.ok("댓글 삭제 완료");
    }



}