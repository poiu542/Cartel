import React, { ChangeEvent, useState } from 'react'
import NavbarLogin from '../components/NavbarLogin'
import Input from '../components/Input'
import { NoneStyledLink } from '../styles/Custom'
import {
  FlexContainer,
  FlexContainerAlignStart,
  FlexContainerRow,
} from '../styles/MainStyle'
import Button from '../components/Button'
import IconButton from '@mui/material/IconButton'

import {
  NormalLoginCheck,
  NormalLoginNoCheck,
  CounselorLoginNoCheck,
  CounselorLoginCheck,
} from '../styles/SignBtn'
import Modal from 'react-modal'
import StyledButton from '../styles/StyledButton'
import DeleteIcon from '@mui/icons-material/Delete'
import { ErrorMessage } from '../styles/ErrorMessage'

// import { userState } from '../recoil/atoms/userState'
// import { useRecoilState } from 'recoil'

export const SignUp = () => {
  const [inputNicknameValue, setinputNicknameValue] = useState('')
  const [inputEmailValue, setinputEmailValue] = useState('')
  const [inputAuthNumValue, setinputAuthNumeValue] = useState('')
  const [inputPassValue, setinputPassValue] = useState('')
  const [inputPassCheckValue, setinputPassCheckValue] = useState('')
  const [inputEducation, setinputEducation] = useState('')
  const [passwordCheck, setpasswordCheck] = useState(1)
  const [emailError, setEmailError] = useState<string>('')
  const [passwordError, setPasswordError] = useState<string>('')

  // 모달을 띄울 상태
  const [isModalOpen, setIsModalOpen] = useState(false)
  // 이력 저장할 State
  const [careers, setCareers] = useState<string[]>([''])

  // 인증 버튼 3개의 style을 하나로 묶기
  const buttonSize = { width: '130px', height: '37px' }

  // 버튼을 표시할 유저 타입을 설정하는 state.
  const [userType, setUserType] = useState(0) // 기본값은 0으로 설정.

  // 모달 띄우기
  const openCareerModal = () => {
    setIsModalOpen(true)
  }

  // 모달 닫기
  const closeCareerModal = () => {
    setIsModalOpen(false)
  }
  const validateEmail = (email: string) => {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  const validatePassword = (password: string) => {
    var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
    return re.test(password)
  }

  const handleNicknameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setinputNicknameValue(event.target.value)
  }

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setinputEmailValue(event.target.value)
    if (!validateEmail(event.target.value)) {
      setEmailError('유효한 이메일 주소를 입력해주세요.')
    } else {
      setEmailError('')
    }
  }
  const handleAuthNumChange = (event: ChangeEvent<HTMLInputElement>) => {
    setinputAuthNumeValue(event.target.value)
  }
  const handlePassChange = (event: ChangeEvent<HTMLInputElement>) => {
    setinputPassValue(event.target.value)
    if (!validatePassword(event.target.value)) {
      setPasswordError(
        '비밀번호는 8자 이상이며, 숫자, 대문자, 소문자를 모두 포함해야 합니다.',
      )
    } else {
      setPasswordError('')
      if (event.target.value === inputPassCheckValue) {
        setpasswordCheck(1)
      } else {
        setpasswordCheck(0)
      }
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

  // 이력 추가
  const addCareer = () => {
    setCareers([...careers, ''])
  }

  // 이력 삭제
  const deleteCareer = (index: number) => {
    setCareers(careers.filter((career, idx) => idx !== index))
  }

  // 이력 업데이트
  const updateCareer = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const updatedCareers = [...careers]
    updatedCareers[index] = event.target.value
    setCareers(updatedCareers)
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
  const handleProfileUpload = () => {
    alert('프로필 사진 올리기')
  }
  const handleCertificateUpload = () => {
    alert('자격증 사진 올리기')
  }
  const handleIdentUpload = () => {
    alert('주민등록증 사진 올리기')
  }

  // 일반 회원인지 상담사 회원인지
  const switchUserType = () => {
    setUserType(userType === 0 ? 1 : 0)
  }

  return (
    <div>
      <Modal isOpen={isModalOpen} onRequestClose={closeCareerModal}>
        <FlexContainer>
          <h1>이력</h1>
        </FlexContainer>
        <FlexContainerRow>
          <FlexContainer>
            {careers.map((career, index) => (
              <div key={index} style={{ paddingBottom: '30px' }}>
                <FlexContainerRow>
                  <input
                    type="text"
                    value={career}
                    onChange={(event) => updateCareer(index, event)}
                    style={{ width: '900px', borderBlockColor: '#40BFFF' }}
                  />
                  {/* <StyledButton color="gray" background="white">
                    <DeleteIcon />
                  </StyledButton> */}
                  <IconButton
                    aria-label="delete"
                    onClick={() => deleteCareer(index)}
                    style={{ scale: '1.5' }}
                  >
                    <DeleteIcon fontSize="inherit" />
                  </IconButton>
                </FlexContainerRow>
              </div>
            ))}
          </FlexContainer>
          <FlexContainerRow
            style={{
              position: 'fixed',
              top: '120px',
              right: '100px',
              zIndex: 1,
            }}
          >
            <StyledButton
              fontSize="14px"
              width="50px"
              height="30px"
              onClick={addCareer}
            >
              Add
            </StyledButton>
            &nbsp;
            <StyledButton
              fontSize="12px"
              width="50px"
              height="30px"
              onClick={closeCareerModal}
              background="#ef5c5c"
            >
              Close
            </StyledButton>
            &nbsp;
            <StyledButton
              fontSize="14px"
              width="50px"
              height="30px"
              background="#15e506"
              onClick={() => alert('저장되었습니다.')}
            >
              Save
            </StyledButton>
          </FlexContainerRow>
        </FlexContainerRow>
      </Modal>
      <NavbarLogin />
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
            placeholder={userType === 1 ? '이름' : '닉네임'}
            maxLength={20}
          />
          <FlexContainerRow style={{ width: '100%' }}>
            <div>
              <Input
                padding="0px"
                marginBottom="5px"
                value={inputEmailValue}
                onChange={handleEmailChange}
                placeholder="이메일"
                width="420px"
                maxLength={30}
              />
              <p
                style={{
                  fontSize: '1px',
                  margin: '0px 0px 10px 0px',
                  padding: '0px',
                }}
              >
                {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
              </p>
            </div>
            <Button
              border={{ radius: '0.625rem', borderColor: '#40BFFF' }}
              size={{ width: '100px', height: '35px' }}
              color={{ background: '#40BFFF', color: 'white' }}
              text="인증번호 전송"
              onClick={handleEmailClick}
            />
          </FlexContainerRow>
          <FlexContainerRow style={{ width: '100%' }}>
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
            padding="6px"
            marginBottom="5px"
          />
          <p
            style={{
              fontSize: '1px',
              margin: '0px 0px 10px 0px',
              padding: '0px',
            }}
          >
            {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
          </p>
          {userType === 1 ? (
            <>
              <Input
                value={inputEducation}
                onChange={handleEducation}
                placeholder="학력"
                type="text"
                maxLength={40}
              />
              <Button
                text="이력 작성하기"
                size={buttonSize}
                onClick={openCareerModal}
              ></Button>
              <br />
              <h3>상담사 인증하기</h3>
              <FlexContainerRow style={{ width: '100%' }}>
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
