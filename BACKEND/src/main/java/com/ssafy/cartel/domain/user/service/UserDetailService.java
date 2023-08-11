package com.ssafy.cartel.domain.user.service;


import com.ssafy.cartel.domain.user.entity.User;
import com.ssafy.cartel.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class UserDetailService implements UserDetailsService {

    private final UserRepository userRepository;

    @Override //이메일로 사용자 정보 가져오기
    public User loadUserByUsername(String email){
        return userRepository.findByEmail(email)
                .orElseThrow(()-> new IllegalArgumentException((email)));

    }
}

