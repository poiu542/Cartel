package com.ssafy.cartel.domain.comment.dto;


import com.ssafy.cartel.domain.article.entity.Article;
import com.ssafy.cartel.domain.comment.entity.Comment;
import com.ssafy.cartel.domain.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class CommentDto {

    private String content;
    private Integer userId;
    private Integer nickname;
    private LocalDateTime date;
    private Integer state;
    private Integer postId;

    public Comment toEntity(User user, Article article){
        return Comment.builder()
                .content(content)
                .user(user)
                .date(date)
                .state(state)
                .article(article)
                .build();
    }



}