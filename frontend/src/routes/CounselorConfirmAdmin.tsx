import React from 'react'
import StyledButton from './../styles/StyledButton'
import axios from 'axios'
export const CounselorConfirmAdmin = () => {
  const counselorfail = (counselor: any) => {
    axios.put('http;~~~', counselor)
  }
  const counselorpass = (counselor: any) => {
    axios.put('http:~~', counselor)
  }
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
        <button onClick={counselorpass}>승인</button>
        <br />
        <br />
        <button onClick={counselorfail}>반려</button>
      </div>
    </div>
  )
}
