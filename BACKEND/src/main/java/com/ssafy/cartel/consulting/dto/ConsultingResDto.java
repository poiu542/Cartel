package com.ssafy.cartel.consulting.dto;

import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@NoArgsConstructor //기본 생성자
@Getter
@Setter
@Builder
public class ConsultingResDto {

    private Integer counselId;
    private String counselTitle;
    private String consulting;
    private LocalDate consultingDate;
    private Integer userId;
    private String userNickname;
    private String email;
    private Integer clientId;
    private Integer consultingId;
    private Integer consultingState;

    public ConsultingResDto(Integer counselId, String counselTitle, String consulting, LocalDate consultingDate, Integer userId, String userNickname, String email, Integer clientId, Integer consultingId, Integer consultingState) {
        this.counselId = counselId;
        this.counselTitle = counselTitle;
        this.consulting = consulting;
        this.consultingDate = consultingDate;
        this.userId = userId;
        this.userNickname = userNickname;
        this.email = email;
        this.clientId = clientId;
        this.consultingId = consultingId;
        this.consultingState = consultingState;
    }
}
