package com.ssafy.cartel.domain.user.repository;

import com.ssafy.cartel.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

<<<<<<< HEAD
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByEmail(String email);
    Optional<User> findByRefreshToken(String refreshToken);
=======
public interface UserRepository extends JpaRepository<User, Integer> {
>>>>>>> 450fc5b08cc0bcdcbee8d5ab7b997741843b6736
}
