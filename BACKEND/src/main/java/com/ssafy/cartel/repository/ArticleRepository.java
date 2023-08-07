package com.ssafy.cartel.repository;

import com.ssafy.cartel.domain.Article;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArticleRepository extends JpaRepository<Article, Integer> {


}
