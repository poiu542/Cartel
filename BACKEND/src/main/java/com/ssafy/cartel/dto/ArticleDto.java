package com.ssafy.cartel.dto;

import com.ssafy.cartel.domain.Article;
import com.ssafy.cartel.domain.User;
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
    private User user;
    private Integer type;
    private LocalDateTime date;
    private Integer status;

    public Article toEntity(){
        return Article.builder()
                .title(title)
                .content(content)
                .level(level)
                .views(views)
                .user(user)
                .type(type)
                .date(date)
                .status(status)
                .build();

    }
}
