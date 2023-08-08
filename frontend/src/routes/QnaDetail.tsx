import React from 'react'
import NavbarLogin from '../components/NavbarLogin'
import ArticleBar from './../components/ArticleBar'
import StyledButton from './../styles/StyledButton'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export const QnaDetail = () => {
  const navigate = useNavigate()
  const { qnaId } = useParams()

  const deleteQna = () => {
    if (window.confirm('게시글을 삭제하시겠습니까?')) {
      axios
        .delete(`/articles/${qnaId}`, {})
        .then(function (response) {
          alert('게시글이 삭제되었습니다.')
          navigate('/qna')
        })
        .catch((error) => console.log(error))
    } else {
      return false
    }
  }
  return (
    <>
      <NavbarLogin />
      <ArticleBar name="QnA" />
      <StyledButton green onClick={() => navigate(`/qna/edit/${qnaId}`)}>
        수정
      </StyledButton>
      <StyledButton red onClick={deleteQna}>
        삭제
      </StyledButton>
    </>
  )
}
