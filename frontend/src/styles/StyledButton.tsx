import React from 'react'
import styled, { css } from 'styled-components'

interface ButtonProps {
  children: React.ReactNode
  color?: string
  background?: string
  primary?: boolean
  onClick?: () => void
  //   onClick?: (argument: number) => number
  radius?: string
  green?: boolean
  red?: boolean
  fontSize?: string
  border?: string
  width?: string
  height?: string
}

const BasicButton = styled.button<ButtonProps>`
  padding: 6px 12px;
  line-height: 1.5;
  font-weight: bold;
  justify-content: center;
  font-family: Inter;

  border-radius: ${(props) => props.radius || '8px'};
  color: ${(props) => props.color || 'white'};
  background: ${(props) => props.background || '#40BFFF'};
  font-size: ${(props) => props.fontSize || '26px'};
  border: ${(props) => props.border || 'none'};

  cursor: pointer;

  ${(props) =>
    props.primary &&
    css`
      color: white;
      background: #3b478f;
      font-weight: bold;
      border-radius: 10px;
    `}
  ${(props) =>
    props.green &&
    css`
      color: white;
      background: #15e506;
      font-weight: bold;
      border-radius: 10px;
    `}
  ${(props) =>
    props.red &&
    css`
      color: white;
      background: #ef5c5c;
      font-weight: bold;
      border-radius: 10px;
    `}
`

function StyledButton({ children, ...props }: ButtonProps) {
  return (
    <BasicButton {...props} onClick={props.onClick}>
      {children}
    </BasicButton>
  )
}

export default StyledButton
