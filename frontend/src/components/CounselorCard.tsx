import React from 'react'

interface CounselorCardProps {
  name: string
  startTime: string
  endTime: string
  selectDay: string[]
  grade: number
}

const CounselorCard: React.FC<CounselorCardProps> = ({
  name,
  startTime,
  endTime,
  selectDay,
  grade,
}) => (
  <div
    className="Card"
    style={{
      display: 'flex',
      justifyContent: 'center',
      width: '100vw',
      height: '100vh',
    }}
  >
    <div>
      <div
        className="top"
        style={{
          justifyContent: 'space-between',
          display: 'flex',
          alignItems: 'center',
          border: '1px solid #40BFFF',
          borderRadius: '20px 20px 0px 0px',
          width: '363px',
          height: '149px',
          background: '#ECF9FF',
        }}
      >
        <div>
          <img src="./image/logo.png" alt="logo" />
        </div>
        <div
          className="counselor data"
          style={{}}
          // onClick={onClick}
        >
          이름 : {name} <br />
          시작 시간 : {startTime}
          <br />
          종료 시간 : {endTime}
          <br />
          선택 요일 : {selectDay.join(', ')}
          {/* 선택 요일 : {selectDay.map(day => <div key={day}>{day}</div>)} */}
          <br />
          평점 : {grade}
          <br />
        </div>
      </div>
      <div
        className="bottom"
        style={{
          border: '1px solid #40BFFF',
          borderRadius: '0px 0px 20px 20px',
          width: '363px',
          height: '51px',
        }}
      ></div>
    </div>
  </div>
)

export default CounselorCard

// /* 상담 리스트 카드 */

// position: absolute;
// width: 363px;
// height: 200px;
// left: 476px;
// top: 0px;

// /* Rectangle 7 */

// box-sizing: border-box;

// position: absolute;
// left: 0%;
// right: 0%;
// top: 0%;
// bottom: 25.5%;

// /* 배경화면 */
// background: #ECF9FF;
// /* 테두리 */
// border: 1px solid #40BFFF;
// border-radius: 20px 20px 0px 0px;

// /* Rectangle 8 */

// box-sizing: border-box;

// position: absolute;
// left: 0%;
// right: 0%;
// top: 74.5%;
// bottom: 0%;

// background: #FFFFFF;
// /* 테두리 */
// border: 1px solid #40BFFF;
// border-radius: 0px 0px 20px 20px;

// /* Group 12 */

// position: absolute;
// left: 4.13%;
// right: 61.16%;
// top: 6.5%;
// bottom: 30%;

// /* Group 11 */

// position: absolute;
// left: 4.13%;
// right: 61.16%;
// top: 6.5%;
// bottom: 30%;

// /* Ellipse 5 */

// position: absolute;
// left: 4.13%;
// right: 61.16%;
// top: 6.5%;
// bottom: 30%;

// background: #D9D9D9;

// /* image 6 */

// position: absolute;
// left: 12.67%;
// right: 69.97%;
// top: 21.5%;
// bottom: 49.5%;

// background: url(image.png);

// /* 상담 제목 */

// position: absolute;
// left: 8.54%;
// right: 9.64%;
// top: 79%;
// bottom: 8%;

// font-family: 'AppleSDGothicNeoSB00';
// font-style: normal;
// font-weight: 400;
// font-size: 20px;
// line-height: 28px;
// display: flex;
// align-items: center;
// text-align: center;

// color: #000000;

// /* Vector */

// box-sizing: border-box;

// position: absolute;
// left: 60.06%;
// right: 33.55%;
// top: 47%;
// bottom: 41.89%;

// background: #FFF50E;
// border: 1px solid #000000;

// /* Group 17 */

// position: absolute;
// left: 49.59%;
// right: 0%;
// top: 11.5%;
// bottom: 38%;

// /* Frame 20 */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: center;
// padding: 0px;

// position: absolute;
// left: 63.36%;
// right: 0%;
// top: 44.5%;
// bottom: 38%;

// /* 평점 */

// width: 103px;
// height: 35px;

// font-family: 'AppleSDGothicNeoR00';
// font-style: normal;
// font-weight: 400;
// font-size: 24px;
// line-height: 31px;
// display: flex;
// align-items: center;
// text-align: center;

// color: #000000;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* 상담 시간 */

// position: absolute;
// left: 49.59%;
// right: 7.71%;
// top: 28.5%;
// bottom: 54%;

// font-family: 'AppleSDGothicNeoR00';
// font-style: normal;
// font-weight: 400;
// font-size: 16px;
// line-height: 21px;
// display: flex;
// align-items: center;
// text-align: center;

// color: #000000;

// /* 상담사 이름 */

// position: absolute;
// left: 49.86%;
// right: 7.44%;
// top: 11.5%;
// bottom: 71%;

// font-family: 'AppleSDGothicNeoR00';
// font-style: normal;
// font-weight: 400;
// font-size: 24px;
// line-height: 31px;
// display: flex;
// align-items: center;
// text-align: center;

// color: #000000;
