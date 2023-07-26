import React, { ChangeEvent } from 'react'

type InputProps = {
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string // placeholder 속성을 추가
}

const Input: React.FC<InputProps> = ({ value, onChange, placeholder }) => {
  const inputStyle: React.CSSProperties = {
    borderBottom: '1px solid black',
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    outline: 'none',
    padding: '7px',
  }

  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={inputStyle}
    />
  )
}

export default Input
