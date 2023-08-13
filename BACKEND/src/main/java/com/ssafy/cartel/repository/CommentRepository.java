package com.ssafy.cartel.repository;

import com.ssafy.cartel.domain.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Integer> {
    List<Comment> findAllById(Integer id);
}
