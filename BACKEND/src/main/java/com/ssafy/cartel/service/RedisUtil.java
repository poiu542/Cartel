package com.ssafy.cartel.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.stereotype.Service;

import java.time.Duration;

@Service
@RequiredArgsConstructor
public class RedisUtil {
    private final StringRedisTemplate redisTemplate;

    // key를 통해 value 반환
    public String getData(String key){
        ValueOperations<String, String> valueOperations = redisTemplate.opsForValue();
        return valueOperations.get(key);
    }

    // {key, value} 구조로 저장
    public void existData(String key, String value){
        ValueOperations<String, String> valueOperations = redisTemplate.opsForValue();
        valueOperations.set(key, value);
    }

    // 유효시간 동안만 {key, value} 저장
    public void setDataExpire(String key, String value, long duration){
        ValueOperations<String, String> valueOperations = redisTemplate.opsForValue();
        Duration expireDuration = Duration.ofSeconds(duration);
        valueOperations.set(key, value, expireDuration);
    }


    // 삭제
    public void deleteDate(String key){
        redisTemplate.delete(key);
    }
}
