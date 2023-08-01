import React, { useRef, ChangeEvent, useState } from 'react'
import NavbarLogin from './NavbarLogout'
import ArticleBar from './ArticleBar'
import { styled } from 'styled-components'
import StyledButton from '../styles/StyledButton'

type WriteProps = {
  name: string
}

const StyledInput = styled.input``

export const Write: React.FC<WriteProps> = ({ name }) => {
  const fileInput = useRef<HTMLInputElement>(null)
  const [title, setTitle] = useState<string>('')

  const handleButtonClick = () => {
    if (fileInput.current) {
      fileInput.current.click()
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      console.log(e.target.files[0])
    }
  }
  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  return (
    <div>
      <NavbarLogin />
      <ArticleBar name={name} />
      <div>
        <input
          type="text"
          placeholder="제목을 입력해라"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div>
        <textarea
          style={{
            resize: 'none',
            width: '80%',
            borderRadius: '5px',
            border: '1px solid #ccc',
            padding: '5px',
          }}
          placeholder="Type your content here..."
        />
      </div>

      <StyledButton fontSize="13px" onClick={handleButtonClick}>
        파일 업로드
      </StyledButton>
      <input
        type="file"
        ref={fileInput}
        onChange={handleChange}
        style={{ display: 'none' }}
      />
    </div>
  )
}
