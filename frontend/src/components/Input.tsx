import React, { ChangeEvent } from 'react'

type InputProps = {
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  width?: string
  type?: 'text' | 'password'
  maxLength?: number // 최대 글자 수 제한을 위한 속성 추가
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  width,
  type = 'text',
  maxLength = 15, // 최대 글자 수 제한의 기본값 15로 설정
}) => {
  const inputStyle: React.CSSProperties = {
    borderBottom: '1px solid black',
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    outline: 'none',
    padding: '7px',
    width: width || '550px',
    marginBottom: '20px',
    fontSize: '18px',
  }

  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={inputStyle}
      maxLength={maxLength} // 최대 글자 수 제한을 input 요소에 전달
    />
  )
}

export default Input
