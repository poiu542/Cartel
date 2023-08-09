package com.ssafy.cartel.userNotification.entity;

import com.ssafy.cartel.client.entity.Client;
import com.ssafy.cartel.notification.entity.Notification;
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
    public UserNotification(Client cliendId, Notification notificationId, Integer id) {
        this.cliendId = cliendId;
        this.notificationId = notificationId;
        this.id = id;
    }

    public void update(Client cliendId, Notification notificationId) {
        this.cliendId = cliendId;
        this.notificationId = notificationId;
    }
}
