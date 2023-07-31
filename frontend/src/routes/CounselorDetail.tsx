import React from 'react'
import { useParams } from 'react-router-dom'
import { FlexContainerRow, FlexContainer } from '../styles/MainStyle'
import { padding } from '@mui/system'

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
    imageUrl:
      'https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/5U3n/image/MEdGxSIxzO4h9s6d_SjkKtd_sjA.jpg',
    counselor_ratesum: 5, // 나중에 총 평점 평균 로직 작성
    counselor_introduction: '당신에게 소금 같은 사람이 되고 싶습니다.',
    career_content: [
      '상담심리사 2급 (한국상담심리학회)',
      '전문코치 KPC (한국코치협회)',
      '전문심리상담 및 코치 경력 (8년)',
    ],
    counselor_school: '연세대학교 일반대학원 상담심리 석사 졸업',
    evaluations: [
      {
        evaluation_rate: 4.5,
        evaluation_content:
          '잘 공감해 주시고 위로해주시고 제 문제를 접근하는 구체적인 방법을 설명해주셨습니다',
      },
      {
        evaluation_rate: 4,
        evaluation_content: '답답한게 쫌 시원해져요',
      },
    ],
  },
  // ... 다른 더미 데이터 추가 가능
}

export const CounselorDetail: React.FC = () => {
  const params = useParams<{ counselorId: string }>()

  // id 값이 존재하는지 체크
  if (!params.counselorId) {
    return <div>Invalid id provided.</div>
  }

  // 상담사 데이터 가져오기, 지금은 더미데이터임
  const counselorData = DUMMY_DATA[params.counselorId]

  // undefined 체크
  if (!counselorData) {
    return <div>상담사 정보를 찾을 수 없습니다.</div>
  }

  return (
    <div className="container" style={{ padding: '30px' }}>
      <FlexContainerRow>
        <FlexContainer style={{ background: '#ecf9ff' }}>
          <img
            src={counselorData.imageUrl}
            alt="Profile"
            style={{ width: 200, height: 200 }}
          />
          <div>상담사 아이디(추후 삭제): {params.counselorId}</div>
          <div>
            <img
              src="/image/star.png"
              alt="star"
              style={{
                marginRight: '10px',
                width: '15px',
                height: '15px',
              }}
            />{' '}
            {counselorData.counselor_ratesum}
          </div>
        </FlexContainer>
        <FlexContainer>
          <FlexContainer style={{ background: '#ecf9ff' }}>
            <h3>소개: {counselorData.counselor_introduction}</h3>
          </FlexContainer>
          <FlexContainerRow style={{ background: '#ecf9ff' }}>
            <h3>경력:</h3>
            <ul>
              {counselorData.career_content.map((career, index) => (
                <li key={index}>{career}</li>
              ))}
            </ul>
            <h3>학력: {counselorData.counselor_school}</h3>
          </FlexContainerRow>
          <FlexContainer style={{ background: '#ecf9ff' }}>
            <h3>후기:</h3>
            <ul>
              {counselorData.evaluations.map((evaluation, index) => (
                <li key={index}>
                  평점: {evaluation.evaluation_rate}, 내용:{' '}
                  {evaluation.evaluation_content}
                </li>
              ))}
            </ul>
          </FlexContainer>
        </FlexContainer>
      </FlexContainerRow>
    </div>
  )
}
