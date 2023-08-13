package com.ssafy.cartel.controller;

import com.ssafy.cartel.domain.Article;
import com.ssafy.cartel.domain.Comment;
import com.ssafy.cartel.dto.ArticleDto;
import com.ssafy.cartel.dto.ArticleResponse;
import com.ssafy.cartel.dto.UpdateArticleRequest;
import com.ssafy.cartel.service.ArticleService;
import com.ssafy.cartel.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@RestController //json 반환
public class ArticleController {

    private final ArticleService articleService;
    private final CommentService commentService;

    @PostMapping("/articles")
    public ResponseEntity<Article> addArticle(@RequestBody ArticleDto articleDto){
        Article savedArticle = articleService.save(articleDto);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(savedArticle);
    }

    @GetMapping("/articles")
    public ResponseEntity<List<ArticleResponse>> findAllArticles() {
        List<ArticleResponse> articles = articleService.findAll()
                .stream()
                .map(ArticleResponse::new)
                .toList();
        return ResponseEntity.ok()
                .body(articles);
    }

    @GetMapping("/articles/{id}")
    public ResponseEntity<Map<String, Object>> findArticle(@PathVariable Integer id){
        Article article = articleService.findById(id);
        List<Comment> comments = commentService.getComments(id);
        Map<String, Object> response = new HashMap<String, Object>();
        response.put("article", article);
        response.put("comments", comments);

        return ResponseEntity.ok()
                .body(response);
    }

    @DeleteMapping("/articles/{id}")
    public ResponseEntity<Void> deleteArticle(@PathVariable Integer id){
        articleService.delete(id);

        return ResponseEntity.ok()
                .build();
    }

    @PutMapping("/articles/{id}")
    public ResponseEntity<Article> updateArticle(@PathVariable Integer id, @RequestBody UpdateArticleRequest request){
        Article article = articleService.update(id,request);

        return ResponseEntity.ok()
                .body(article);
    }
}