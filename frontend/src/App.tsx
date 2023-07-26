import React from 'react'
import './App.css'
import Button from './components/Button'
import NavbarLogin from './components/NavbarLogin'
import NavbarLogout from './components/NavbarLogout'
import CounselorCard from './components/CounselorCard'
import { CurriculumBox } from './components/CurriculumBox'

function App(): React.ReactElement {
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
        startTime="10:30"
        endTime="12:30"
        selectDay={['월', '목']}
        grade={4.8}
      />
      <h1>커리큘럼 박스</h1>
      <CurriculumBox />
    </div>
  )
}

export default App
