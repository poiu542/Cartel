import React, { useState } from 'react'
import Carousel from '../components/Carousel'
import NavbarLogin from '../components/NavbarLogin'
import CounselorCard from '../components/CounselorCard'
import PreviewBox from '../components/PreviewBox'
import Footer from '../components/Footer'
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects'

export const Main = () => {
  const onCardClick = () => {
    alert('상담 정보 보기')
  }
  const ViewAll = () => {
    alert('더보기')
  }

  return (
    <div>
      <div className="Navbar">
        <NavbarLogin />
      </div>
      <div className="Carousel">
        <Carousel />
      </div>
      <div
        className="blank"
        style={{
          height: '150px',
          width: '100%',
        }}
      >
        <div
          className="service introduce"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <EmojiObjectsIcon
            style={{
              color: 'yellow',
              backgroundColor: '#E8E596',
              border: '0.5px solid #DDD73F',
            }}
          />
          <span>서비스 소개</span>
        </div>
        <div className="service introduce">
          <EmojiObjectsIcon
            style={{
              color: 'yellow',
              backgroundColor: '#E8E596',
              border: '0.5px solid #DDD73F',
            }}
          />
          서비스 소개
        </div>
        <div className="service introduce">
          <EmojiObjectsIcon
            style={{
              color: 'yellow',
              backgroundColor: '#E8E596',
              border: '0.5px solid #DDD73F',
            }}
          />
          서비스 소개
        </div>
        <div className="service introduce">
          <EmojiObjectsIcon
            style={{
              color: 'yellow',
              backgroundColor: '#E8E596',
              border: '0.5px solid #DDD73F',
            }}
          />
          서비스 소개
        </div>
        <div className="service introduce">
          <EmojiObjectsIcon
            style={{
              color: 'yellow',
              backgroundColor: '#E8E596',
              border: '0.5px solid #DDD73F',
            }}
          />
          서비스 소개
        </div>
        <div className="service introduce">
          <EmojiObjectsIcon
            style={{
              color: 'yellow',
              backgroundColor: '#E8E596',
              border: '0.5px solid #DDD73F',
            }}
          />
          서비스 소개
        </div>
      </div>
      <div
        className="counsel list"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          backgroundColor: '#ECF9FF',
          height: '409px',
          width: '100%',
          gap: '100px',
        }}
      >
        <CounselorCard
          onCardClick={onCardClick}
          name="석민혁"
          grade={4.8}
          gradeCount={51}
          introduce="족구왕이 될 사나이"
        />
        <CounselorCard
          onCardClick={onCardClick}
          name="이순신"
          grade={4.7}
          gradeCount={45}
          introduce="해상 전략가"
        />
        <CounselorCard
          onCardClick={onCardClick}
          name="박찬호"
          grade={4.9}
          gradeCount={53}
          introduce="야구 선수"
        />
      </div>
      <div
        className="blank"
        style={{
          height: '150px',
          width: '100%',
        }}
      ></div>
      <div
        className="article list"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          backgroundColor: '#ECF9FF',
          height: '600px',
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '50%',
          }}
        >
          <div
            className="BEST article box"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '13px',
              backgroundColor: 'white',
              width: '313px',
              height: '70px',
              color: '#40BFFF',
              margin: '30px',
              fontSize: '20px',
            }}
          >
            BEST 게시글
          </div>
          <PreviewBox
            title="BEST 게시글"
            posts={[
              { title: '[공지] 상담일정 변경 안내' },
              { title: '공지2' },
              { title: '공지3' },
              { title: '공지4' },
            ]}
            onClick={ViewAll}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '50%',
          }}
        >
          <div
            className="HOT article box"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '13px',
              backgroundColor: 'white',
              width: '313px',
              height: '70px',
              color: '#40BFFF',
              margin: '30px',
              fontSize: '20px',
            }}
          >
            HOT 게시글
          </div>
          <PreviewBox
            title="HOT 게시글"
            posts={[
              { title: '[공지] 상담일정 변경 안내' },
              { title: '공지2' },
              { title: '공지3' },
              { title: '공지4' },
            ]}
            onClick={ViewAll}
          />
        </div>
      </div>
      <div
        className="blank"
        style={{
          height: '150px',
          width: '100%',
        }}
      ></div>
      <Footer />
    </div>
  )
}
