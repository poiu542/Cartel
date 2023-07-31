import React from 'react'
import NavbarLogin from './../components/NavbarLogout'
import ArticleBar from './../components/ArticleBar'

export const NoticeDetail = () => {
  return (
    <>
      <NavbarLogin />
      <ArticleBar name="공지사항" />
      <div
        style={{
          borderBottom: '1px solid gray',
          width: '100%',
          alignItems: 'center',
        }}
      >
        <h1 style={{ marginLeft: '50px' }}>오늘 금약 25일째....</h1>
        <div style={{ marginBottom: '10px', marginLeft: '50px' }}>
          작성자<span style={{ marginLeft: '30px' }}>작성날짜</span>
          <span style={{ marginLeft: '30px' }}>레벨</span>
        </div>
      </div>
      <div style={{ marginLeft: '40px', marginTop: '40px' }}>
        <img
          style={{
            width: '300px',
            height: '300px',
          }}
          src={process.env.PUBLIC_URL + '/image/seulyoon.jpg'}
          alt="설윤"
        />
        <p>
          펜타닐, 메스암페타민, 마리화나 등등 온갖마약을 하고 살았는데 이번엔
          제대로 끊어보려고 자조모임 하고있습니다. 모두 화이팅!{' '}
        </p>
        <div></div>
      </div>
    </>
  )
}
