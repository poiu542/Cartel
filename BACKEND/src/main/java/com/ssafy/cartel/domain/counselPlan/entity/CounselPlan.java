package com.ssafy.cartel.domain.counselPlan.entity;

import com.ssafy.cartel.domain.counsel.entity.Counsel;
import com.ssafy.cartel.domain.day.entity.Day;
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

    @Column(name = "counsel_time", nullable = false)
    private LocalDateTime time;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "counsel_id")
    private Counsel counselId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "day_id")
    private Day day;

    @Builder
    public CounselPlan(LocalDateTime time, Counsel counselId, Day day) {
        this.time = time;
        this.counselId = counselId;
        this.day = day;
    }
}
