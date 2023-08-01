import React from 'react'
import { Write } from './../components/Write'

export const QnaWrite: React.FC = () => {
  return (
    <>
      <input type="text" placeholder="제목을 작성하시오" />
      <h1>하이</h1>
      <Write name="QnA 작성" />
    </>
  )
}
