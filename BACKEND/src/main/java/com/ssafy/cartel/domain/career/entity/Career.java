package com.ssafy.cartel.domain.career.entity;


import com.ssafy.cartel.domain.counselor.entity.Counselor;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Career {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "career_id", updatable = false)
    private Integer id;

    @Column(name = "career_content")
    private String content;

    @Column(name = "career_state")
    private Integer state;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn (name = "counselor_id")
    private Counselor counselorId;

    @Builder
    public Career(Integer careerId, String content, Integer state, Counselor counselorId) {
        this.id = careerId;
        this.content = content;
        this.state = state;
        this.counselorId = counselorId;
    }

    public void update(String content, Integer state) {
        this.content = content;
        this.state = state;
    }

}
