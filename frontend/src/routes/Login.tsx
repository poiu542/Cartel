import React, { ChangeEvent, useState } from 'react'
import NavbarLogout from '../components/NavbarLogout'
import { styled } from 'styled-components'
import Input from '../components/Input'
import {
  FlexContainer,
  FlexContainerAlignStart,
  FlexContainerRow,
} from '../styles/MainStyle'
import Button from '../components/Button'
import {
  CounselorLoginCheck,
  CounselorLoginNoCheck,
  NormalLoginCheck,
  NormalLoginNoCheck,
} from '../styles/SignBtn'

// const LoginTab = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   align-item: center;
//   padding: 50px;
//   max-width: 650px;
//   height: 80px;
//   margin: 0 auto;

//   > div {
//     width: 50%;
//     text-align: center;
//     font-size: 2.3rem;
//     border-bottom: 3px solid #40bfff;
//     cursor: pointer;

//     &.active {
//       border-top: 3px solid #40bfff;
//       border-right: 2px solid #40bfff;
//       border-left: 3px solid #40bfff;
//       border-bottom: 0;
//     }
//   }
// `

// const LoginTabList = [
//   {
//     id: 0,
//     name: '일반 로그인',
//   },
//   {
//     id: 1,
//     name: '상담사 로그인',
//   },
// ]

export const Login = () => {
  const [userType, setUserType] = useState(0)
  const [inputEmailValue, setinputEmailValue] = useState('')
  const [inputPassValue, setinputPassValue] = useState('')
  const [passwordCheck, setpasswordCheck] = useState(1)
  const [inputPassCheckValue, setinputPassCheckValue] = useState('')

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setinputEmailValue(event.target.value)
  }
  const handlePassChange = (event: ChangeEvent<HTMLInputElement>) => {
    setinputPassValue(event.target.value)
    if (event.target.value === inputPassCheckValue) {
      setpasswordCheck(1)
    } else {
      setpasswordCheck(0)
    }
  }
  const handleLogIn = () => {
    alert('로그인')
  }
  const handleKakaoLogIn = () => {
    alert('카카오 로그인')
  }

  // 일반 회원인지 상담사 회원인지
  const switchUserType = () => {
    setUserType(userType === 0 ? 1 : 0)
  }

  return (
    <section>
      <NavbarLogout />

      {/* <LoginTab>
        {LoginTabList.map((tabItem) => (
          <div
            className={userType === tabItem.id ? 'active' : undefined}
            onClick={() => setUserType(tabItem.id)}
          >
            {tabItem.name}
          </div>
        ))}
      </LoginTab> */}
      <FlexContainer>
        {userType === 0 ? (
          <>
            <span>
              <NormalLoginCheck>일반 로그인</NormalLoginCheck>
              <CounselorLoginNoCheck onClick={switchUserType}>
                상담사 로그인
              </CounselorLoginNoCheck>
            </span>
          </>
        ) : (
          <span>
            <NormalLoginNoCheck onClick={switchUserType}>
              일반 로그인
            </NormalLoginNoCheck>
            <CounselorLoginCheck>상담사 로그인</CounselorLoginCheck>
          </span>
        )}
        <FlexContainerAlignStart>
          <FlexContainerRow>
            <Input
              value={inputEmailValue}
              onChange={handleEmailChange}
              placeholder="이메일"
            />
          </FlexContainerRow>
          <Input
            value={inputPassValue}
            onChange={handlePassChange}
            placeholder="비밀번호"
            type="password"
          />
        </FlexContainerAlignStart>
        <Button
          onClick={handleLogIn}
          text="로그인"
          size={{ width: '570px', height: '50px' }}
        ></Button>
        <div>
          <h1></h1>
        </div>
        <Button
          color={{ background: '#FFF50E', color: 'black' }}
          onClick={handleKakaoLogIn}
          text="Kakao 로그인"
          size={{ width: '570px', height: '50px' }}
        ></Button>
      </FlexContainer>
    </section>
  )
}
