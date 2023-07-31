import React, { useState } from 'react'
import Carousel from '../components/Carousel'
import NavbarLogin from '../components/NavbarLogin'
import NavbarLogout from '../components/NavbarLogout'
import CounselorCard from '../components/CounselorCard'
import PreviewBox from '../components/PreviewBox'
import Footer from '../components/Footer'
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects'
import PeopleIcon from '@mui/icons-material/People'
import ReceiptIcon from '@mui/icons-material/Receipt'
import SpeedIcon from '@mui/icons-material/Speed'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import CampaignIcon from '@mui/icons-material/Campaign'
import { useNavigate } from 'react-router-dom'

export const Main = () => {
  const navigate = useNavigate()
  const onCardClick = () => {
    alert('상담 정보 보기')
  }
  const ViewAll = () => {
    alert('더보기')
  }
  const ViewAllCounselor = () => {
    navigate(`/counselor`)
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
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <EmojiObjectsIcon
              style={{
                color: '#FAC42F',
                backgroundColor: '#E8E596',

                marginTop: '50px',
                scale: '3',
              }}
            />
            <span
              style={{ padding: '30px', fontSize: '13px', fontWeight: 'bold' }}
            >
              서비스 소개
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <CampaignIcon
              style={{
                color: '#33C3F0',
                backgroundColor: '#B3E5FC',

                marginTop: '50px',
                scale: '3',
              }}
            />
            <span
              style={{ padding: '30px', fontSize: '13px', fontWeight: 'bold' }}
            >
              마약 소개
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <PeopleIcon
              style={{
                color: '#FF4081',
                backgroundColor: '#FF80AB',

                marginTop: '50px',
                scale: '3',
              }}
            />
            <span
              style={{ padding: '30px', fontSize: '13px', fontWeight: 'bold' }}
            >
              자조모임이란?
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <SpeedIcon
              style={{
                color: '#00E676',
                backgroundColor: '#B9F6CA',
                marginTop: '50px',
                scale: '3',
              }}
            />
            <span
              style={{ padding: '30px', fontSize: '13px', fontWeight: 'bold' }}
            >
              중독검사
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <ReceiptIcon
              style={{
                color: '#651FFF',
                backgroundColor: '#B388FF',

                marginTop: '50px',
                scale: '3',
              }}
            />
            <span
              style={{ padding: '30px', fontSize: '13px', fontWeight: 'bold' }}
            >
              심리테스트
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <ShoppingCartIcon
              style={{
                color: '#FF6E40',
                backgroundColor: '#FF9E80',
                marginTop: '50px',
                scale: '3',
              }}
            />
            <span
              style={{ padding: '30px', fontSize: '13px', fontWeight: 'bold' }}
            >
              카르텔몰
            </span>
          </div>
        </div>
      </div>
      <div
        className="counsel list"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          flexDirection: 'row',
          backgroundColor: '#ECF9FF',
          height: '350px',
          width: '100%',
          gap: '100px',
          position: 'relative',
          paddingTop: '50px',
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
        <button
          onClick={ViewAllCounselor}
          style={{
            position: 'absolute',
            bottom: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            padding: '10px 20px',
            backgroundColor: '#40BFFF',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '30px',
            width: '1000px',
            marginBottom: '30px',
          }}
        >
          상담사 더보기
        </button>
      </div>

      <div
        className="blank"
        style={{
          height: '300px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          className="box"
          style={{
            backgroundColor: '#0683C9',
            width: '1400px',
            height: '150px',
            borderRadius: '13px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'left',
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          오프라인에서도 카르텔을 만나보세요
        </div>
      </div>
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
