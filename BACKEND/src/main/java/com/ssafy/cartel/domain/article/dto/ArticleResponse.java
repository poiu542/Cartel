package com.ssafy.cartel.domain.article.dto;

import com.ssafy.cartel.domain.article.entity.Article;
<<<<<<< HEAD
=======
import com.ssafy.cartel.domain.user.entity.User;
import lombok.AllArgsConstructor;
>>>>>>> 450fc5b08cc0bcdcbee8d5ab7b997741843b6736
import lombok.Getter;

import java.time.LocalDateTime;

@AllArgsConstructor //모든 필드값을 파라미터로 받는 생성자
@Getter
public class ArticleResponse {

    private final Integer id;
    private final String title;
    private final String content;
    private final Integer level;
    private final Integer views;
    private final Integer userId;
    private final String nickname;
    private final Integer type;
    private final LocalDateTime date;
    private final Integer status;
    //private final List<Comment> comments;


    public ArticleResponse(Article article) {
        this.id = article.getId();
        this.title = article.getTitle();
        this.content = article.getContent();
        this.level = article.getLevel();
        this.views = article.getViews();
        this.userId = article.getUser().getId();
        this.nickname = article.getUser().getNickname();
        this.type = article.getType();
        this.date = article.getDate();
        this.status = article.getStatus();
        //this.comments = article.getComments();
    }
}
