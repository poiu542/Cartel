import React from 'react'
import { useInput } from '../hooks/useInput'

type InputProps = {
  value: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => string
  placeHolder: string
}

export const InputBox = ({ value, handleChange, placeHolder }: InputProps) => {
  return (
    <div>
      <input />
    </div>
  )
}
