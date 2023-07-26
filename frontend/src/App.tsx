import React, { ChangeEvent, useState } from 'react'
import './App.css'
import Button from './components/Button'
import NavbarLogin from './components/NavbarLogin'
import NavbarLogout from './components/NavbarLogout'
import CounselorCard from './components/CounselorCard'
import CounselCard from './components/CounselCard'
import Input from './components/Input'
import Table from './components/Table'
import Carousel from './components/Carousel'
import ArticleBar from './components/ArticleBar'
import Footer from './components/Footer'

function App(): React.ReactElement {
  const [inputValue, setInputValue] = useState('')
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleClick = () => {
    alert('버튼클릭')
  }
  return (
    <div className="App">
      <h1>버튼</h1>
      <Button
        border={{ radius: '0.625rem', borderColor: '#40BFFF' }}
        size={{ width: '100px', height: '100px' }}
        color={{ background: '#40BFFF', color: 'white' }}
        text="버튼"
        onClick={handleClick}
      />
      <h1>Navbar(로그인)</h1>
      <NavbarLogin />
      <h1>Navbar(로그아웃)</h1>
      <NavbarLogout />
      <h1>상담사 카드</h1>
      <CounselorCard
        name="석민혁"
        grade={4.8}
        gradeCount={51}
        introduce="족구왕이 될 사나이"
      />
      <h1>상담 카드</h1>
      <CounselCard
        name="석민혁"
        grade={4.8}
        gradeCount={51}
        startTime="10:00"
        endTime="12:30"
        title="족구하자"
        minParticipantCount={4}
        maxParticipantCount={12}
        sessionCount={16}
        price={39000}
      />
      <div>
        <h1>Input</h1>
        <Input
          value={inputValue}
          onChange={handleInputChange}
          placeholder="이메일"
        />
        <p>입력한: {inputValue}</p>
      </div>
      <div style={{ padding: '100px' }}>
        <Table></Table>
      </div>
      <div>
        <Carousel></Carousel>
      </div>
      <h1>게시판 상단 바</h1>
      <ArticleBar name="자유게시판" />

      <h1>Footer</h1>
      <Footer />
    </div>
  )
}

export default App
