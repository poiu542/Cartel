import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import StyledButton from './../styles/StyledButton'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import styled from '@emotion/styled'
import { StyledTextArea } from './Write'
const style = {
  position: 'absolute' as 'absolute',
  top: '70%',
  left: '80%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #3b478f',
  //   boxShadow: 24,
  p: 4,
}

export default function TestimonyModal() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [testimony, setTestimony] = React.useState({
    content: '',
    userId: 1,
    counselId: 1,
  })
  const { content, userId, counselId } = testimony

  const handleTestimony = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTestimony((prevTestimony) => ({
      ...prevTestimony,
      content: e.target.value,
    }))
  }

  const postMyTestimony = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() // 기본 폼 제출 동작 방지
    if (content.length === 0) {
      alert('내용을 입력해주세요.')
    } else {
      if (window.confirm('소감문을 등록하시겠습니까?')) {
        const response = axios.post(
          `api/counsel/${counselId}/testimony/`,
          testimony,
        )
      }
    }
  }
  return (
    <div>
      <StyledButton onClick={handleOpen}>소감문 작성</StyledButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            소감문을 입력해 주세요
          </Typography>
          <br />
          <form onSubmit={postMyTestimony}>
            <textarea
              style={{ width: '300px', height: '200px' }}
              value={content}
              onChange={handleTestimony}
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
