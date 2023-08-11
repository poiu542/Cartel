package com.ssafy.cartel.counselPlan.service;

import com.ssafy.cartel.counsel.entity.Counsel;
import com.ssafy.cartel.counsel.repository.CounselRepository;
import com.ssafy.cartel.counselPlan.dto.CounselPlanDto;
import com.ssafy.cartel.counselPlan.entity.CounselPlan;
import com.ssafy.cartel.counselPlan.repository.CounselPlanRepository;
import com.ssafy.cartel.counselor.repository.CounselorRepository;
import com.ssafy.cartel.day.dto.DayDto;
import com.ssafy.cartel.day.entity.Day;
import com.ssafy.cartel.day.repository.DayRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Transactional(readOnly = true)
@RequiredArgsConstructor //final , @notnull 붙은 필드의 생성자 추가
@Service //빈으로 등록
public class CounselPlanService {
    private final CounselPlanRepository counselPlanRepository;
    private final CounselRepository counselRepository;
    private final DayRepository dayRepository;

    @Transactional
    public CounselPlan save(CounselPlanDto counselPlanDto){
        Counsel counsel = counselRepository.findById(counselPlanDto.getCounselId()).orElseThrow();
        Day day = dayRepository.findById(counselPlanDto.getDayId()).orElseThrow();
        return counselPlanRepository.save(counselPlanDto.toEntity(counsel, day));
    }

    public List<CounselPlanDto> findAll(){
        List<CounselPlan> counselPlan = counselPlanRepository.findAll();
        List<CounselPlanDto> counselPlanDtoList = new ArrayList<>();

        for (int i = 0; i < counselPlan.size(); i++) {
            CounselPlanDto counselPlanDto = CounselPlanDto.builder()
                    .time(counselPlan.get(i).getTime())
                    .counselId(counselPlan.get(i).getCounselId().getId())
                    .dayId(counselPlan.get(i).getDayId().getId())
                    .build();

            counselPlanDtoList.add(counselPlanDto);
        }
        return counselPlanDtoList;
    }

    public CounselPlanDto findById(Integer id){
        CounselPlan counselPlan = counselPlanRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("not found:" + id));
        CounselPlanDto counselPlanDto = CounselPlanDto.builder()
                .time(counselPlan.getTime())
                .counselId(counselPlan.getCounselId().getId())
                .dayId(counselPlan.getDayId().getId())
                .build();
        return counselPlanDto;
    }

//    @Transactional
//    public Counsel update(Integer id, CounselDto counselDto){
//        Counsel counsel = counselRepository.findById(id)
//                .orElseThrow(()-> new IllegalArgumentException("not found:" + id));
//
//        counsel.update(counselDto.getStartDate(),counselDto.getEndDate(),counselDto.getCounselCount(),counselDto.getTitle(),counselDto.getState(),counselDto.getClientCount(),counselDto.getPrice(),counselDto.getIntroduction(),counselDto.getWeekCount());
//
//        return counsel;
//    }

//    //삭제
//    @Transactional
//    public void updateState(Integer id, CounselDto counselDto){
//        Counsel counsel = counselRepository.findById(id)
//                .orElseThrow(()-> new IllegalArgumentException("not found:" + id));
//
//        counsel.updateState(-1);
//    }


}