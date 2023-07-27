import React, { ChangeEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import NavbarLogout from '../components/NavbarLogout'
import { LoginBtn } from '../components/LoginBtn'
import Input from '../components/Input'
import { NoneStyledLink } from '../styles/Custom'
import {
  FlexContainer,
  FlexContainerAlignStart,
  FlexContainerRow,
} from '../styles/MainStyle'
import Button from '../components/Button'

export const SignUp = () => {
  const [inputNicknameValue, setinputNicknameValue] = useState('')
  const [inputEmailValue, setinputEmailValue] = useState('')
  const [inputAuthNumValue, setinputAuthNumeValue] = useState('')
  const [inputPassValue, setinputPassValue] = useState('')
  const [inputPassCheckValue, setinputPassCheckValue] = useState('')
  const handleNicknameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setinputNicknameValue(event.target.value)
  }
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setinputEmailValue(event.target.value)
  }
  const handleAuthNumChange = (event: ChangeEvent<HTMLInputElement>) => {
    setinputAuthNumeValue(event.target.value)
  }
  const handlePassChange = (event: ChangeEvent<HTMLInputElement>) => {
    setinputPassValue(event.target.value)
  }
  const handlePassCheckChange = (event: ChangeEvent<HTMLInputElement>) => {
    setinputPassCheckValue(event.target.value)
  }

  const handleEmailClick = () => {
    alert('인증번호를 보냈습니다.')
  }
  const handleCheckClick = () => {
    alert('인증되었습니다.')
  }

  return (
    <div>
      <NavbarLogout />
      <FlexContainer>
        <LoginBtn />
        <FlexContainerAlignStart>
          <Input
            value={inputNicknameValue}
            onChange={handleNicknameChange}
            placeholder="닉네임"
            maxLength={20}
          />
          <FlexContainerRow>
            <Input
              value={inputEmailValue}
              onChange={handleEmailChange}
              placeholder="이메일"
              width="420px"
            />
            <Button
              border={{ radius: '0.625rem', borderColor: '#40BFFF' }}
              size={{ width: '100px', height: '35px' }}
              color={{ background: '#40BFFF', color: 'white' }}
              text="인증번호 전송"
              onClick={handleEmailClick}
            />
          </FlexContainerRow>
          <FlexContainerRow>
            <Input
              value={inputAuthNumValue}
              onChange={handleAuthNumChange}
              placeholder="인증번호"
              width="420px"
              type="password"
            />
            <Button
              border={{ radius: '0.625rem', borderColor: '#40BFFF' }}
              size={{ width: '100px', height: '35px' }}
              color={{ background: '#40BFFF', color: 'white' }}
              text="인증번호 확인"
              onClick={handleCheckClick}
            />
          </FlexContainerRow>
          <Input
            value={inputPassValue}
            onChange={handlePassChange}
            placeholder="비밀번호"
            type="password"
          />
          <Input
            value={inputPassCheckValue}
            onChange={handlePassCheckChange}
            placeholder="비밀번호확인"
            type="password"
          />
        </FlexContainerAlignStart>
        <NoneStyledLink to="/">
          이미 회원이신가요? 로그인하기&gt;
        </NoneStyledLink>
      </FlexContainer>
    </div>
  )
}
