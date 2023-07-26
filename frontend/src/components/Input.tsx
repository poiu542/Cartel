import React, { ChangeEvent } from 'react'

type InputProps = {
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({ value, onChange }) => {
  const inputStyle: React.CSSProperties = {
    borderBottom: '1px solid black',
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    outline: 'none',
    padding: '5px',
  }

  return (
    <input type="text" value={value} onChange={onChange} style={inputStyle} />
  )
}

export default Input
