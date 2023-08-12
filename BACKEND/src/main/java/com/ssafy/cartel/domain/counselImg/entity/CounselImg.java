package com.ssafy.cartel.domain.counselImg.entity;

import com.ssafy.cartel.domain.counsel.entity.Counsel;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class CounselImg {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "counsel_img_id", nullable = false)
    private Integer id;

    @Column(name = "counsel_img_url", nullable = false)
    private String imgUrl;

    @Column(name = "counsel_img_state", nullable = false)
    private Integer state;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "counsel_id")
    private Counsel counselId;


    @Builder
    public CounselImg(String imgUrl, Integer state, Counsel counselId) {
        this.imgUrl = imgUrl;
        this.state = state;
        this.counselId = counselId;
    }
}
