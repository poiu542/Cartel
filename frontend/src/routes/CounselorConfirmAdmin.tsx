import React from 'react'
import StyledButton from './../styles/StyledButton'

export const CounselorConfirmAdmin = () => {
  return (
    <div>
      <h1>상담사 회원가입 심사 페이지</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{ textAlign: 'center', margin: '10px' }}>
          <h2>회원 자격증</h2>
          <img
            src="/image/seulyoon.jpg"
            alt=""
            style={{ width: '200px', height: '200px' }}
          />
        </div>
        <div style={{ textAlign: 'center', margin: '10px' }}>
          <h2>회원 주민등록증</h2>
          <img
            src="/image/cat.png"
            alt=""
            style={{ width: '200px', height: '200px' }}
          />
        </div>
        <div style={{ textAlign: 'center', margin: '10px' }}>
          <h2>회원 프로필사진</h2>
          <img
            src="/image/dog.png"
            alt=""
            style={{ width: '200px', height: '200px' }}
          />
        </div>
        <StyledButton primary>승인</StyledButton>
        <StyledButton red>반려</StyledButton>
      </div>
    </div>
  )
}
