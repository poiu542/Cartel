import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import StyledButton from './../styles/StyledButton'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import styled from '@emotion/styled'
import { FlexContainer, FlexContainerRow } from '../styles/MainStyle'
import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

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
export const RolePlayModal = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [roles, setRoles] = React.useState<string[]>([''])
  const addRole = () => {
    setRoles([...roles, ''])
  }

  // 이력 삭제
  const deleteRole = (index: number) => {
    setRoles(roles.filter((role, idx) => idx !== index))
  }

  // 이력 업데이트
  const updateCareer = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const updatedCareers = [...roles]
    updatedCareers[index] = event.target.value
    setRoles(updatedCareers)
  }
  return (
    <>
      <StyledButton onClick={handleOpen}>역할극 버튼</StyledButton>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            역할을 배정해 주세요! &nbsp;
            <StyledButton
              fontSize="14px"
              width="50px"
              height="30px"
              onClick={addRole}
            >
              Add
            </StyledButton>
            &nbsp;
            <StyledButton
              fontSize="12px"
              width="50px"
              height="30px"
              onClick={handleClose}
              background="#ef5c5c"
            >
              Close
            </StyledButton>
          </Typography>
          &nbsp;
          {roles.map((role, index) => (
            <div key={index} style={{ paddingBottom: '30px' }}>
              <FlexContainerRow>
                <input
                  type="text"
                  value={role}
                  onChange={(event) => updateCareer(index, event)}
                  style={{ width: '900px', borderBlockColor: '#40BFFF' }}
                />
                <IconButton
                  aria-label="delete"
                  onClick={() => deleteRole(index)}
                  style={{ scale: '1.5' }}
                >
                  <DeleteIcon fontSize="inherit" />
                </IconButton>
                <button>선택</button>
              </FlexContainerRow>
            </div>
          ))}
          <FlexContainerRow
            style={{
              position: 'fixed',
              top: '120px',
              right: '100px',
              zIndex: 1,
            }}
          >
            &nbsp;
          </FlexContainerRow>
        </Box>
      </Modal>
    </>
  )
}
