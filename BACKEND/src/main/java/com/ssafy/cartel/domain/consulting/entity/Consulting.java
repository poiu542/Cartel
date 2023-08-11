package com.ssafy.cartel.domain.consulting.entity;
<<<<<<< HEAD
=======

>>>>>>> 450fc5b08cc0bcdcbee8d5ab7b997741843b6736

import com.ssafy.cartel.domain.client.entity.Client;
import com.ssafy.cartel.domain.curriculum.entity.Curriculum;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Consulting {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "consulting_id", updatable = false)
    private Integer id;

    @Column(name = "consulting", nullable = false)
    private String consulting;

    @Column(name = "consulting_date", nullable = false)
    private LocalDateTime date;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "curriculum_id")
    private Curriculum curriculumId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "client_id", nullable = false)
    private Client clientId;

    @Column(name = "consulting_state", nullable = false)
    private Integer state;


    @Builder
    public Consulting(Integer counsultingId, String consulting, LocalDateTime date, Curriculum curriculumId, Client clientId, Integer state) {
        this.id = counsultingId;
        this.consulting = consulting;
        this.date = date;
        this.state = state;
        this.clientId = clientId;
        this.curriculumId = curriculumId;
    }

    public void changeState(Integer state) {
        this.state = state;
    }
}