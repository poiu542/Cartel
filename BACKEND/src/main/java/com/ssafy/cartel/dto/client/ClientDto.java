package com.ssafy.cartel.dto.client;

import com.ssafy.cartel.domain.Client;
import com.ssafy.cartel.domain.Counsel;
import com.ssafy.cartel.domain.User;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ClientDto {
    private Integer userId;
    private Integer counselId;
    private Integer attendance;
    private Integer state;

    public Client toEntity(User user, Counsel counsel) {
        return  Client.builder()
                .user(user)
                .counsel(counsel)
                .state(0)
                .attendance(0)
                .build();
    }
}
