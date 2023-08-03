import React, { useState } from 'react'
import Carousel from '../components/Carousel'
import NavbarLogin from '../components/NavbarLogin'
import NavbarLogout from '../components/NavbarLogout'
import CounselorCard from '../components/CounselorCard'
import PreviewBox from '../components/PreviewBox'
import Footer from '../components/Footer'
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined'
// import PeopleIcon from '@mui/icons-material/People'
import ReceiptIcon from '@mui/icons-material/Receipt'
import SpeedIcon from '@mui/icons-material/Speed'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
// import CampaignIcon from '@mui/icons-material/Campaign'
import { useNavigate } from 'react-router-dom'
import GroupsIcon from '@mui/icons-material/Groups'
import VaccinesIcon from '@mui/icons-material/Vaccines'
import {
  FlexContainer,
  FlexContainerRow,
  FlexContainerAlignStart,
} from '../styles/MainStyle'
import StyledButton from '../styles/StyledButton'
import styled from 'styled-components'
// import { StyledDiv } from './../components/Write'

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

  const iconStyle = {
    padding: '30px',
    fontSize: '15px',
    fontWeight: 'bold',
    fontFamily: 'GangwonState',
  }

  const SurviceDiv = styled.div`
    background: #ffd359;
    color: white;
    border-radius: 5px;
    width: 50%;
    height: 164px;
  `
  const DrugDiv = styled.div`
    background: #fb7e71;
  `

  const GroupDiv = styled.div`
    background: #4bd4d5;
  `

  const ColumDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `

  const AllDiv = styled.div`
    display: flex;
    justify-content: space-between;
  `

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
            <EmojiObjectsOutlinedIcon
              style={{
                color: '#ffd359',
                marginTop: '50px',
                scale: '3',
              }}
            />
            <span style={iconStyle}>서비스 소개</span>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <VaccinesIcon
              style={{
                color: '#fb7e71',

                marginTop: '50px',
                scale: '3',
              }}
            />
            <span style={iconStyle}>마약 소개</span>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',

              alignItems: 'center',
            }}
          >
            <GroupsIcon
              style={{
                color: '#4bd4d5',

                marginTop: '50px',
                scale: '3',
              }}
            />
            <span style={iconStyle}>자조모임이란?</span>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontFamily: 'IAMAPLAYER',
              alignItems: 'center',
            }}
          >
            <SpeedIcon
              style={{
                color: '#9d9ff4',
                marginTop: '50px',
                scale: '3',
              }}
            />
            <span style={iconStyle}>중독검사</span>
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
                color: '#fd6f7a',
                fontFamily: 'TheJamsil5Bold',
                marginTop: '50px',
                scale: '3',
              }}
            />
            <span style={iconStyle}>심리테스트</span>
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
                color: '#e8b25c',
                fontFamily: 'TheJamsil5Bold',
                marginTop: '50px',
                scale: '3',
              }}
            />
            <span style={iconStyle}>카르텔몰</span>
          </div>
        </div>
      </div>
      {/* 상담사 카드 파트  카드 최대 4개까지만 보여주도록  리스트 더보기 추가하도록*/}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: '#ECF9FF',
          alignItems: 'center',
          marginBottom: '20px', // Add some spacing at the bottom
        }}
      >
        <h1
          style={{
            marginBottom: '1px',
            fontFamily: 'TheJamsil5Bold',
            // color: '#3b478f',
          }}
        >
          나에게 맞는 상담사를 찾아보세요!
        </h1>
        <p
          style={{
            marginBottom: '2px',
            fontSize: '18px',
            fontFamily: 'IAMAPLAYER',
            fontWeight: 600,
            color: 'gray',
          }}
        >
          검증된 상담사 분들이 여러분을 기다리고 있습니다.
        </p>
        <div
          className="counsel list"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexDirection: 'row',
            height: '350px',
            width: '100%',
            gap: '100px',
            position: 'relative',
            paddingTop: '50px',
          }}
        >
          {/* 카드 */}

          <CounselorCard
            onCardClick={onCardClick}
            name="석민혁"
            grade={3.9}
            gradeCount={51}
            introduce={
              '나는 멍청이 헤헤 나는 멍청이 헤헤 나는 멍청이 헤헤'
              // item.introduce.length > 27
              //   ? item.introduce.substring(0, 27) + '...'
              //   : item.introduce
            }
            imgSrc="/image/seulyoon.jpg"
          />
          <CounselorCard
            onCardClick={onCardClick}
            name="석민혁"
            grade={3.9}
            gradeCount={51}
            introduce={
              '나는 멍청이 헤헤 나는 멍청이 헤헤 나는 멍청이 헤헤'
              // item.introduce.length > 27
              //   ? item.introduce.substring(0, 27) + '...'
              //   : item.introduce
            }
            imgSrc="/image/seulyoon.jpg"
          />
          <CounselorCard
            onCardClick={onCardClick}
            name="이순신"
            grade={4.7}
            gradeCount={45}
            introduce="해상 전략가"
            imgSrc="./image/iesur.jpg"
          />
          <CounselorCard
            onCardClick={onCardClick}
            name="박찬호"
            grade={4.9}
            gradeCount={53}
            introduce="야구 선수"
            imgSrc="./image/profileImg2.png"
          />
          {/* <button
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
        </button> */}
        </div>
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
            background:
              'linear-gradient(to right, #0683C9, #42a1d1, #71c3eb, #a9e1ff)',
            width: '80%',
            height: '220px',
            borderRadius: '13px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'left',
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          <FlexContainerRow style={{ width: '100%' }}>
            <FlexContainer style={{ paddingLeft: '8%' }}>
              <StyledButton background="#00528F">심리상담소</StyledButton>
              <p style={{ fontSize: '30px' }}>
                카르텔을 통해 나와 비슷한 사람들을 만나보세요
              </p>
            </FlexContainer>
            <FlexContainer style={{ justifyContent: 'flex-end' }}>
              <img
                src="/friend.jpg"
                alt=""
                style={{
                  width: '250px',
                  height: '150px',
                }}
              />
            </FlexContainer>
          </FlexContainerRow>
        </div>
      </div>
      {/* best 게시글 */}
      <div
        className="article list"
        style={{
          display: 'flex',
          // backgroundColor: '#ECF9FF',
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
          {/* <div
            className="BEST article box"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '13px',
              backgroundColor: 'white',
              width: '313px',
              height: '70px',
              color: '#3b478f',
              margin: '30px',
              fontSize: '20px',
              border: '1px solid #3b478f',
            }}
          >
            BEST 게시글
          </div> */}
          <PreviewBox
            title="BEST 게시글"
            posts={[
              { title: '[공지] 상담일정 변경 안내' },
              { title: '공지2' },
              { title: '공지3' },
              { title: '공지4' },
            ]}
            onClick={ViewAll}
            width="300px"
            height="235px"
          />
        </div>
        {/* <FlexContainer style={{ width: '50%' }}>
          <FlexContainerRow>
            <FlexContainer style={{ justifyContent: 'space-between' }}>
              <GroupDiv style={{ height: '100%' }}>자조모임이란</GroupDiv>
              <DrugDiv>dafsdf</DrugDiv>
            </FlexContainer>
            <SurviceDiv>ㄴㅇㄴㅇ</SurviceDiv> */}
        {/* <div
            className="HOT article box"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '13px',
              backgroundColor: 'white',
              width: '313px',
              height: '70px',
              color: '#3b478f',
              margin: '30px',
              fontSize: '20px',
              border: '1px solid #3b478f',
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
          /> */}
        {/* </FlexContainerRow>
        </FlexContainer> */}
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
