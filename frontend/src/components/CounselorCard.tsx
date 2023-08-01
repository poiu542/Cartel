import React from 'react'

interface CounselorCardProps {
  name: string
  grade: number
  gradeCount: number
  introduce: string
  onCardClick: () => void
}

const CounselorCard: React.FC<CounselorCardProps> = ({
  name,
  grade,
  gradeCount,
  introduce,
  onCardClick = () => {},
}) => (
  <div
    className="counselor card"
    style={{
      display: 'flex',
      justifyContent: 'center',
      width: '363px',
      height: '200px',
      cursor: 'pointer',
    }}
    onClick={onCardClick}
  >
    <div>
      <div
        className="top"
        style={{
          justifyContent: 'space-between',
          display: 'flex',
          alignItems: 'center',
          border: '5px solid #40BFFF',
          borderRadius: '20px',
          width: '363px',
          height: '200px',
          background: 'white',
          boxShadow: '10px 10px gray',
        }}
      >
        <div
          className="counselor profile image"
          style={{
            marginLeft: '30px',
          }}
        >
          <img
            src="./image/profileImg2.png"
            alt="logo"
            style={{
              width: '130px',
              height: '130px',
            }}
          />
        </div>
        <div
          className="counselor data"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: '30px',
          }}
        >
          <div className="counselor name" style={{ fontSize: '23px' }}>
            <h3>{name}</h3>
          </div>
          <div className="counselor introduce" style={{ fontSize: '15px' }}>
            {introduce}
          </div>
          <br />
          <div
            className="counselor grade"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <img
              src="./image/star.png"
              alt="star"
              style={{
                marginRight: '10px',
              }}
            />
            {grade} ({gradeCount})
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default CounselorCard
