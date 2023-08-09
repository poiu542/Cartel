package com.ssafy.cartel.consulting.service;

import com.ssafy.cartel.consulting.entity.Consulting;
import com.ssafy.cartel.consulting.dto.ConsultingDto;
import com.ssafy.cartel.consulting.repository.ConsultingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Transactional(readOnly = true)
@RequiredArgsConstructor //final , @notnull 붙은 필드의 생성자 추가
@Service //빈으로 등록
public class ConsultingService {
    private final ConsultingRepository consultingRepository;

    @Transactional
    public Consulting save(ConsultingDto consultingDto){
        return consultingRepository.save(consultingDto.toEntity());
    }

    public List<Consulting> findAll(){
        return consultingRepository.findAll();
    }

    public Optional<Consulting> findById(Integer id){
        return Optional.ofNullable(consultingRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("not found:" + id)));
    }

    @Transactional
    public void delete(Integer id){
        consultingRepository.deleteById(id);
    }

    @Transactional
    public Consulting update(Integer id, ConsultingDto consultingDto){
        Consulting consulting = consultingRepository.findById(id)
                .orElseThrow(()-> new IllegalArgumentException("not found:" + id));

consulting.update(consultingDto.getConsulting(),consultingDto.getDate(),consultingDto.getState());
        return consulting;
    }


}