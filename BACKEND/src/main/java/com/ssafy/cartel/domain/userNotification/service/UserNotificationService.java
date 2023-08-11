package com.ssafy.cartel.domain.userNotification.service;

import com.ssafy.cartel.domain.userNotification.repository.UserNotificationRepository;
import com.ssafy.cartel.domain.userNotification.entity.UserNotification;
import com.ssafy.cartel.domain.userNotification.dto.UserNotificationDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Transactional(readOnly = true)
@RequiredArgsConstructor //final , @notnull 붙은 필드의 생성자 추가
@Service //빈으로 등록
public class UserNotificationService {
    private final UserNotificationRepository userNotificationRepository;

    @Transactional
    public UserNotification save(UserNotificationDto userNotificationDto){
        return userNotificationRepository.save(userNotificationDto.toEntity());
    }

    public List<UserNotification> findAll(){
        return userNotificationRepository.findAll();
    }

    public Optional<UserNotification> findById(Integer id){
        return Optional.ofNullable(userNotificationRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("not found:" + id)));
    }

    @Transactional
    public void delete(Integer id){
        userNotificationRepository.deleteById(id);
    }

    @Transactional
    public UserNotification update(Integer id, UserNotificationDto userNotificationDto){
        UserNotification userNotification = userNotificationRepository.findById(id)
                .orElseThrow(()-> new IllegalArgumentException("not found:" + id));

        userNotification.update(userNotificationDto.getCliendId(),userNotificationDto.getNotificationId());
        return userNotification;
    }


}