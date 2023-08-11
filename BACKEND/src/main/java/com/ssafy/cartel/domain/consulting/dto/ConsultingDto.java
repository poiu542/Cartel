package com.ssafy.cartel.domain.consulting.dto;

import com.ssafy.cartel.domain.client.entity.Client;
import com.ssafy.cartel.domain.consulting.entity.Consulting;
import com.ssafy.cartel.domain.curriculum.entity.Curriculum;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@NoArgsConstructor //기본 생성자
@AllArgsConstructor //모든 필드값을 파라미터로 받는 생성자
@Getter
@Builder
public class ConsultingDto {

    private Integer consultingId;
    private String consulting;
    private LocalDateTime date;
    private Integer state;
    private Integer curriculumId;
    private Integer clientId;


    public Consulting toEntity(Client client, Curriculum curriculum){
        return Consulting.builder()
                .counsultingId(consultingId)
                .consulting(consulting)
                .date(LocalDateTime.now())
                .state(state)
                .curriculumId(curriculum)
                .clientId(client)
                .build();
    }
}
