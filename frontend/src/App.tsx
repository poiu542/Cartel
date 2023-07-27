import React, { ChangeEvent, useState } from 'react'
import './App.css'
import Button from './components/Button'
import NavbarLogin from './components/NavbarLogin'
import NavbarLogout from './components/NavbarLogout'
import CounselorCard from './components/CounselorCard'
import { CurriculumBox } from './components/CurriculumBox'
import Input from './components/Input'
import Table from './components/Table'
import Comment from './components/Comment'
import ArticleBar from './components/ArticleBar'
import CounselingBar from './components/CounselingBar'
import Footer from './components/Footer'
import MicButton from './components/MicButton'
import CameraButton from './components/CameraButton'
import UserDataBox from './components/UserDataBox'
import CounselorDataBox from './components/CounselorDataBox'
import CounselCard from './components/CounselCard'
import { LoginBtn } from './components/LoginBtn'
import { CounSelorLoginBtn } from './components/CounselorLoginBtn'
import { CommunityNotice } from './components/CommunityNotice'
import { CommunityFree } from './components/CommunityFree'
import MultipleQuestion from './components/MultipleQuestion'
import Carousel from './components/Carousel'

function App(): React.ReactElement {
  const [inputValue, setInputValue] = useState('')
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleClick = () => {
    alert('버튼클릭')
  }
  const counselButtonClick = () => {
    alert('버튼클릭')
  }
  const micClick = () => {
    alert('마이크 클릭 - 비활성화로 바꿔야 함')
  }
  const cameraClick = () => {
    alert('카메라 클릭 - 비활성화로 바꿔야 함')
  }
  const onCardClick = () => {
    alert('상담 정보 보기')
  }
  const onPostClick = () => {
    alert('onPostClick')
  }
  const onCommentClick = () => {
    alert('onPostClick')
  }
  const onCounselClick = () => {
    alert('onPostClick')
  }
  const onCounselorJournalClick = () => {
    alert('onPostClick')
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
        onClick={counselButtonClick}
      />

      <h1>상담사 카드</h1>
      <CounselorCard
        onCardClick={onCardClick}
        name="석민혁"
        grade={4.8}
        gradeCount={51}
        introduce="족구왕이 될 사나이"
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
      <h1>커리큘럼 박스</h1>
      <CurriculumBox />
      <div style={{ padding: '100px' }}>
        <Table></Table>
      </div>
      <Comment></Comment>
      <h1>게시판 상단 바</h1>
      <ArticleBar name="자유게시판" />
      <h1>상담 진행 바</h1>
      <CounselingBar title="상담 제목 1" episodeCount={1} />
      <h1>Footer</h1>
      <Footer />
      <h1>상담 진행 중 나오는 버튼</h1>
      <MicButton onClick={micClick}></MicButton>
      <CameraButton onClick={cameraClick}></CameraButton>
      <h1>내 정보 박스(일반 사용자)</h1>
      <UserDataBox
        onPostClick={onPostClick}
        onCommentClick={onCommentClick}
        onCounselClick={onCounselClick}
      />
      <h1>내 정보 박스(상담사)</h1>
      <CounselorDataBox
        onPostClick={onPostClick}
        onCommentClick={onCommentClick}
        onCounselClick={onCounselClick}
        onCounselorJournalClick={onCounselorJournalClick}
      />
      <h1>일반 회원 로그인 </h1>
      <LoginBtn />
      <h1>상담사회원 로그인</h1>
      <CounSelorLoginBtn />
      <h1>커뮤니티 공지사항 로고</h1>
      <CommunityNotice />
      <h1>커뮤니티 자유게시판</h1>
      <CommunityFree />
      <h1>캐러셀</h1>
      <Carousel />
      <div>
        <h1>객관식</h1>
        <MultipleQuestion question="3. 이번 모임은 도움이 되었나요?" />
      </div>
    </div>
  )
}

export default App
