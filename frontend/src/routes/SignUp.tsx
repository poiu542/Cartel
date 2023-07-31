import React, { ChangeEvent, useState } from 'react'
import NavbarLogout from '../components/NavbarLogout'
import { LoginBtn } from '../components/LoginBtn'
import { CounSelorLoginBtn } from '../components/CounselorLoginBtn'
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

  // 버튼을 표시할 유저 타입을 설정하는 state.
  const [userType, setUserType] = useState(0) // 기본값은 0으로 설정.

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
  const handleSignUp = () => {
    alert('회원가입 로직 짜야함')
  }

  // 일반 회원인지 상담사 회원인지
  const switchUserType = () => {
    setUserType(userType === 0 ? 1 : 0)
  }

  return (
    <div>
      <NavbarLogout />
      <FlexContainer>
        {userType === 0 ? <LoginBtn /> : <CounSelorLoginBtn />}
        <button onClick={switchUserType}>사용자 타입 변경</button>
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
        <Button
          onClick={handleSignUp}
          text="회원가입"
          size={{ width: '700px', height: '50px' }}
        ></Button>
      </FlexContainer>
    </div>
  )
}
