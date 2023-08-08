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
import { useState } from 'react'
import { usePostBoard } from '../hooks/useboard'
import { BoardData } from '../model/board'
export const QnaWrite: React.FC = () => {
  //type 공지사항 ,qna, 자유게시판인지
  // status 삭제상태 or 게시상태
  const [board, setBoard] = useState({
    title: '',
    content: '',
    level: 0,
    views: 0,
    userId: 1,
    type: 2,
    status: 0,
  })
  const { title, content, level, views, userId, type, status } = board

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBoard((prevBoard) => ({
      ...prevBoard,
      title: e.target.value,
    }))
  }

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBoard((prevBoard) => ({
      ...prevBoard,
      content: e.target.value,
    }))
  }
  const { mutate: postArticle } = usePostBoard()
  const postQna = () => {
    // e.preventDefault()
    if (title.length === 0) {
      alert('제목을 입력해 주세요.')
    } else if (content.length === 0) {
      alert('내용을 입력해 주세요.')
    } else {
      if (window.confirm('게시글을 등록하시겠습니까?')) {
        const article = {
          title: title,
          content: content,
          level: 0,
          views: 0,
          userId: 1,
          type: 2,
          status: 0,
          date: new Date().toISOString(),
        }
        postArticle(article)
      }
    }
  }

  return (
    <div>
      <NavbarLogin />
      <ArticleBar name="QnA 작성" />
      <SpacedDiv />
      <CenteredDiv>
        <StyledForm style={{ display: 'flex', flexDirection: 'column' }}>
          <SpacedDiv />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <StyledTitleInput
              placeholder="제목을 입력하세요"
              value={title}
              onChange={handleTitleChange}
            />
            <span
              style={{
                marginLeft: '30px',
                fontSize: '15px',
                fontWeight: '500',
              }}
            >
              작성자
            </span>
          </div>
          <p style={{ marginLeft: '30px', fontSize: '10px' }}>
            * 음란물, 차별, 비하, 혐오 및 초상권, 저작권 침해 게시물은 민,
            형사상의 책임을 질 수 있습니다. [저작권법 안내] [게시물 활용 안내]
          </p>
          <SpacedDiv />
          <StyledTextArea
            placeholder="내용을 입력하세요"
            value={content}
            onChange={handleContentChange}
          />
          <SpacedDiv />
          {/* <StyledFileInput />
          <div style={{ marginLeft: '30px', width: '400px' }}>
            <StyledButton>파일 업로드</StyledButton>
          </div> */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginRight: '30px',
              marginTop: '10px', // Add some top margin to separate buttons from textarea
              marginBottom: '10px',
            }}
          >
            {/* 버튼 구현하기 */}
          </div>
        </StyledForm>
        <div style={{ marginRight: '10px' }}>
          <StyledButton red onClick={() => window.location.replace('/qna')}>
            취소
          </StyledButton>
        </div>
        <StyledButton primary onClick={postQna}>
          등록
        </StyledButton>
      </CenteredDiv>
    </div>
  )
}
