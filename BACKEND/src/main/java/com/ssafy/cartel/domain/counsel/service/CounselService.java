package com.ssafy.cartel.domain.counsel.service;

import com.ssafy.cartel.domain.counsel.entity.Counsel;
import com.ssafy.cartel.domain.counsel.dto.CounselDto;
import com.ssafy.cartel.domain.counsel.repository.CounselRepository;
import com.ssafy.cartel.domain.counselor.entity.Counselor;
import com.ssafy.cartel.domain.counselor.repository.CounselorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Transactional(readOnly = true)
@RequiredArgsConstructor //final , @notnull 붙은 필드의 생성자 추가
@Service //빈으로 등록
public class CounselService {
    private final CounselRepository counselRepository;
    private final CounselorRepository counselorRepository;

    @Transactional
    public Counsel save(CounselDto counselDto){
        Counselor counselor = counselorRepository.findById(counselDto.getCounselorId()).orElseThrow();
        return counselRepository.save(counselDto.toEntity(counselor));
    }

    public List<CounselDto> findAll(){
        List<Counsel> counsel = counselRepository.findAll();
        List<CounselDto> counselDtoList = new ArrayList<>();

        for (int i = 0; i < counsel.size(); i++) {
            CounselDto counselDto = CounselDto.builder()
                    .counselId(counsel.get(i).getId())
                    .startDate(counsel.get(i).getStartDate())
                    .endDate(counsel.get(i).getEndDate())
                    .counselorId(counsel.get(i).getCounselorId().getId())
                    .counselCount(counsel.get(i).getCounselCount())
                    .clientCount(counsel.get(i).getClientCount())
                    .introduction(counsel.get(i).getIntroduction())
                    .price(counsel.get(i).getPrice())
                    .state(counsel.get(i).getState())
                    .title(counsel.get(i).getTitle())
                    .weekCount(counsel.get(i).getWeekCount())
                    .build();

            counselDtoList.add(counselDto);
        }
        return counselDtoList;
    }

    public CounselDto findById(Integer id){
        Counsel counsel = counselRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("not found:" + id));
        CounselDto counselDto = CounselDto.builder()
                .counselId(counsel.getId())
                .startDate(counsel.getStartDate())
                .endDate(counsel.getEndDate())
                .counselorId(counsel.getCounselorId().getId())
                .counselCount(counsel.getCounselCount())
                .clientCount(counsel.getClientCount())
                .introduction(counsel.getIntroduction())
                .price(counsel.getPrice())
                .state(counsel.getState())
                .title(counsel.getTitle())
                .weekCount(counsel.getWeekCount())
                .build();
        return counselDto;
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