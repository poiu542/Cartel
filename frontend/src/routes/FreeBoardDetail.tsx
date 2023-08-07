import React from 'react'
import ArticleBar from './../components/ArticleBar'
import NavbarLogin from './../components/NavbarLogin'
import Comment from './../components/Comment'
import StyledButton from './../styles/StyledButton'
import { NoneStyledLink } from './../styles/Custom'
import { useNavigate, useParams } from 'react-router'

export const FreeBoardDetail = () => {
  const navigate = useNavigate()

  let { freeboardId } = useParams()
  const id = freeboardId ? parseInt(freeboardId, 10) : null
  return (
    <div>
      <NavbarLogin />
      <div style={{ marginTop: '30px' }}>
        <ArticleBar name="자유게시판" />
      </div>
      <div
        style={{
          borderBottom: '1px solid gray',
          width: '100%',
          alignItems: 'center',
        }}
      >
        {/* post.title */}
        <h1 style={{ marginLeft: '50px' }}>오늘 금약 25일째....</h1>
        <div style={{ marginBottom: '10px', marginLeft: '50px' }}>
          {/* post.user , post.date */}
          작성자<span style={{ marginLeft: '30px' }}>작성날짜</span>
          {/* post.points */}
          <span style={{ marginLeft: '30px' }}>레벨</span>
        </div>
      </div>
      {/* 이미지삽입 */}
      <div style={{ marginLeft: '40px', marginTop: '40px' }}>
        <img
          style={{
            width: '300px',
            height: '300px',
          }}
          // {post.image}
          src={process.env.PUBLIC_URL + '/image/seulyoon.jpg'}
          alt="설윤"
        />
        {/* 내용삽입 {post.content} */}
        <p>
          펜타닐, 메스암페타민, 마리화나 등등 온갖마약을 하고 살았는데 이번엔
          제대로 끊어보려고 자조모임 하고있습니다. 모두 화이팅!{' '}
        </p>
      </div>
      <Comment />

      <StyledButton onClick={() => navigate(`/freeboard/edit/${freeboardId}`)}>
        수정
      </StyledButton>
      {/* 삭제시 axios 요청 delte */}
      {/* <StyledButton red onClick={()=>}>삭제</StyledButton> */}
    </div>
  )
}
