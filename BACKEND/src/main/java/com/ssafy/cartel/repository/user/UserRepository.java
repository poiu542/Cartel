package com.ssafy.cartel.repository.user;

import com.ssafy.cartel.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {

}