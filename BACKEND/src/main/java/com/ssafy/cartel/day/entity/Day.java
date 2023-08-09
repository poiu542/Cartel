package com.ssafy.cartel.day.entity;


import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Day {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "day_id", updatable = false)
    private Integer id;

    @Column(name = "day", updatable = false)
    private String day;

    @Builder
    public Day(String day) {
        this.day = day;
    }
}
