package com.ssafy.cartel.article.repository;

import com.ssafy.cartel.article.entity.Article;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArticleRepository extends JpaRepository<Article, Integer> {


}
