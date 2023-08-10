package com.ssafy.cartel.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "client_id", updatable = false)
    private Integer id;

    @OneToOne
    @JoinColumn (name = "user_id", nullable = false)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "counsel_id", nullable = false)
    private Counsel counsel;

    @Column(name = "client_attendance", nullable = false)
    private Integer attendance;

    @Column(name = "client_state")
    private Integer state;


    @Builder
    public Client(User user, Counsel counsel, Integer attendance, Integer state) {
        this.user = user;
        this.counsel = counsel;
        this.attendance = attendance;
        this.state = state;
    }
}