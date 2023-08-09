import React, { useState, useEffect } from 'react'
import NavbarLogin from '../components/NavbarLogin'
import ArticleBar from './../components/ArticleBar'
import StyledButton from './../styles/StyledButton'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { getBoard } from '../hooks/useboard'
import { useQuery } from 'react-query'
import { BoardData } from '../model/board'
import Comment from './../components/Comment'
import { CenteredDiv, SpacedDiv, StyledForm } from '../components/Write'
import styled from '@emotion/styled'

export const CustumDiv = styled.div`
  width: 80%;
  height: 90%;
  border-top: 4px solid #3b478f;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  border-bottom: 1px solid gray;
`

// Emotion 스타일 컴포넌트
const ArticleContainer = styled.div`
  margin: 50px 150px;
  min-height: 800px;
  border: 1px solid gray;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`

const ArticleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ArticleTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
`

const ArticleMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 10px;
  margin-bottom: 20px;
  border-bottom: 1px solid gray;
`

const ArticleContent = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  min-height: 300px;
  padding: 20px;
  border: 1px solid #e0e0e0;
`

const ButtonGroup = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;
  margin-top: 20px;
`

export const QnaDetail = () => {
  const navigate = useNavigate()
  let { qnaId } = useParams()
  const id = qnaId ? parseInt(qnaId, 10) : null
  const [board, setBoard] = useState({
    title: '',
    content: '',
    nickname: '',
    date: '',
    views: 0,
  })
  const { title, content, nickname, date } = board

  const {
    isLoading,
    data: article,
    isError,
    error,
    isFetched,
    refetch,
  } = useQuery<BoardData>(['qna', id], () => getBoard(id))

  console.log(article)
  useEffect(() => {
    // article 데이터가 있는 경우 board 상태를 설정합니다.
    if (article) {
      setBoard({
        title: article.title,
        content: article.content,
        nickname: article.nickname,
        date: article.date,
        views: article.views,
      })
    }
  }, [article])

  if (isLoading) {
    return <h1>로딩중입니다</h1>
  }
  if (isError) {
    console.log(error)
    return <h1>화면을 불러오는데 문제가 있습니다.</h1>
  }
  console.log(board)
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
      <div style={{ marginTop: '30px' }}>
        <ArticleBar name="QnA 상세정보" />
      </div>
      <ArticleContainer>
        <ArticleHeader>
          <ArticleTitle>{board.title}</ArticleTitle>
        </ArticleHeader>
        <ArticleMeta>
          <span>작성자 : {board.nickname}</span>
          <span style={{ marginLeft: '30px' }}>{board.date}</span>
        </ArticleMeta>
        <ArticleContent>{board.content}</ArticleContent>

        <Comment />

        <ButtonGroup>
          <StyledButton green onClick={() => navigate(`/qna/edit/${qnaId}`)}>
            수정
          </StyledButton>
          <StyledButton red onClick={deleteQna}>
            삭제
          </StyledButton>
        </ButtonGroup>
      </ArticleContainer>
    </>
  )
}
