package com.ssafy.cartel.domain.comment.repository;

import com.ssafy.cartel.domain.comment.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Integer> {
}
