import React from 'react'
import { Color } from '../model/custom'

interface ButtonProps extends Color {
  text: string
  width: string
  height: string
  radius: string
  onClick: () => void
}

const Button: React.FC<ButtonProps> = ({
  radius,
  color,
  background,
  text,
  width,
  height,
  onClick,
}) => (
  <button
    style={{
      backgroundColor: background,
      color: color,
      width,
      height,
      borderRadius: radius,
    }}
    onClick={onClick}
  >
    {text}
  </button>
)

export default Button
