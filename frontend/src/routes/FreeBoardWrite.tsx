import React, { useRef, useState, ChangeEvent } from 'react'
import '../fonts/font.css'
import NavbarLogin from '../components/NavbarLogin'
import ArticleBar from '../components/ArticleBar'
import {
  CenteredDiv,
  SpacedDiv,
  StyledForm,
  StyledFileInput,
  StyledTextArea,
  StyledTitleInput,
} from './../components/Write'
import StyledButton from './../styles/StyledButton'
import axios from 'axios'
import { CounSelorLoginBtn } from '../components/CounselorLoginBtn'

export const FreeBoardWrite = () => {
  const fileInput = useRef<HTMLInputElement>(null)
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }
  // 버튼 클릭시
  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault() // 추가한 코드 (석민혁)
    console.log(fileInput.current)
    if (fileInput.current) {
      fileInput.current.click()
    }
  }

  /** 파일이 존재하고 파일이 업로드할 때 가장 최신것을 저장*/
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    //수정할 부분 : async 추가
    if (e.target.files && e.target.files[0]) {
      console.log(e.target.files[0])

      // 추가한 부분 (석민혁)
      // const file = e.target.files[0]
      // const formData = new FormData()
      // formData.append('file', file)
      // try {
      //   const response = await axios.post(
      //     'http://yourserver.com/upload',
      //     formData,
      //     {
      //       headers: {
      //         'Content-Type': 'multipart/form-data',
      //       },
      //     },
      //   )

      //   console.log(response.data)
      // } catch (error) {
      //   console.error(error)
      // }
      // 여기까지
    }
  }
  // 제목이 바뀌었을때 제목을 저장
  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }
  return (
    <div>
      <NavbarLogin />
      <ArticleBar name="자유게시글 작성" />
      <SpacedDiv />
      <CenteredDiv>
        <StyledForm style={{ display: 'flex', flexDirection: 'column' }}>
          <SpacedDiv />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <StyledTitleInput
              maxLength={40}
              placeholder="제목을 입력하세요"
              onChange={handleTitleChange}
            />
            <span
              style={{
                marginLeft: '30px',
                fontSize: '15px',
                fontWeight: '500',
              }}
            >
              작성자 레벨
            </span>
          </div>
          <p style={{ marginLeft: '30px', fontSize: '10px' }}>
            * 음란물, 차별, 비하, 혐오 및 초상권, 저작권 침해 게시물은 민,
            형사상의 책임을 질 수 있습니다. [저작권법 안내] [게시물 활용 안내]
          </p>
          <SpacedDiv />
          <StyledTextArea
            onChange={handleContentChange}
            placeholder="내용을 입력하세요"
          />
          <SpacedDiv />
          {/* 파일 넣는 input 평소엔 안보이고 파일업로드 버튼 클릭시 보이도록 */}
          <StyledFileInput
            ref={fileInput}
            style={{ display: 'none' }}
            onChange={handleChange}
          />
          {/* 파일을 사용자가 업로드 하는 버튼 */}
          <div style={{ marginLeft: '30px', width: '400px' }}>
            <StyledButton onClick={handleButtonClick}>파일 업로드</StyledButton>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginRight: '30px',
              marginTop: '10px', // Add some top margin to separate buttons from textarea
              marginBottom: '10px',
            }}
          >
            <div style={{ marginRight: '10px' }}>
              <StyledButton
                red
                onClick={() => window.location.replace('/freeboard')}
              >
                취소
              </StyledButton>
            </div>
            {/* 등록버튼을 누르면 입력한 값들 등록되도록 */}
            <StyledButton primary>등록</StyledButton>
          </div>
        </StyledForm>
      </CenteredDiv>
    </div>
  )
}
