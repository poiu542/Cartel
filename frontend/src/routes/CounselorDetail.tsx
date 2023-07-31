import React from 'react'
import { useParams } from 'react-router-dom'

export const CounselorDetail: React.FC = () => {
  let { id } = useParams<{ id: string }>()

  // 가져오는 id로 상담사 정보를 가져와야 함

  return (
    <>
      <div>상담사 아이디: {id}</div>
    </>
  )
}
