import React from 'react'

type ButtonProps = {
  color: string
  text: string
  width: string
  height: string
  radius: string
  onClick: () => void
}

const Button: React.FC<ButtonProps> = ({
  radius,
  color,
  text,
  width,
  height,
  onClick,
}) => (
  <button
    style={{ backgroundColor: color, width, height, borderRadius: radius }}
    onClick={onClick}
  >
    {text}
  </button>
)

export default Button
