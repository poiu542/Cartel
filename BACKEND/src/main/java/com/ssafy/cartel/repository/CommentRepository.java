package com.ssafy.cartel.repository;

import com.ssafy.cartel.domain.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Integer> {
}
