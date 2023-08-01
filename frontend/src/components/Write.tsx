import React from 'react'
import NavbarLogin from './NavbarLogout'
import ArticleBar from './ArticleBar'
import { styled } from 'styled-components'

type WriteProps = {
  name: string
}

const StyledInput = styled.input``

export const Write = ({ name }: WriteProps) => {
  return (
    <div>
      <NavbarLogin />
      <ArticleBar name={name} />
      <h1>Write</h1>
    </div>
  )
}
