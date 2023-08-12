package com.ssafy.cartel.domain.user.repository;

import com.ssafy.cartel.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
}
