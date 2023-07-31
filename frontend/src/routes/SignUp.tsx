import React, { ChangeEvent, useState } from 'react'
import NavbarLogout from '../components/NavbarLogout'
import Input from '../components/Input'
import { NoneStyledLink } from '../styles/Custom'
import {
  FlexContainer,
  FlexContainerAlignStart,
  FlexContainerRow,
} from '../styles/MainStyle'
import Button from '../components/Button'
import {
  NormalLoginCheck,
  NormalLoginNoCheck,
  CounselorLoginNoCheck,
  CounselorLoginCheck,
} from '../styles/SignBtn'

export const SignUp = () => {
  const [inputNicknameValue, setinputNicknameValue] = useState('')
  const [inputEmailValue, setinputEmailValue] = useState('')
  const [inputAuthNumValue, setinputAuthNumeValue] = useState('')
  const [inputPassValue, setinputPassValue] = useState('')
  const [inputPassCheckValue, setinputPassCheckValue] = useState('')
  const [inputEducation, setinputEducation] = useState('')
  const [passwordCheck, setpasswordCheck] = useState(1)

  // 인증 버튼 3개의 style을 하나로 묶기
  const buttonSize = { width: '120px', height: '35px' }

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
    if (event.target.value === inputPassCheckValue) {
      setpasswordCheck(1)
    } else {
      setpasswordCheck(0)
    }
  }
  const handlePassCheckChange = (event: ChangeEvent<HTMLInputElement>) => {
    setinputPassCheckValue(event.target.value)
    if (event.target.value === inputPassValue) {
      setpasswordCheck(1)
    } else {
      setpasswordCheck(0)
    }
  }
  const handleEducation = (event: ChangeEvent<HTMLInputElement>) => {
    setinputEducation(event.target.value)
  }

  const handleEmailClick = () => {
    alert('인증번호 보내는 로직 짜야함')
  }
  const handleCheckClick = () => {
    alert('인증되었습니다 로직 짜야함')
  }
  const handleSignUp = () => {
    alert('회원가입 로직 짜야함')
  }
  const handleHistory = () => {
    alert('이력 작성하기')
  }
  const handleProfileUpload = () => {
    alert('프로필 사진 올리기')
  }
  const handleCertificateUpload = () => {
    alert('자격증 사진 올리기')
  }
  const handleIdentUpload = () => {
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
        {userType === 0 ? (
          <>
            <span>
              <NormalLoginCheck>일반 회원가입</NormalLoginCheck>
              <CounselorLoginNoCheck onClick={switchUserType}>
                상담사 회원가입
              </CounselorLoginNoCheck>
            </span>
          </>
        ) : (
          <span>
            <NormalLoginNoCheck onClick={switchUserType}>
              일반 회원가입
            </NormalLoginNoCheck>
            <CounselorLoginCheck>상담사 회원가입</CounselorLoginCheck>
          </span>
        )}
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
          {passwordCheck === 0 ? <p>비번 확인 해주세요</p> : null}
          {userType === 1 ? (
            <>
              <Input
                value={inputEducation}
                onChange={handleEducation}
                placeholder="학력"
                type="text"
              />
              <Button
                text="이력 작성하기"
                size={{ width: '100px', height: '35px' }}
                onClick={handleHistory}
              ></Button>
              <h3>상담사 인증하기</h3>
              <FlexContainerRow>
                <Button
                  text="프로필 사진"
                  size={buttonSize}
                  onClick={handleProfileUpload}
                ></Button>
                <Button
                  text="자격증 사진"
                  size={buttonSize}
                  onClick={handleCertificateUpload}
                ></Button>
                <Button
                  text="주민등록증 사진"
                  size={buttonSize}
                  onClick={handleIdentUpload}
                ></Button>
              </FlexContainerRow>
            </>
          ) : null}
        </FlexContainerAlignStart>

        <NoneStyledLink to="/login">
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
