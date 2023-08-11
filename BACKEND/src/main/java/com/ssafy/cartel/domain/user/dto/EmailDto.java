package com.ssafy.cartel.domain.user.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;


@Data
public class EmailDto {
    @Email
    @NotBlank(message = "이메일을 입력해주세요.")
    private String email;
}
