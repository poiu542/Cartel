package com.ssafy.cartel.dto.counselor;

import com.ssafy.cartel.domain.Counsel;
import com.ssafy.cartel.domain.CounselImg;
import com.ssafy.cartel.domain.User;
import jakarta.persistence.criteria.CriteriaBuilder;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor //기본 생성자
@AllArgsConstructor //모든 필드값을 파라미터로 받는 생성자
@Getter
public class CounselDto {
    public String imgUrl;
    public Integer state;
    public Counsel counselId;

    public CounselImg toEntity() {
        return CounselImg.builder()
                .imgUrl(imgUrl)
                .state(state)
                .counselId(counselId)
                .build();
    }
}
