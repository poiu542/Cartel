import React from 'react'
import NavbarLogin from '../components/NavbarLogin'
import ArticleBar from './../components/ArticleBar'
import StyledButton from './../styles/StyledButton'

export const QnaDetail = () => {
  return (
    <>
      <NavbarLogin />
      <ArticleBar name="QnA" />
      <StyledButton green>수정</StyledButton>
      <StyledButton red>삭제</StyledButton>
    </>
  )
}
