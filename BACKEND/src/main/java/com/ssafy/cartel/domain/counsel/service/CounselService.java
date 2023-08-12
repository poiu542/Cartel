package com.ssafy.cartel.domain.counsel.service;

import com.ssafy.cartel.domain.counsel.entity.Counsel;
import com.ssafy.cartel.domain.counsel.dto.CounselDto;
import com.ssafy.cartel.domain.counsel.repository.CounselRepository;
import com.ssafy.cartel.domain.counselor.entity.Counselor;
import com.ssafy.cartel.domain.counselor.repository.CounselorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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

    public List<Counsel> findAll(){
        return counselRepository.findAll();
    }

    public Counsel findById(Integer id){
        return counselRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("not found:" + id));
    }

    @Transactional
    public void delete(Integer id){
        counselRepository.deleteById(id);
    }

    @Transactional
    public Counsel update(Integer id, CounselDto counselDto){
        Counsel counsel = counselRepository.findById(id)
                .orElseThrow(()-> new IllegalArgumentException("not found:" + id));

//        counsel.update();

        return counsel;
    }


}