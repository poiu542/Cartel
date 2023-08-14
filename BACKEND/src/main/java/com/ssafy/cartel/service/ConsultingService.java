package com.ssafy.cartel.service;

import com.ssafy.cartel.domain.Client;
import com.ssafy.cartel.domain.Consulting;
import com.ssafy.cartel.domain.Curriculum;
import com.ssafy.cartel.dto.ConsultingDto;
import com.ssafy.cartel.dto.ConsultingResDto;
import com.ssafy.cartel.repository.ClientRepository;
import com.ssafy.cartel.repository.ConsultingRepository;
import com.ssafy.cartel.repository.CurriculumRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Transactional(readOnly = true)
@RequiredArgsConstructor //final , @notnull 붙은 필드의 생성자 추가
@Service //빈으로 등록
@Slf4j // 로그
public class ConsultingService {
    private final ConsultingRepository consultingRepository;
    private final ClientRepository clientRepository;
    private final CurriculumRepository curriculumRepository;


    @Transactional
    public Consulting save(ConsultingDto consultingDto){
        Client client = clientRepository.findById(consultingDto.getClientId()).orElseThrow();
        Curriculum curriculum = curriculumRepository.findById(consultingDto.getCurriculumId()).orElseThrow();

        return consultingRepository.save(consultingDto.toEntity(client,curriculum));
    }

    public List<ConsultingResDto> findAll(){
        List<Consulting> consulting = consultingRepository.findAll();
        List<ConsultingResDto> consultingResDtoList = new ArrayList<>();

        for (int i = 0; i < consulting.size(); i++) {
            ConsultingResDto consultingResDto = ConsultingResDto.builder()
                    .counselId(consulting.get(i).getCurriculumId().getCounselId().getId())
                    .counselTitle(consulting.get(i).getCurriculumId().getCounselId().getTitle())
                    .consultingId(consulting.get(i).getId())
                    .consulting(consulting.get(i).getConsulting())
                    .consultingDate(consulting.get(i).getDate().toLocalDate())
                    .consultingState(consulting.get(i).getState())
                    .userId(consulting.get(i).getClientId().getUserId().getId())
                    .userNickname(consulting.get(i).getClientId().getUserId().getNickname())
                    .userEmail(consulting.get(i).getClientId().getUserId().getEmail())
                    .clientId(consulting.get(i).getClientId().getId())
                    .build();

            consultingResDtoList.add(consultingResDto);
        }

        return consultingResDtoList;
    }

    public ConsultingResDto findById(Integer id){
        Consulting consulting = consultingRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("not found:" + id));
        ConsultingResDto consultingResDto = ConsultingResDto.builder()
                .counselId(consulting.getCurriculumId().getCounselId().getId())
                .counselTitle(consulting.getCurriculumId().getCounselId().getTitle())
                .consultingId(consulting.getId())
                .consulting(consulting.getConsulting())
                .consultingDate(consulting.getDate().toLocalDate())
                .consultingState(consulting.getState())
                .userId(consulting.getClientId().getUserId().getId())
                .userNickname(consulting.getClientId().getUserId().getNickname())
                .userEmail(consulting.getClientId().getUserId().getEmail())
                .clientId(consulting.getClientId().getId())
                .build();
        return consultingResDto;
    }

//    @Transactional
//    public Consulting update(Integer id, ConsultingDto consultingDto){
//        Consulting consulting = consultingRepository.findById(id)
//                .orElseThrow(()-> new IllegalArgumentException("not found:" + id));
//
//        consulting.update(consultingDto.getConsulting(),consultingDto.getDate(),consultingDto.getState());
//        return consulting;
//    }

//    @Transactional
//    public void delete(Integer id){
//        consultingRepository.deleteById(id);

//    }


}