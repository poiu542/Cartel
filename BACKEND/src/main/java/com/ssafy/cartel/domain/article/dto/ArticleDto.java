package com.ssafy.cartel.domain.article.dto;

import com.ssafy.cartel.domain.article.entity.Article;
import com.ssafy.cartel.domain.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@NoArgsConstructor //기본 생성자
@AllArgsConstructor //모든 필드값을 파라미터로 받는 생성자
@Getter
public class ArticleDto {

    private String title;
    private String content;
    private Integer level;
    private Integer views;
    private Integer user;
    private Integer type;
    private LocalDateTime date;
    private Integer status;


    public Article toEntity(User user){
        return Article.builder()
                .title(title)
                .content(content)
                .level(level)
                .views(views)
                .user(user)
                .type(type)
                .date(LocalDateTime.now())
                .status(status)
                .build();

    }
}
