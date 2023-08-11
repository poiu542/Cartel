package com.ssafy.cartel.domain.client.dto;

import com.ssafy.cartel.domain.client.entity.Client;
import com.ssafy.cartel.domain.counsel.entity.Counsel;
import com.ssafy.cartel.domain.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor //기본 생성자
@AllArgsConstructor //모든 필드값을 파라미터로 받는 생성자
@Getter
public class ClientDto {

    private User userId;
    private Counsel counselId;
    private Integer attendance;
    private Integer state;

    public Client toEntity() {

        return Client.builder()
                .userId(userId)
                .attendance(attendance)
                .counselId(counselId)
                .state(state)
                .build();
    }
}
