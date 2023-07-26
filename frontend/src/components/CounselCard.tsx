import React from 'react'
import Button from './Button'

interface CounselCardProps {
  name: string
  grade: number
  gradeCount: number
  title: string
  startTime: string
  endTime: string
  sessionCount: number
  minParticipantCount: number
  maxParticipantCount: number
  price: number
}

const CounselorCard: React.FC<CounselCardProps> = ({
  name,
  grade,
  gradeCount,
  startTime,
  endTime,
  title,
  sessionCount,
  minParticipantCount,
  maxParticipantCount,
  price,
}) => {
  const handleClick = () => {
    alert('버튼클릭')
  }
  return (
    <div
      className="counsel card"
      style={{
        border: '1px solid #40BFFF',
        borderRadius: '20px',
        width: '347px',
        height: '339px',
      }}
    >
      <div className="counsel title" style={{}}>
        <h2>{title}</h2>
      </div>
      <div
        className="counselor grade"
        style={{ display: 'flex', alignItems: 'center', marginLeft: '30px' }}
      >
        <img
          src="./image/star.png"
          alt="star"
          style={{
            marginRight: '10px',
          }}
        />
        <span style={{ display: 'flex', position: 'relative' }}>
          <p style={{ margin: '0px', fontSize: '25px' }}>{grade}</p>
          <p
            style={{
              marginLeft: '5px',
              position: 'absolute',
              bottom: '0px',
              left: '30px',
              fontSize: '5px',
            }}
          >
            ({gradeCount})
          </p>
        </span>
      </div>
      <div
        className="fields"
        style={{
          textAlign: 'left',
          marginTop: '10px',
          marginLeft: '30px',
        }}
      >
        <div
          className="fields"
          style={{ textAlign: 'left', marginTop: '10px' }}
        >
          <div
            className="field"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '10px',
            }}
          >
            <div className="counsel name">이름:</div>
            <div style={{ marginRight: '30px' }}>{name}</div>
          </div>
          <div
            className="field"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '10px',
            }}
          >
            <div className="time">진행시간:</div>
            <div style={{ marginRight: '30px' }}>
              {startTime} - {endTime}
            </div>
          </div>
          <div
            className="field"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '10px',
            }}
          >
            <div className="session count">회차 수:</div>
            <div style={{ marginRight: '30px' }}>{sessionCount}회</div>
          </div>
          <div
            className="field"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '10px',
            }}
          >
            <div className="participant count">참여 인원:</div>
            <div style={{ marginRight: '30px' }}>
              {minParticipantCount} - {maxParticipantCount}명
            </div>
          </div>
          <div
            className="field"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '10px',
            }}
          >
            <div className="price">금액:</div>
            <div style={{ marginRight: '30px' }}>{price}원</div>
          </div>
        </div>
      </div>
      <div
        style={{
          borderTop: '1px solid black',
          margin: '10px 30px',
        }}
      />

      <div
        className="button"
        style={{ marginTop: '16px', marginLeft: '30px', marginRight: '30px' }}
      >
        <Button
          border={{ radius: '0.625rem', borderColor: '#40BFFF' }}
          size={{ width: '100%', height: '40px' }}
          color={{ background: '#40BFFF', color: 'white' }}
          text="신청하기"
          onClick={handleClick}
        />
      </div>
    </div>
  )
}

export default CounselorCard
