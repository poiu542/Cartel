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
import { formatDateDetail } from '../utils/dateUtils'
import {
  ArticleContainer,
  ArticleHeader,
  ArticleContent,
  ArticleMeta,
  ArticleTitle,
  ButtonGroup,
} from '../styles/articles'
import { useRecoilState } from 'recoil'
import { userState } from '../recoil/atoms/userState'

export const QnaDetail = () => {
  const [checkUser, setCheckUser] = useState(false)

  const navigate = useNavigate()
  const [user, setUser] = useRecoilState(userState)
  let { qnaId } = useParams()
  const id = qnaId ? parseInt(qnaId, 10) : null
  const [board, setBoard] = useState({
    title: '',
    content: '',
    nickname: '',
    date: '',
    views: 0,
    userId: 1,
  })
  const { title, content, nickname, date, userId } = board

  const {
    isLoading,
    data: article,
    isError,
    error,
    isFetched,
    refetch,
  } = useQuery<BoardData>(['qna', id], () => getBoard(id))

  useEffect(() => {
    // article 데이터가 있는 경우 board 상태를 설정합니다.
    if (article) {
      setBoard({
        title: article.title,
        content: article.content,
        nickname: article.nickname,
        date: article.date,
        views: article.views,
        userId: article.userId,
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
  if (user.id === board.userId || user.type === 3) {
    setCheckUser(true)
  }
  const deleteQna = () => {
    if (user.id === board.userId || user.type === 3) {
      if (window.confirm('게시글을 삭제하시겠습니까?')) {
        axios
          .delete(`${process.env.REACT_APP_BASE_URL}articles/${qnaId}`, {})
          .then(function (response) {
            alert('게시글이 삭제되었습니다.')
            navigate('/qna')
          })
          .catch((error) => console.log(error))
      } else {
        return false
      }
    } else {
      alert('삭제 권한이 없습니다.')
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
          <span style={{ marginLeft: '35px' }}>조회수 : {board.views}</span>
          <span style={{ marginLeft: '35px' }}>
            등록일 : {formatDateDetail(board.date)}
          </span>
        </ArticleMeta>
        <ArticleContent>{board.content}</ArticleContent>

        <Comment />

        <ButtonGroup>
          <StyledButton
            green
            display={checkUser ? true : false}
            onClick={() => navigate(`/qna/edit/${qnaId}`)}
          >
            수정
          </StyledButton>
          <StyledButton
            display={checkUser ? true : false}
            red
            onClick={deleteQna}
          >
            삭제
          </StyledButton>
        </ButtonGroup>
      </ArticleContainer>
    </>
  )
}
