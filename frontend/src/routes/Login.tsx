import React from 'react'
import NavbarLogout from '../components/NavbarLogout'

const handleKakaoClick = () => {
  alert('카카오 로그인')
}
const handleLogin = () => {
  alert('로그인 로직 짜야함')
}

export const Login = () => {
  return (
    <div className="login">
      <NavbarLogout />
      <div className="login-group">
        <div>
          <div className="normal-login"></div>
          <div className="counseller-login"></div>
          <h1 className="text-1">일반 로그인</h1>
          <div className="text-2">상담사 로그인</div>
        </div>
      </div>
    </div>
  )
}
