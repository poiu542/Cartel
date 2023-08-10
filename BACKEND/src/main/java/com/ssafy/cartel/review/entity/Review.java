package com.ssafy.cartel.review.entity;


import com.ssafy.cartel.client.entity.Client;
import com.ssafy.cartel.counsel.entity.Counsel;
import com.ssafy.cartel.curriculum.entity.Curriculum;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Review { //소감문

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "review_id", updatable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "client_id")
    private Client clientId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "curriculum_id")
    private Curriculum curriculumId;

    @Column(name = "review_state", nullable = false)
    private Integer state;

    @Column(name = "review_date", nullable = false)
    private LocalDateTime date;

    @Builder
    public Review( Client clientId, Curriculum curriculumId, Integer state, LocalDateTime date) {

        this.clientId = clientId;
        this.curriculumId = curriculumId;
        this.state = state;
        this.date = date;
    }

    public void update(Client clientId, Curriculum curriculumId, Integer state, LocalDateTime date) {
        this.clientId = clientId;
        this.curriculumId = curriculumId;
        this.state = state;
        this.date = date;
    }
}
