package com.ssafy.cartel.article.controller;

import com.ssafy.cartel.article.entity.Article;
import com.ssafy.cartel.article.dto.ArticleDto;
import com.ssafy.cartel.article.dto.ArticleResponse;
import com.ssafy.cartel.article.dto.UpdateArticleRequest;
import com.ssafy.cartel.article.service.ArticleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController //json 반환
@RequestMapping("/articles")
public class ArticleController {

    private final ArticleService articleService;

    @PostMapping("/")
    public ResponseEntity<Article> addArticle(@RequestBody ArticleDto articleDto){
        Article savedArticle = articleService.save(articleDto);

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(savedArticle);
    }

    @GetMapping("/")
    public ResponseEntity<List<ArticleResponse>> findAllArticles() {
        List<ArticleResponse> articles = articleService.findAll()
                .stream()
                .map(ArticleResponse::new)
                .toList();
        return ResponseEntity.ok()
                .body(articles);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ArticleResponse> findArticle(@PathVariable Integer id){
        Article article = articleService.findById(id);

        return ResponseEntity.ok()
                .body(new ArticleResponse(article));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteArticle(@PathVariable Integer id){
        articleService.delete(id);

        return ResponseEntity.ok()
                .build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Article> updateArticle(@PathVariable Integer id, @RequestBody UpdateArticleRequest request){
        Article article = articleService.update(id,request);

        return ResponseEntity.ok()
                .body(article);
    }
}