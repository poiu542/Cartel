import React from 'react'
import { Color, Size, Border } from '../model/custom'

interface ButtonProps {
  border: Border
  color: Color
  size: Size
  text: string
  onClick: () => void
}

const Button: React.FC<ButtonProps> = ({
  border,
  color,
  text,
  onClick,
  size,
}) => (
  <button
    style={{
      backgroundColor: color.background,
      color: color.color,
      width: size.width,
      height: size.height,
      borderRadius: border.radius,
      borderColor: border.borderColor,
      border: 'none',
    }}
    onClick={onClick}
  >
    {text}
  </button>
)

export default Button
