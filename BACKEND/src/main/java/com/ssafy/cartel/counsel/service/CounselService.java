package com.ssafy.cartel.counsel.service;

import com.ssafy.cartel.counsel.entity.Counsel;
import com.ssafy.cartel.counsel.dto.CounselDto;
import com.ssafy.cartel.counsel.repository.CounselRepository;
import com.ssafy.cartel.counselor.entity.Counselor;
import com.ssafy.cartel.counselor.repository.CounselorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

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