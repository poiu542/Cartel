package com.ssafy.cartel.dto;


import com.ssafy.cartel.domain.Comment;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
public class CommentDto {

    private String content;
    private Integer userId;
    private LocalDateTime date;
    private Integer state;
    private Integer postId;



}