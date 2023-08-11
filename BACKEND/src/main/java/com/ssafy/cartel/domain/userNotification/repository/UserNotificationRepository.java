package com.ssafy.cartel.domain.userNotification.repository;

import com.ssafy.cartel.domain.userNotification.entity.UserNotification;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserNotificationRepository extends JpaRepository<UserNotification, Integer> {
}
