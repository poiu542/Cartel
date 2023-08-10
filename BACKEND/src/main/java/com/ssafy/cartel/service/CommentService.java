package com.ssafy.cartel.service;

import com.ssafy.cartel.domain.Article;
import com.ssafy.cartel.domain.Comment;
import com.ssafy.cartel.domain.User;
import com.ssafy.cartel.dto.CommentDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class CommentService {
    private CommentRepository commentRepository;
    private UserRepository userRepository;
    private ArticleRepository articleRepository;

    public Comment save(CommentDto commentDto){
        User user = userRepository.findById(commentDto.getUserId())
                .orElseThrow(()-> new IllegalArgumentException("not found user_id" ));
        Article article = articleRepository.findById(commentDto.getPostId())
                .orElseThrow(()->new IllegalArgumentException("nor found post_id"));
        Comment comment = commentDto.toEntity(user,article);
        article.getComments().add(comment);
        return commentRepository.save(comment);

    }



}
