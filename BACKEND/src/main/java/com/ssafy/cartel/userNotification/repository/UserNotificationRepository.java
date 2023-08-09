package com.ssafy.cartel.userNotification.repository;

import com.ssafy.cartel.userNotification.entity.UserNotification;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserNotificationRepository extends JpaRepository<UserNotification, Integer> {
}
