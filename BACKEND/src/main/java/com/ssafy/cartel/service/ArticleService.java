package com.ssafy.cartel.service;

import ch.qos.logback.core.CoreConstants;
import com.ssafy.cartel.domain.Article;
import com.ssafy.cartel.domain.Comment;
import com.ssafy.cartel.domain.User;
import com.ssafy.cartel.dto.ArticleDto;
import com.ssafy.cartel.dto.CommentDto;
import com.ssafy.cartel.dto.UpdateArticleRequest;
import com.ssafy.cartel.repository.ArticleRepository;
import com.ssafy.cartel.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor //final , @notnull 붙은 필드의 생성자 추가
@Service //빈으로 등록
public class ArticleService {
    private final ArticleRepository articleRepository;
    private final UserRepository userRepository;

    public Article save(ArticleDto articleDto){
        System.out.println(articleDto.getContent());
        User user = userRepository.findById(articleDto.getUserId())
                .orElseThrow(()-> new IllegalArgumentException("not found:" ));
        return articleRepository.save(articleDto.toEntity(user));
    }

    public List<Article> findAll(){
        return articleRepository.findAll();
    }

    public Article findById(Integer id){
        return articleRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("not found:" + id));
    }
    public void delete(Integer id){
        articleRepository.deleteById(id);
    }

    @Transactional
    public Article update(Integer id, UpdateArticleRequest request){
        Article article = articleRepository.findById(id)
                .orElseThrow(()-> new IllegalArgumentException("not found:" + id));

        article.update(request.getTitle(), request.getContent());
        return article;
    }

    @Transactional
    public void view(Integer id){
        Article article = articleRepository.findById(id)
                .orElseThrow(()-> new IllegalArgumentException("not found:" + id));
        article.view(article.getViews());

    }

//    @Transactional
//    public void comment(Integer id, Comment comment){
//        Article article = articleRepository.findById(id)
//                .orElseThrow(()-> new IllegalArgumentException("not found:" + id));
//        article.getComments().add(comment);
//        article.comment(article.getComments());
//    }




}