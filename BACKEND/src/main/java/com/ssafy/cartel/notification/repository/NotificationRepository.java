package com.ssafy.cartel.notification.repository;

import com.ssafy.cartel.notification.entity.Notification;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NotificationRepository extends JpaRepository<Notification, Integer> {
}
