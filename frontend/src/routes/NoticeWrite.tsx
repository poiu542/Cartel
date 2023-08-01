import React from 'react'
import { Write } from './../components/Write'
import '../fonts/font.css'
export const NoticeWrite: React.FC = () => {
  return (
    <div>
      <Write name="공지사항 작성" />
      <h1 style={{ fontFamily: 'GangwonState' }}>강원~</h1>
      <h1 style={{ fontFamily: 'YeongdeokCrab' }}>영덕크랩</h1>
      <h1 style={{ fontFamily: 'KBO-Dia-Gothic_bold' }}>영덕크랩</h1>
      <h1 style={{ fontFamily: 'HANAMDAUM' }}>영덕크랩</h1>
      <h1 style={{ fontFamily: 'neurimboGothicRegular' }}>영덕크랩</h1>
      <h1 style={{ fontFamily: 'MBC1961GulimM' }}>영덕크랩</h1>
      <h1 style={{ fontFamily: 'TheJamsil5Bold' }}>영덕크랩</h1>
      <h1 style={{ fontFamily: 'KCC-Ganpan' }}>영덕크랩</h1>
      <h1 style={{ fontFamily: 'IAMAPLAYER' }}>영덕크랩</h1>

      <h1>폰트 미적용</h1>
    </div>
  )
}
