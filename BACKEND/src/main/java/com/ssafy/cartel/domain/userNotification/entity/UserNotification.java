package com.ssafy.cartel.domain.userNotification.entity;

import com.ssafy.cartel.domain.client.entity.Client;
import com.ssafy.cartel.domain.notification.entity.Notification;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class UserNotification {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_notification_id", updatable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "client_id")
    private Client cliendId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "notification_id")
    private Notification notificationId;

    @Builder
    public UserNotification(Client cliendId, Notification notificationId) {
        this.cliendId = cliendId;
        this.notificationId = notificationId;
    }
}
