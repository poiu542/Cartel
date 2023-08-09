package com.ssafy.cartel.comment.entity;


import com.ssafy.cartel.article.entity.Article;
import com.ssafy.cartel.user.entity.User;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "comment_id", updatable = false)
    private Integer id;

    @Column(name = "comment_content", nullable = false)
    private String content;

    @Column(name = "comment_date", nullable = false)
    private LocalDateTime date;

    @Column(name = "comment_state", nullable = false)
    private Integer state;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "post_id")
    private Article postId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User userId;

    @Builder
    public Comment(String content, LocalDateTime date, Integer state, Article postId, User userId) {
        this.content = content;
        this.date = date;
        this.state = state;
        this.postId = postId;
        this.userId = userId;
    }

    public void update(String content, LocalDateTime date, Integer state) {
        this.content = content;
        this.date = date;
        this.state = state;
    }
}
