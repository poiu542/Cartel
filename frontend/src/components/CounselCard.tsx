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

// /* Group 41 */

// position: absolute;
// width: 347px;
// height: 339px;
// left: 1069px;
// top: 126px;

// /* Group 26 */

// position: absolute;
// width: 347px;
// height: 339px;
// left: 1069px;
// top: 126px;

// /* card */

// position: absolute;
// width: 347px;
// height: 339px;
// right: 24px;
// top: 126px;

// border-radius: 13px;

// /* Rectangle 2 */

// position: absolute;
// left: 0%;
// right: 0%;
// top: 0%;
// bottom: 0%;

// background: #FCFCFC;
// /* 테두리 */
// border: 1.5px solid #40BFFF;
// border-radius: 10px;

// /* Frame 27 */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: flex-start;
// padding: 0px;
// gap: 36px;

// position: absolute;
// width: 111px;
// height: 23.54px;
// right: 231px;
// top: 298px;

// /* 회차 수 */

// width: 111px;
// height: 25px;

// font-family: 'AppleSDGothicNeoSB00';
// font-style: normal;
// font-weight: 400;
// font-size: 24px;
// line-height: 33px;
// display: flex;
// align-items: center;
// text-align: center;

// color: #000000;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* Frame 30 */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: flex-start;
// padding: 0px;
// gap: 36px;

// position: absolute;
// width: 111px;
// height: 23.54px;
// right: 229px;
// top: 384.96px;

// /* 금액 */

// width: 111px;
// height: 25px;

// font-family: 'AppleSDGothicNeoSB00';
// font-style: normal;
// font-weight: 400;
// font-size: 24px;
// line-height: 33px;
// display: flex;
// align-items: center;
// text-align: center;

// color: #000000;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* 긍정 에너지를 충전하는 셀프 케어 */

// position: absolute;
// width: 328px;
// height: 82.87px;
// right: 33px;
// top: 126px;

// font-family: 'AppleSDGothicNeoEB00';
// font-style: normal;
// font-weight: 400;
// font-size: 24px;
// line-height: 34px;
// display: flex;
// align-items: center;
// text-align: center;

// color: #000000;

// /* Group 22 */

// position: absolute;
// width: 113px;
// height: 37.67px;
// left: 1088px;
// top: 208.87px;

// /* Vector */

// box-sizing: border-box;

// position: absolute;
// width: 23.22px;
// height: 20.93px;
// right: 328.78px;
// top: 216.4px;

// background: #FFF50E;
// border: 1px solid #000000;

// /* 4.8 */

// position: absolute;
// width: 42px;
// height: 35.78px;
// right: 281px;
// top: 208.87px;

// font-family: 'AppleSDGothicNeoSB00';
// font-style: normal;
// font-weight: 400;
// font-size: 24px;
// line-height: 33px;
// display: flex;
// align-items: center;
// text-align: center;

// color: #000000;

// /* (30) */

// position: absolute;
// width: 42px;
// height: 35.78px;
// right: 239px;
// top: 210.75px;

// font-family: 'AppleSDGothicNeoR00';
// font-style: normal;
// font-weight: 400;
// font-size: 20px;
// line-height: 26px;
// display: flex;
// align-items: center;
// text-align: center;

// color: #000000;

// /* Frame 28 */

// /* Auto layout */
// display: flex;
// flex-direction: column;
// align-items: flex-start;
// padding: 0px;
// gap: 9px;

// position: absolute;
// width: 111px;
// height: 23.54px;
// right: 231px;
// top: 260px;

// /* Frame 25 */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: flex-start;
// padding: 0px;
// gap: 36px;

// width: 111px;
// height: 25px;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* 진행시간 */

// width: 111px;
// height: 25px;

// font-family: 'AppleSDGothicNeoSB00';
// font-style: normal;
// font-weight: 400;
// font-size: 24px;
// line-height: 33px;
// display: flex;
// align-items: center;
// text-align: center;

// color: #000000;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* Frame 26 */

// position: absolute;
// width: 172px;
// height: 23.54px;
// right: 33px;
// top: 260px;

// /* 화, 목 (13:00 ~ 15:00) */

// position: absolute;
// width: 172px;
// height: 25px;
// left: 0px;
// top: 0px;

// font-family: 'AppleSDGothicNeoR00';
// font-style: normal;
// font-weight: 400;
// font-size: 16px;
// line-height: 21px;
// display: flex;
// align-items: center;
// text-align: center;

// color: #000000;

// /* Frame 29 */

// position: absolute;
// width: 172px;
// height: 23.54px;
// right: 33px;
// top: 298px;

// /* 16회 */

// position: absolute;
// width: 172px;
// height: 25px;
// left: 0px;
// top: 0px;

// font-family: 'AppleSDGothicNeoR00';
// font-style: normal;
// font-weight: 400;
// font-size: 16px;
// line-height: 21px;
// display: flex;
// align-items: center;
// text-align: center;

// color: #000000;

// /* Frame 31 */

// position: absolute;
// width: 172px;
// height: 23.54px;
// right: 33px;
// top: 383.08px;

// /* 39000원 */

// position: absolute;
// width: 172px;
// height: 25px;
// left: 0px;
// top: 0px;

// font-family: 'AppleSDGothicNeoR00';
// font-style: normal;
// font-weight: 400;
// font-size: 16px;
// line-height: 21px;
// display: flex;
// align-items: center;
// text-align: center;

// color: #000000;

// /* Line 1 */

// position: absolute;
// width: 282px;
// height: 0px;
// right: 52px;
// top: 376px;

// border: 1px solid #000000;

// /* button */

// position: absolute;
// width: 284px;
// height: 33.9px;
// right: 54px;
// top: 418.86px;

// /* Rectangle 1 */

// position: absolute;
// left: 0%;
// right: 0%;
// top: 0%;
// bottom: 0%;

// /* 테두리 */
// background: #40BFFF;
// border-radius: 13px;

// /* button */

// position: absolute;
// left: 14.29%;
// right: 14.29%;
// top: 10.42%;
// bottom: 10.42%;

// font-family: 'AppleSDGothicNeoEB00';
// font-style: normal;
// font-weight: 400;
// font-size: 20px;
// line-height: 29px;
// display: flex;
// align-items: center;
// text-align: center;

// color: #FFFFFF;

// border: 1px solid rgba(0, 0, 0, 0.5);

// /* Frame 27 */

// /* Auto layout */
// display: flex;
// flex-direction: column;
// align-items: flex-start;
// padding: 0px;
// gap: 13px;

// position: absolute;
// width: 24px;
// height: 22.6px;
// right: 334px;
// top: 260px;

// /* ⏰ */

// width: 24px;
// height: 24px;

// font-family: 'AppleSDGothicNeoSB00';
// font-style: normal;
// font-weight: 400;
// font-size: 24px;
// line-height: 33px;
// display: flex;
// align-items: center;
// text-align: center;

// color: #000000;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* Frame 32 */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: flex-start;
// padding: 0px;
// gap: 36px;

// position: absolute;
// width: 111px;
// height: 23.54px;
// right: 231px;
// top: 338px;

// /* 참여인원 */

// width: 111px;
// height: 25px;

// font-family: 'AppleSDGothicNeoSB00';
// font-style: normal;
// font-weight: 400;
// font-size: 24px;
// line-height: 33px;
// display: flex;
// align-items: center;
// text-align: center;

// color: #000000;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* 💁 */

// position: absolute;
// width: 24px;
// height: 22.6px;
// right: 334px;
// top: 340.83px;

// font-family: 'AppleSDGothicNeoR00';
// font-style: normal;
// font-weight: 400;
// font-size: 16px;
// line-height: 21px;
// display: flex;
// align-items: center;
// text-align: center;

// color: #000000;

// /* Frame 33 */

// position: absolute;
// width: 172px;
// height: 23.54px;
// right: 33px;
// top: 338px;

// /* 최소 4명 ~ 최대 12명 */

// position: absolute;
// width: 172px;
// height: 25px;
// left: 0px;
// top: 0px;

// font-family: 'AppleSDGothicNeoR00';
// font-style: normal;
// font-weight: 400;
// font-size: 16px;
// line-height: 21px;
// display: flex;
// align-items: center;
// text-align: center;

// color: #000000;

// /* Idea */

// position: absolute;
// width: 24px;
// height: 22.6px;
// left: 1080px;
// top: 302px;

// background: url(.png);
