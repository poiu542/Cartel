package com.ssafy.cartel.domain.article.service;

import com.ssafy.cartel.domain.article.entity.Article;
import com.ssafy.cartel.domain.article.dto.ArticleDto;
import com.ssafy.cartel.domain.article.dto.UpdateArticleRequest;
import com.ssafy.cartel.domain.article.repository.ArticleRepository;
import com.ssafy.cartel.domain.user.entity.User;
import com.ssafy.cartel.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional(readOnly = true)
@RequiredArgsConstructor //final , @notnull 붙은 필드의 생성자 추가
@Service //빈으로 등록
public class ArticleService {
    private final ArticleRepository articleRepository;
    private final UserRepository userRepository;

    @Transactional
    public Article save(ArticleDto articleDto){
        User user = userRepository.findById(articleDto.getUser()).orElseThrow();
        return articleRepository.save(articleDto.toEntity(user));
    }

    public List<Article> findAll(){
        return articleRepository.findAll();
    }

    public Article findById(Integer id){
        return articleRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("not found:" + id));
    }

    @Transactional
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


}