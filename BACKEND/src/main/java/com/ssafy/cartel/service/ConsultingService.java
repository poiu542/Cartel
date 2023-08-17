package com.ssafy.cartel.service;

import com.ssafy.cartel.domain.Client;
import com.ssafy.cartel.domain.Consulting;
import com.ssafy.cartel.domain.Curriculum;
import com.ssafy.cartel.domain.User;
import com.ssafy.cartel.dto.ConsultingDto;
import com.ssafy.cartel.dto.ConsultingReq;
import com.ssafy.cartel.dto.ConsultingResDto;
import com.ssafy.cartel.dto.ReviewDto;
import com.ssafy.cartel.repository.ClientRepository;
import com.ssafy.cartel.repository.ConsultingRepository;
import com.ssafy.cartel.repository.CurriculumRepository;
import com.ssafy.cartel.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

//@Transactional(readOnly = true)
@RequiredArgsConstructor //final , @notnull 붙은 필드의 생성자 추가
@Service //빈으로 등록
@Slf4j // 로그
public class ConsultingService {
    private final ConsultingRepository consultingRepository;
    private final ClientRepository clientRepository;
    private final CurriculumRepository curriculumRepository;
    private final UserRepository userRepository;

    public Consulting registConsulting(ConsultingReq req, Curriculum curriculum) {
        User user = userRepository.findByNickname(req.getNickname())
                .orElseThrow(() -> new IllegalArgumentException("unexpexted nickneme"));

        Client client = clientRepository.findByUserId(user)
                .orElseThrow(() -> new IllegalArgumentException("unexpexted user"));

        Consulting consulting = consultingRepository.save(Consulting.builder()
                .consulting(req.getContent())
                .date(LocalDateTime.now())
                .state(0)
                .curriculumId(curriculum)
                .clientId(client)
                .build());
        return consulting;
    }

    public void registReview(ReviewDto reviewDto) {
        Curriculum curriculum = curriculumRepository.findById(reviewDto.getCurriculumId())
                .orElseThrow(() -> new IllegalArgumentException("not found curriculum"));
        User user = userRepository.findByNickname(reviewDto.getNickname())
                .orElseThrow(() -> new IllegalArgumentException("unexpexted nickneme"));
        Client client = clientRepository.findByUserId(user)
                .orElseThrow(() -> new IllegalArgumentException("unexpexted user"));

        consultingRepository.save(Consulting.builder()
                .consulting(reviewDto.getContent())
                .date(LocalDateTime.now())
                .state(1)
                .curriculumId(curriculum)
                .clientId(client)
                .build());
    }


//    @Transactional
//    public Consulting save(ConsultingDto consultingDto){
//        Client client = clientRepository.findById(consultingDto.getClientId()).orElseThrow();
//        Curriculum curriculum = curriculumRepository.findById(consultingDto.getCurriculumId()).orElseThrow();
//
//        return consultingRepository.save(consultingDto.toEntity(client,curriculum));
//    }
//
//    public List<ConsultingResDto> findAll(){
//        List<Consulting> consulting = consultingRepository.findAll();
//        List<ConsultingResDto> consultingResDtoList = new ArrayList<>();
//
//        for (int i = 0; i < consulting.size(); i++) {
//            ConsultingResDto consultingResDto = ConsultingResDto.builder()
//                    .counselId(consulting.get(i).getCurriculumId().getCounselId().getId())
//                    .counselTitle(consulting.get(i).getCurriculumId().getCounselId().getTitle())
//                    .consultingId(consulting.get(i).getId())
//                    .consulting(consulting.get(i).getConsulting())
//                    .consultingDate(consulting.get(i).getDate().toLocalDate())
//                    .consultingState(consulting.get(i).getState())
//                    .userId(consulting.get(i).getClientId().getUserId().getId())
//                    .userNickname(consulting.get(i).getClientId().getUserId().getNickname())
//                    .userEmail(consulting.get(i).getClientId().getUserId().getEmail())
//                    .clientId(consulting.get(i).getClientId().getId())
//                    .build();
//
//            consultingResDtoList.add(consultingResDto);
//        }
//        return consultingResDtoList;
//    }

    public ConsultingResDto findConsulting(Integer counselId) {
        Consulting consulting = consultingRepository.findById(counselId)
                .orElseThrow(() -> new IllegalArgumentException("not found : " + counselId));

//        User user = userRepository.findById(consulting.getClientId().getUserId().getId())
//                .orElseThrow(() -> new IllegalArgumentException("not found : " + consulting.getClientId().getUserId().getId()));

        ConsultingResDto consultingResDto = ConsultingResDto.builder()
                .consulting(consulting.getConsulting())
                .consultingDate(consulting.getDate().toLocalDate())
                .userNickname(consulting.getClientId().getUserId().getNickname())
                .build();
        return consultingResDto;

    }

    public ConsultingResDto findReview(Integer clientId) {
        Consulting consulting = consultingRepository.findById(clientId)
                .orElseThrow(() -> new IllegalArgumentException("not found : " + clientId));

//        User user = userRepository.findById(consulting.getClientId().getUserId().getId())
//                .orElseThrow(() -> new IllegalArgumentException("not found : " + consulting.getClientId().getUserId().getId()));

        ConsultingResDto consultingResDto = ConsultingResDto.builder()
                .consulting(consulting.getConsulting())
                .consultingDate(consulting.getDate().toLocalDate())
                .userNickname(consulting.getClientId().getUserId().getNickname())
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