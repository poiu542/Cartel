package com.ssafy.cartel.domain.multipleChoiceAnswer.entity;


import com.ssafy.cartel.domain.multipleChoiceType.entity.MultipleChoiceType;
import com.ssafy.cartel.domain.reviewQuestion.entity.ReviewQuestion;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class MultipleChoiceAnswer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "multiple_choice_id", updatable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "review_question_id")
    private ReviewQuestion reviewQuestion;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="choice_id")
    private MultipleChoiceType multipleChoiceType;

    @Builder
    public MultipleChoiceAnswer(ReviewQuestion reviewQuestion, MultipleChoiceType multipleChoiceType) {
        this.reviewQuestion = reviewQuestion;
        this.multipleChoiceType = multipleChoiceType;
    }
}
