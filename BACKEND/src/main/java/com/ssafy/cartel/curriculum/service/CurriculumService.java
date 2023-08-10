package com.ssafy.cartel.curriculum.service;

import com.ssafy.cartel.counsel.dto.CounselDto;
import com.ssafy.cartel.counsel.entity.Counsel;
import com.ssafy.cartel.counsel.repository.CounselRepository;
import com.ssafy.cartel.counselor.entity.Counselor;
import com.ssafy.cartel.counselor.repository.CounselorRepository;
import com.ssafy.cartel.curriculum.dto.CurriculumDto;
import com.ssafy.cartel.curriculum.entity.Curriculum;
import com.ssafy.cartel.curriculum.repository.CurriculumRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional(readOnly = true)
@RequiredArgsConstructor //final , @notnull 붙은 필드의 생성자 추가
@Service //빈으로 등록
public class CurriculumService {
    private final CurriculumRepository curriculumRepository;
    private final CounselRepository counselRepository;

    @Transactional
    public Curriculum save(CurriculumDto curriculumDto){
        Counsel counsel = counselRepository.findById(curriculumDto.getCounselId()).orElseThrow();
        return curriculumRepository.save(curriculumDto.toEntity(counsel));
    }

    public List<Curriculum> findAll(){
        return curriculumRepository.findAll();
    }

    public Curriculum findById(Integer id){
        return curriculumRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("not found:" + id));
    }

    @Transactional
    public Curriculum update(Integer id, CurriculumDto curriculumDto){
        Curriculum curriculum = curriculumRepository.findById(id)
                .orElseThrow(()-> new IllegalArgumentException("not found:" + id));

        curriculum.update(curriculumDto.getTitle(),curriculumDto.getContent());
        return curriculum;
    }

    //삭제
    @Transactional
    public void updateState(Integer id, CounselDto counselDto){
        Counsel counsel = counselRepository.findById(id)
                .orElseThrow(()-> new IllegalArgumentException("not found:" + id));

        counsel.updateState(-1);
    }


}