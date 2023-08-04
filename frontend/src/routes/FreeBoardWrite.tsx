import React from 'react'
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

export const FreeBoardWrite = () => {
  return (
    <div>
      <NavbarLogin />
      <ArticleBar name="자유게시글 작성" />
      <SpacedDiv />
      <CenteredDiv>
        <StyledForm style={{ display: 'flex', flexDirection: 'column' }}>
          <SpacedDiv />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <StyledTitleInput maxLength={40} placeholder="제목을 입력하세요" />
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
          <StyledTextArea placeholder="내용을 입력하세요" />
          <SpacedDiv />
          <StyledFileInput />
          <div style={{ marginLeft: '30px', width: '400px' }}>
            <StyledButton>파일 업로드</StyledButton>
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
            <StyledButton primary>등록</StyledButton>
          </div>
        </StyledForm>
      </CenteredDiv>
    </div>
  )
}
