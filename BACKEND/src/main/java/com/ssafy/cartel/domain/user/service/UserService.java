package com.ssafy.cartel.domain.user.service;

import com.ssafy.cartel.domain.user.dto.UserDto;
import com.ssafy.cartel.domain.user.entity.User;
import com.ssafy.cartel.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Transactional(readOnly = true)
@RequiredArgsConstructor //final , @notnull 붙은 필드의 생성자 추가
@Service //빈으로 등록
public class UserService {
    private final UserRepository userRepository;

    @Transactional
    public User save(UserDto userDto){
        return userRepository.save(userDto.toEntity());
    }

    public List<User> findAll(){
        return userRepository.findAll();
    }

    public Optional<User> findById(Integer id){
        return Optional.ofNullable(userRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("not found:" + id)));
    }

    @Transactional
    public void delete(Integer id){
        userRepository.deleteById(id);
    }

    @Transactional
    public User update(Integer id, UserDto userDto){
        User user = userRepository.findById(id)
                .orElseThrow(()-> new IllegalArgumentException("not found:" + id));

        user.update(userDto.getEmail(), userDto.getNickname(), userDto.getName(), userDto.getPhone());

        return user;
    }


}