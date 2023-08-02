import React from 'react'
import NavbarLogin from '../components/NavbarLogin'
import ArticleBar from '../components/ArticleBar'
import {
  CenteredDiv,
  SpacedDiv,
  StyledForm,
  StyledFileInput,
  StyledTextArea,
  StyledTitleInput,
} from '../components/Write'

import StyledButton from './../styles/StyledButton'

export const QnaEdit = () => {
  return (
    <>
      <NavbarLogin />
      <ArticleBar name="QnA 수정" />
      <SpacedDiv />
      <CenteredDiv>
        <StyledForm style={{ display: 'flex', flexDirection: 'column' }}>
          <SpacedDiv />
          {/* 입력되어 있는 값 띄우기 */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <StyledTitleInput
              required
              maxLength={40}
              placeholder="{{원래내용}}}"
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
          <StyledTextArea placeholder="원래 입력되어 있는 값 올리기" />
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
              <StyledButton red>취소</StyledButton>
            </div>
            <StyledButton primary>등록</StyledButton>
          </div>
        </StyledForm>
      </CenteredDiv>
    </>
  )
}
