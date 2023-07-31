import React, { useState } from 'react'
import NavbarLogout from '../components/NavbarLogout'
import { styled } from 'styled-components'

const LoginTab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-item: center;
  padding: 50px;
  max-width: 650px;
  height: 80px;
  margin: 0 auto;

  > div {
    width: 50%;
    text-align: center;
    font-size: 2.3rem;
    border-bottom: 3px solid #40bfff;
    cursor: pointer;

    &.active {
      border-top: 3px solid #40bfff;
      border-right: 2px solid #40bfff;
      border-left: 3px solid #40bfff;
      border-bottom: 0;
    }
  }
`

const LoginTabList = [
  {
    id: 0,
    name: '일반 로그인',
  },
  {
    id: 1,
    name: '상담사 로그인',
  },
]

export const Login = () => {
  const [userType, setUserType] = useState(0)

  return (
    <section>
      <NavbarLogout />
      <LoginTab>
        {LoginTabList.map((tabItem) => (
          <div
            className={userType === tabItem.id ? 'active' : undefined}
            onClick={() => setUserType(tabItem.id)}
          >
            {tabItem.name}
          </div>
        ))}
      </LoginTab>
    </section>
  )
}
