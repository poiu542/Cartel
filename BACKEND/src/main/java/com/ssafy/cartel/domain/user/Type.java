package com.ssafy.cartel.domain.user;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum Type {

    USER("ROLE_USER"), CLIENT("ROLE_CLIENT"), COUNSELOR("ROLE_COUNSELOR"), ADMIN("ROLE_ADMIN");

    private final String key;

}
