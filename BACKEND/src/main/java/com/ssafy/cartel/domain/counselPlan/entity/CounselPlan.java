package com.ssafy.cartel.domain.counselPlan.entity;

import com.ssafy.cartel.domain.counsel.entity.Counsel;
import com.ssafy.cartel.domain.day.entity.Day;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;


@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "counsel_plan")
public class CounselPlan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "counsel_plan_id", updatable = false)
    private Integer id;

    @Column(name = "counsel_time", nullable = false)
    private String time;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "counsel_id")
    private Counsel counselId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "day_id")
    private Day dayId;

    @Builder
    public CounselPlan(String time, Counsel counselId, Day dayId) {
        this.time = time;
        this.counselId = counselId;
        this.dayId = dayId;
    }
}
