package com.ssafy.cartel.service;

import com.ssafy.cartel.domain.Counsel;
import com.ssafy.cartel.domain.CounselImg;
import com.ssafy.cartel.dto.CounselImgDto;
import com.ssafy.cartel.repository.CounselImgRepository;
import com.ssafy.cartel.repository.CounselRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Transactional(readOnly = true)
@RequiredArgsConstructor //final , @notnull 붙은 필드의 생성자 추가
@Service //빈으로 등록
public class CounselImgService {
    private final CounselImgRepository counselImgRepository;
    private final CounselRepository counselRepository;

    @Transactional
    public CounselImg save(CounselImgDto counselImgDto){
        Counsel counsel = counselRepository.findById(counselImgDto.getCounselId())
                .orElseThrow(() -> new IllegalArgumentException("not found:" + counselImgDto.getCounselId()));
        return counselImgRepository.save(counselImgDto.toEntity(counsel));
    }

    public List<CounselImgDto> findAll(){
        List<CounselImg> counselImg = counselImgRepository.findAll();
        List<CounselImgDto> counselImgDtoList = new ArrayList<>();

        for (int i = 0; i < counselImg.size(); i++) {
            CounselImgDto counselImgDto = CounselImgDto.builder()
                    .counselImgId(counselImg.get(i).getId())
                    .imgUrl(counselImg.get(i).getImgUrl())
                    .state(counselImg.get(i).getState())
                    .counselId(counselImg.get(i).getCounselId().getId())
                    .build();

            counselImgDtoList.add(counselImgDto);
        }
        return counselImgDtoList;
    }

    public CounselImgDto findById(Integer id){
        CounselImg counselImg = counselImgRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("not found:" + id));
        CounselImgDto counselImgDto = CounselImgDto.builder()
                .counselImgId(counselImg.getId())
                .imgUrl(counselImg.getImgUrl())
                .state(counselImg.getState())
                .counselId(counselImg.getCounselId().getId())
                .build();
        return counselImgDto;
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