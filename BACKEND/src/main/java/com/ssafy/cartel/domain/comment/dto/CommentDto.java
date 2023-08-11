package com.ssafy.cartel.domain.comment.dto;

<<<<<<< HEAD

=======
>>>>>>> 450fc5b08cc0bcdcbee8d5ab7b997741843b6736
import com.ssafy.cartel.domain.article.entity.Article;
import com.ssafy.cartel.domain.comment.entity.Comment;
import com.ssafy.cartel.domain.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

<<<<<<< HEAD
@NoArgsConstructor
@AllArgsConstructor
=======
@NoArgsConstructor //기본 생성자
@AllArgsConstructor //모든 필드값을 파라미터로 받는 생성자
>>>>>>> 450fc5b08cc0bcdcbee8d5ab7b997741843b6736
@Getter
public class CommentDto {

    private String content;
<<<<<<< HEAD
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
=======
    private LocalDateTime date;
    private Integer state;
    private Article postId;
    private User userId;

    public Comment toEntity() {
        return Comment.builder()
                .content(content)
                .date(date)
                .state(state)
                .postId(postId)
                .userId(userId)
                .build();
    }
}
>>>>>>> 450fc5b08cc0bcdcbee8d5ab7b997741843b6736
