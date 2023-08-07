package com.ssafy.cartel.service;

import com.ssafy.cartel.domain.User;
import com.ssafy.cartel.dto.UserDto;
import com.ssafy.cartel.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public Integer save(UserDto userDto){
        return userRepository.save(User.builder()
                .email(userDto.getEmail())
                .nickname(userDto.getNickname())
                .password(bCryptPasswordEncoder.encode(userDto.getPassword()))
                .build()).getId();
    }
}
