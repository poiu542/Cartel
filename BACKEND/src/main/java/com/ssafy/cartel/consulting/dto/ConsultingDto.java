package com.ssafy.cartel.consulting.dto;

import com.ssafy.cartel.client.entity.Client;
import com.ssafy.cartel.consulting.entity.Consulting;
import com.ssafy.cartel.curriculum.entity.Curriculum;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@NoArgsConstructor //기본 생성자
@AllArgsConstructor //모든 필드값을 파라미터로 받는 생성자
@Getter
public class ConsultingDto {

    private String consulting;
    private LocalDateTime date;
    private Integer state;
    private Curriculum curriculumId;
    private Client clientId;


    public Consulting toEntity(){
        return Consulting.builder()
                .consulting(consulting)
                .clientId(clientId)
                .curriculumId(curriculumId)
                .date(date)
                .state(state)
                .build();
    }
}
