package com.ssafy.cartel.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class CounselPlan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "counsel_plan_id", updatable = false)
    private Integer id;

    @Column(name = "counsel_start_time", nullable = false)
    private LocalDateTime start_time;

    @Column(name = "counsel_end_time", nullable = false)
    private LocalDateTime end_time;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "counsel_id")
    private Counsel counselId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "day_id")
    private Day day;

    @Builder
    public CounselPlan(LocalDateTime start_time, LocalDateTime end_time, Counsel counselId, Day day) {
        this.start_time = start_time;
        this.end_time = end_time;
        this.counselId = counselId;
        this.day = day;
    }
}
