package com.ssafy.cartel.domain.consulting.service;

import com.ssafy.cartel.domain.client.entity.Client;
import com.ssafy.cartel.domain.client.repository.ClientRepository;
import com.ssafy.cartel.domain.consulting.dto.ConsultingResDto;
import com.ssafy.cartel.domain.consulting.entity.Consulting;
import com.ssafy.cartel.domain.consulting.dto.ConsultingDto;
import com.ssafy.cartel.domain.consulting.repository.ConsultingRepository;
import com.ssafy.cartel.domain.counsel.dto.CounselDto;
import com.ssafy.cartel.domain.counsel.entity.Counsel;
import com.ssafy.cartel.domain.counsel.repository.CounselRepository;
import com.ssafy.cartel.domain.curriculum.entity.Curriculum;
import com.ssafy.cartel.domain.curriculum.repository.CurriculumRepository;
import com.ssafy.cartel.domain.user.repository.UserRepository;
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
    private final CounselRepository counselRepository;
    private final UserRepository userRepository;


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
//                    .counselId(consulting.get(i).getId())
//                    .counselTitle(consulting.get(i).get)
                    .build();

            consultingResDtoList.add(consultingResDto);
        }

        return consultingResDtoList;
    }

    public ConsultingResDto findById(Integer id){
        //Consulting consulting = consultingRepository.findById(id).orElseThrow();
        Consulting consulting1 = consultingRepository.selectConsulting(id);

        log.info(String.valueOf(consulting1.getClientId().getUserId().getId()));
        consulting1.getId();
        consulting1.getClientId().getUserId().getNickname();
        consulting1.getCurriculumId().getCounselId().getId();
//        ConsultingResDto consultingResDto = ConsultingResDto.builder()
//
//                .build();
        //return consultingResDto;
        return null;
    }

//    @Transactional
//    public void delete(Integer id){
//        consultingRepository.deleteById(id);
//    }

//    @Transactional
//    public Consulting update(Integer id, ConsultingDto consultingDto){
//        Consulting consulting = consultingRepository.findById(id)
//                .orElseThrow(()-> new IllegalArgumentException("not found:" + id));
//
//consulting.update(consultingDto.getConsulting(),consultingDto.getDate(),consultingDto.getState());
//        return consulting;
//    }


}