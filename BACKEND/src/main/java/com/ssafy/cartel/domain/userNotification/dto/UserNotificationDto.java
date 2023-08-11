package com.ssafy.cartel.domain.userNotification.dto;

import com.ssafy.cartel.domain.client.entity.Client;
import com.ssafy.cartel.domain.notification.entity.Notification;
import com.ssafy.cartel.domain.userNotification.entity.UserNotification;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor //기본 생성자
@AllArgsConstructor //모든 필드값을 파라미터로 받는 생성자
@Getter
public class UserNotificationDto {

    private Client cliendId;
    private Notification notificationId;


    public UserNotification toEntity() {
        return UserNotification.builder()
                .notificationId(notificationId)
                .cliendId(cliendId)
                .build();
    }
}
