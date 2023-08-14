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
import { userState } from '../recoil/atoms/userState'
import { useRecoilState } from 'recoil'

export const FreeBoardDetail = () => {
  const navigate = useNavigate()
  const [user, setUser] = useRecoilState(userState)
  let { freeboardId } = useParams()
  const id = freeboardId ? parseInt(freeboardId, 10) : null
  const [checkUser, setCheckUser] = useState(false)
  const [board, setBoard] = useState({
    title: '',
    content: '',
    nickname: '',
    date: '',
    level: 0,
    views: 0,
    userId: 0,
  })
  const { title, content, nickname, date, level, userId } = board

  const {
    isLoading,
    data: article,
    isError,
    error,
    isFetched,
    refetch,
  } = useQuery<BoardData>(['freeboard', id], () => getBoard(id))

  useEffect(() => {
    // article 데이터가 있는 경우 board 상태를 설정합니다.
    if (article) {
      setBoard({
        title: article.title,
        content: article.content,
        nickname: article.nickname,
        date: article.date,
        level: article.level,
        views: article.views,
        userId: article.userId,
      })
      if ((user.id && user.id === board.userId) || user.type === 3) {
        setCheckUser(true)
      }
    }
  }, [article])

  if (isLoading) {
    return <h1>로딩중입니다</h1>
  }
  if (isError) {
    console.log(error)
    return <h1>화면을 불러오는데 문제가 있습니다.</h1>
  }

  const deleteFreeBoard = () => {
    if (user.id === board.userId || user.type === 3) {
      if (window.confirm('게시글을 삭제하시겠습니까?')) {
        axios
          .delete(
            `${process.env.REACT_APP_BASE_URL}articles/${freeboardId}`,
            {},
          )
          .then(function (response) {
            alert('게시글이 삭제되었습니다.')
            navigate('/freeboard')
          })
          .catch((error) => console.log(error))
      }
    }
  }

  return (
    <>
      <NavbarLogin />
      <div style={{ marginTop: '30px' }}>
        <ArticleBar name="게시판 상세정보" />
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
          {checkUser && (
            <StyledButton
              green
              onClick={() => navigate(`/freeboard/edit/${freeboardId}`)}
            >
              수정
            </StyledButton>
          )}

          {checkUser && (
            <StyledButton red onClick={deleteFreeBoard}>
              삭제
            </StyledButton>
          )}
        </ButtonGroup>
      </ArticleContainer>
    </>
  )
}
