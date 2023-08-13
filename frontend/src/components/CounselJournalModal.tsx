import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import StyledButton from './../styles/StyledButton'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import styled from '@emotion/styled'
import { StyledTextArea } from './Write'
const style = {
  position: 'absolute' as 'absolute',
  top: '70%',
  left: '70%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #3b478f',
  //   boxShadow: 24,
  p: 4,
}

interface CounselJournalModalProps {
  nickname: string
}

export default function CounselJournalModal(props: CounselJournalModalProps) {
  const [open, setOpen] = React.useState(true)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [counselJournal, setCounselJournal] = React.useState({
    content: '',
    userId: 1,
    counselId: 1,
  })
  const { content, userId, counselId } = counselJournal

  const handleCounselJournal = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const updatedContent = e.target.value
    setCounselJournal((prevCounselJournal) => ({
      ...prevCounselJournal,
      content: updatedContent,
    }))

    // localStorage에 저장
    localStorage.setItem('counselJournalContent', updatedContent)
  }

  const postMyTestimony = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() // 기본 폼 제출 동작 방지
    if (content.length === 0) {
      alert('내용을 입력해주세요.')
    } else {
      if (window.confirm('소감문을 등록하시겠습니까?')) {
        const response = axios.post(
          `${process.env.REACT_APP_BASE_URL}counsel/${counselId}/counseljournal/`,
          counselJournal,
        )
      }
    }
  }
  return (
    <div>
      {/* <StyledButton width="200px" onClick={handleOpen}>
        상담일지 작성
      </StyledButton> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2>상담일지를 입력해 주세요</h2>
          <h3>내담자 이름 : {props.nickname}</h3>
          <br />
          <form onSubmit={postMyTestimony}>
            <textarea
              required
              style={{ width: '300px', height: '200px' }}
              value={content}
              onChange={handleCounselJournal}
            />
            <div>
              <br />
              <StyledButton type="submit">완료</StyledButton>
              <StyledButton onClick={handleClose}>취소</StyledButton>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  )
}
