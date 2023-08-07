import React, { useRef, useState, ChangeEvent, useMemo } from 'react'
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
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

type UploadImage = {
  location: string
  file: File
  type: string
}

export const FreeBoardWrite = () => {
  const [level, setLevel] = React.useState('')

  const [imageFile, setImageFile] = useState<UploadImage | null>(null)
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const imgRef = useRef<HTMLInputElement>(null)

  const fileUploadButton = () => {
    imgRef.current?.click()
  }

  const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files
    const length = fileList?.length
    if (fileList && fileList[0]) {
      const url = URL.createObjectURL(fileList[0])

      setImageFile({
        file: fileList[0],
        location: url,
        type: fileList[0].type.slice(0, 5),
      })
    }
  }

  const showImage = useMemo(() => {
    if (!imageFile && imageFile == null) {
      return
    }
    return (
      <img
        src={imageFile.location}
        alt={imageFile.type}
        onClick={fileUploadButton}
        style={{
          width: '100px',
          height: '100px',
        }}
      />
    )
  }, [imageFile])
  /** Title 제목 입력 */
  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
    console.log(title)
  }
  /** */
  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
    console.log(content)
  }
  return (
    <div>
      <NavbarLogin />
      <ArticleBar name="자유게시판 작성" />
      <SpacedDiv />
      <CenteredDiv>
        <StyledForm style={{ display: 'flex', flexDirection: 'column' }}>
          <SpacedDiv />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* 공지사항 제목 입력하기 */}
            <StyledTitleInput
              value={title}
              onChange={handleTitleChange}
              placeholder="제목을 입력하세요"
            />
            {/* 작성자 입력하기 */}
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
          {/* 저작권법 게시물 활용안내 경고 */}
          <p style={{ marginLeft: '30px', fontSize: '10px' }}>
            * 음란물, 차별, 비하, 혐오 및 초상권, 저작권 침해 게시물은 민,
            형사상의 책임을 질 수 있습니다. [저작권법 안내] [게시물 활용 안내]
          </p>
          <SpacedDiv />
          {/* 자유게시판 내용 적용 */}
          <StyledTextArea
            onChange={handleContentChange}
            placeholder="내용을 입력하세요"
          />
          <SpacedDiv />

          {showImage}
          {/* 파일 넣는 입력창 */}
          <StyledFileInput
            type="file"
            accept="image/*"
            ref={imgRef}
            onChange={uploadImage}
            style={{ display: 'none' }}
          />
          {/* 파일 input창 나오게하는 버튼 */}
          <div style={{ marginLeft: '30px', width: '400px' }}>
            {/* <StyledButton onClick={fileUploadButton}>파일 업로드</StyledButton> */}
            <StyledButton type="button" onClick={fileUploadButton}>
              파일 업로드
            </StyledButton>
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
              {/* 작성 취소버튼 */}
              <StyledButton
                red
                onClick={() => window.location.replace('/notice')}
              >
                취소
              </StyledButton>
            </div>
            {/* 등록버튼 클릭시 등록되었습니다 창뜨기 axios로 포스트 보내기 */}
            <StyledButton primary>등록</StyledButton>
          </div>
        </StyledForm>
      </CenteredDiv>
    </div>
  )
}
