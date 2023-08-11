package com.ssafy.cartel.domain.article.repository;

import com.ssafy.cartel.domain.article.entity.Article;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArticleRepository extends JpaRepository<Article, Integer> {


}
