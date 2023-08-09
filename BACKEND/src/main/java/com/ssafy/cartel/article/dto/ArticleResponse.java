package com.ssafy.cartel.article.dto;

import com.ssafy.cartel.article.entity.Article;
import com.ssafy.cartel.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

@AllArgsConstructor //모든 필드값을 파라미터로 받는 생성자
@Getter
public class ArticleResponse {

    private final String title;
    private final String content;
    private final Integer level;
    private final Integer views;
    private final User user;
    private final Integer type;
    private final LocalDateTime date;
    private final Integer status;


    public ArticleResponse(Article article) {
        this.title = article.getTitle();
        this.content = article.getContent();
        this.level = article.getLevel();
        this.views = article.getViews();
        this.user = article.getUser();
        this.type = article.getType();
        this.date = article.getDate();
        this.status = article.getStatus();
    }
}
