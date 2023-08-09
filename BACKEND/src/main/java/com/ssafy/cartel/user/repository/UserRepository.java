package com.ssafy.cartel.user.repository;

import com.ssafy.cartel.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
}
