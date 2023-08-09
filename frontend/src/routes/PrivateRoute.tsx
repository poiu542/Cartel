import React from 'react'
import { Navigate } from 'react-router-dom'

interface PrivateRouteProps {
  authenticated: number
  component: JSX.Element
}

// 로그인 햇는지 안했는지 체크
export const CheckLogin = ({
  authenticated,
  component: Component,
}: PrivateRouteProps) => {
  if (!authenticated) {
    window.alert('로그인이 필요한 서비스입니다.')
    return <Navigate to="/" />
  }

  return Component
}

// 상담사인지 체크
export const CheckCounselor = ({
  authenticated,
  component: Component,
}: PrivateRouteProps) => {
  if (authenticated !== 3) {
    window.alert('상담사인증이 필요한 서비스입니다.')
    return <Navigate to="/" />
  }

  return Component
}
