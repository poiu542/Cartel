import React from 'react'
import { useParams } from 'react-router-dom'

interface Evaluation {
  evaluation_rate: number
  evaluation_content: string
}

interface Counselor {
  id: string
  imageUrl: string
  counselor_ratesum: number
  counselor_introduction: string
  career_content: string[]
  counselor_school: string
  evaluations: Evaluation[]
}

const DUMMY_DATA: { [key: string]: Counselor } = {
  '1': {
    id: '1',
    imageUrl: 'image_url_1',
    counselor_ratesum: 5,
    counselor_introduction: 'Introduction 1',
    career_content: ['Career 1', 'Career 2', 'Career 3'],
    counselor_school: 'School 1',
    evaluations: [
      {
        evaluation_rate: 4.5,
        evaluation_content: 'Evaluation Content 1',
      },
      {
        evaluation_rate: 4,
        evaluation_content: 'Evaluation Content 2',
      },
    ],
  },
  // ... 다른 더미 데이터 추가 가능
}

export const CounselorDetail: React.FC = () => {
  const params = useParams<{ id: string }>()

  console.log(params)

  // id 값이 존재하는지 체크
  if (!params.id) {
    return <div>Invalid id provided.</div>
  }

  // 상담사 데이터 가져오기, 지금은 더미데이터임
  const counselorData = DUMMY_DATA[params.id]

  // undefined 체크
  if (!counselorData) {
    return <div>상담사 정보를 찾을 수 없습니다.</div>
  }

  return (
    <div className="container">
      <div className="profile-section">
        <img src={counselorData.imageUrl} alt="Profile" />
        <div>상담사 아이디: {params.id}</div>
        <div>상담사 평점: {counselorData.counselor_ratesum}</div>
      </div>
      <div className="detail-section">
        <h3>소개: {counselorData.counselor_introduction}</h3>
        <h3>학력: {counselorData.counselor_school}</h3>
        <h3>경력:</h3>
        <ul>
          {counselorData.career_content.map((career, index) => (
            <li key={index}>{career}</li>
          ))}
        </ul>
        <h3>후기:</h3>
        <ul>
          {counselorData.evaluations.map((evaluation, index) => (
            <li key={index}>
              평점: {evaluation.evaluation_rate}, 내용:{' '}
              {evaluation.evaluation_content}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
