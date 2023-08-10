package com.ssafy.cartel.service.client;

import com.ssafy.cartel.domain.Client;
import com.ssafy.cartel.domain.Counsel;
import com.ssafy.cartel.domain.User;
import com.ssafy.cartel.dto.client.ClientDto;
import com.ssafy.cartel.repository.client.ClientRepository;
import com.ssafy.cartel.repository.counsel.CounselRepository;
import com.ssafy.cartel.repository.user.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

@Service
@Slf4j
@RequiredArgsConstructor //final , @notnull 붙은 필드의 생성자 추가
@Transactional
public class ClientService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private CounselRepository counselRepository;

    public Integer checkType(@PathVariable Integer userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("해당 user가 존재하지 않습니다."));
        return user.getType();
    }

    public Client save(ClientDto clientDto){
        User user = userRepository.findById(clientDto.getUserId())
                .orElseThrow(()-> new IllegalArgumentException("해당 user가 존재하지 않습니다."));
        Counsel counsel = counselRepository.findById(clientDto.getCounselId())
                .orElseThrow(()-> new IllegalArgumentException("해당 counsel이 존재하지 않습니다."));
        return clientRepository.save(clientDto.toEntity(user, counsel));
    }
}
