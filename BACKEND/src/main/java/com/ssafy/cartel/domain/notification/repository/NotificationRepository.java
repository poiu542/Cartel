package com.ssafy.cartel.domain.notification.repository;

import com.ssafy.cartel.domain.notification.entity.Notification;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NotificationRepository extends JpaRepository<Notification, Integer> {
}
