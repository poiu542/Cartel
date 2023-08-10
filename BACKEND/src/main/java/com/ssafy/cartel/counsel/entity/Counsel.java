package com.ssafy.cartel.counsel.entity;

import com.ssafy.cartel.counselor.entity.Counselor;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Counsel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "counsel_id", updatable = false )
    private Integer id;

    @Column(name = "counsel_start_date", nullable = false)
    private LocalDate startDate;

    @Column(name = "counsel_end_date", nullable = false)
    private LocalDate endDate;

    @Column(name = "counsel_count", nullable = false)
    private Integer counselCount;

    @Column(name = "counsel_title", nullable = false)
    private String title;

    @Column(name = "counsel_state", nullable = false)
    private Integer state; // 0 = 상담 시작 전, 1 = 상담 진행 중, 2 = 상담 종료, 3 = 상담 취소, -1 = 상담 삭제

    @Column(name = "counsel_client_count", nullable = false)
    private Integer clientCount;

    @Column(name = "counsel_price", nullable = false)
    private Integer price;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "counselor_id", nullable = false)
    private Counselor counselorId;

    @Column(name = "counsel_introduction", nullable = false)
    private String introduction;

    @Column(name = "counsel_week_count", nullable = false )
    private Integer weekCount;

    @Builder
    public Counsel(LocalDate startDate,LocalDate endDate, Integer counselCount, String title, Integer state, Integer clientCount, Integer price,Counselor counselorId, String introduction, Integer weekCount) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.counselCount = counselCount;
        this.title = title;
        this.state = state;
        this.clientCount = clientCount;
        this.price = price;
        this.counselorId = counselorId;
        this.introduction = introduction;
        this.weekCount = weekCount;
    }

//    public void update (LocalDateTime startDate, LocalDateTime endDate, Integer counselCount, String title, Integer state, Integer clientCount, Integer price, String introduction, Integer weekCount) {
//        this.startDate = startDate;
//        this.endDate = endDate;
//        this.counselCount = counselCount;
//        this.title = title;
//        this.state = state;
//        this.clientCount = clientCount;
//        this.price = price;
//        this.introduction = introduction;
//        this.weekCount = weekCount;
//    }

    public void updateState(Integer state){
        this.state = state;
    }

}
