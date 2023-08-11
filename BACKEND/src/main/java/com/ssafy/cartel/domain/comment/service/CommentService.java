package com.ssafy.cartel.domain.comment.service;

import com.ssafy.cartel.domain.comment.entity.Comment;
import com.ssafy.cartel.domain.comment.dto.CommentDto;
import com.ssafy.cartel.domain.comment.repository.CommentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Transactional(readOnly = true)
@RequiredArgsConstructor //final , @notnull 붙은 필드의 생성자 추가
@Service //빈으로 등록
public class CommentService {
    private final CommentRepository commentRepository;

    @Transactional
    public Comment save(CommentDto commentDto){
        return commentRepository.save(commentDto.toEntity());
    }

    public List<Comment> findAll(){
        return commentRepository.findAll();
    }

    public Optional<Comment> findById(Integer id){
        return Optional.ofNullable(commentRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("not found:" + id)));
    }

    @Transactional
    public void delete(Integer id){
        commentRepository.deleteById(id);
    }

    @Transactional
    public Comment update(Integer id, CommentDto commentDto){
        Comment comment = commentRepository.findById(id)
                .orElseThrow(()-> new IllegalArgumentException("not found:" + id));

        comment.update(commentDto.getContent(),commentDto.getDate(),commentDto.getState());

        return comment;
    }


}