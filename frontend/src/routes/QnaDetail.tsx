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

export const QnaDetail = () => {
  const navigate = useNavigate()
  let { qnaId } = useParams()
  const id = qnaId ? parseInt(qnaId, 10) : null
  const [board, setBoard] = useState({
    title: '',
    content: '',
    nickname: '',
    date: '',
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
      <div
        style={{
          margin: '50px 150px 0px 150px',
        }}
      >
        <div
          style={{
            minHeight: '800px',
          }}
        >
          <div
            style={{
              borderBottom: '1px solid gray',
              width: '100%',
              alignItems: 'center',
            }}
          >
            {/* post.title */}
            <h1 style={{ marginLeft: '50px' }}>{board.title}</h1>
            <div style={{ marginBottom: '10px', marginLeft: '50px' }}>
              {/* post.user , post.date */}
              작성자 : {board.nickname}
              <span style={{ marginLeft: '30px' }}>{board.date}</span>
              {/* post.points */}
              {/* <span style={{ marginLeft: '30px' }}>레벨</span> */}
            </div>
          </div>
          {/* 이미지삽입 */}
          <div style={{ marginLeft: '40px', marginTop: '40px' }}>
            {/* <img
              style={{
                width: '300px',
                height: '300px',
              }}
              // {post.image}
              src={process.env.PUBLIC_URL + '/image/seulyoon.jpg'}
              alt="설윤"
            /> */}
            {/* 내용삽입 {post.content} */}
            <p>{board.content}</p>
          </div>
        </div>

        <Comment />
      </div>

      {/* 버튼 구현하기 */}
      <div style={{ marginRight: '10px' }}>
        <StyledButton green onClick={() => navigate(`/qna/edit/${qnaId}`)}>
          수정
        </StyledButton>
      </div>
      <StyledButton red onClick={deleteQna}>
        삭제
      </StyledButton>
    </>
  )
}
