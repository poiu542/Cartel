import React, { useState } from 'react'
import Carousel from '../components/Carousel'
import NavbarLogin from '../components/NavbarLogin'
import CounselorCard from '../components/CounselorCard'
import PreviewBox from '../components/PreviewBox'
import Footer from '../components/Footer'
// import CampaignIcon from '@mui/icons-material/Campaign'
import { useNavigate } from 'react-router-dom'
import { FlexContainer, FlexContainerRow } from '../styles/MainStyle'
import StyledButton from '../styles/StyledButton'
import styled from 'styled-components'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { GiPill } from 'react-icons/gi'
import { GoPeople } from 'react-icons/go'
import { LuInspect } from 'react-icons/lu'
import { MdOutlinePsychologyAlt } from 'react-icons/md'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Test } from '../components/Test'
import { Testimony } from './Testimony'
import TestimonyModal from '../components/TestimonyModal'

// import { StyledDiv } from './../components/Write'
import counselJournalModal from './../components/CounselJournalModal'
import CounselJournalModal from './../components/CounselJournalModal'
import { NoneStyledLink } from './../styles/Custom'

console.log('|\\_/|')
console.log('|%cq %cp %c|   /}', 'color:red', 'color:red', 'color:black')
console.log('( %c0 %c)"""\\', 'color:orange', 'color:black')
console.log('|"^"`    |')
console.log('||_/=\\\\__|')
console.log('불만 있으신 분들은: xogmamoc@naver.com으로 연락주세요')
console.log('도와주셔서 감사합니다.')

export const Main = () => {
  const navigate = useNavigate()
  const onCardClick = () => {
    alert('상담사 상세페이지에서 첫 번째 카드만 상세페이지 이동 돼요')
  }
  const ViewAll = () => {
    alert('더보기')
  }
  const ViewAllCounselor = () => {
    navigate(`/counselor`)
  }

  const counselorButtonClick = (id: number) => {
    navigate(`/counselor/${id}`)
  }
  const tempService = () => {
    alert('서비스 준비중입니다.')
    localStorage.setItem('user', 'testuser')
    console.log(localStorage.getItem('user'))
  }

  const goServicePage = () => {
    navigate('/service')
  }

  const goDrugPage = () => {
    navigate('/drug')
  }

  const goSelfHelpGroup = () => {
    navigate('/selfhelpgroup')
  }

  const goAddictTest = () => {
    window.location.href =
      'http://bgnmh.go.kr/checkmehealme/selftest/drgTest3.xx'
  }

  const iconStyle = {
    padding: '30px',
    fontSize: '14px',
    fontWeight: 'normal',
    fontFamily: 'MBC1961GulimM',
  }

  const SurviceDiv = styled.div`
    background: #ffd359;
    color: white;
    border-radius: 5px;
    width: 50%;
    height: 164px;
  `
  const DrugDiv = styled.div`
    background: #6081d1;
    color: white;
    border-radius: 5px;
    width: 50%;
    height: 164px;
  `

  const GroupDiv = styled.div`
    background: #00bc82;
    color: white;
    border-radius: 5px;
    width: 50%;
    height: 164px;
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
              cursor: 'pointer',
            }}
            onClick={goServicePage}
          >
            <HiMagnifyingGlass
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
              cursor: 'pointer',
            }}
            onClick={goDrugPage}
          >
            <GiPill
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
              cursor: 'pointer',
            }}
            onClick={goSelfHelpGroup}
          >
            <GoPeople
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
              cursor: 'pointer',
            }}
            onClick={goAddictTest}
          >
            <LuInspect
              style={{
                color: '#9d9ff4',
                marginTop: '50px',
                scale: '3',
              }}
            />
            <span style={iconStyle}>
              <NoneStyledLink to="http://bgnmh.go.kr/checkmehealme/selftest/drgTest3.xx">
                중독검사
              </NoneStyledLink>
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            onClick={tempService}
          >
            <MdOutlinePsychologyAlt
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
              cursor: 'pointer',
            }}
            onClick={tempService}
          >
            <AiOutlineShoppingCart
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
            height: '400px',
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
        <FlexContainer style={{ width: '50%', marginLeft: '100px' }}>
          <FlexContainerRow
            style={{
              width: '100%',
              height: '70%',
              padding: 0,
              justifyContent: 'space-around',
            }}
          >
            <SurviceDiv style={{ width: '30%', height: '100%' }}>
              <div style={{ padding: '10px 0px 0px 20px' }}>
                <p style={{ fontSize: '20px' }}>서비스소개</p>
                <p style={{ marginRight: '20px' }}>
                  WAW를 통해 사람들을 만나고 단약 의지를 강화해보세요.
                </p>
              </div>
            </SurviceDiv>
            <FlexContainer
              style={{
                width: '60%',
                padding: 0,
                justifyContent: 'space-between',
              }}
            >
              <GroupDiv
                style={{
                  width: '100%',
                  height: '45%',
                  verticalAlign: 'middle',
                }}
              >
                <FlexContainerRow>
                  <div style={{ padding: '10px 0px 0px 20px' }}>
                    <p style={{ fontSize: '20px' }}>자조모임이란</p>
                    <p style={{ marginRight: '20px' }}>
                      공통적인 문제를 가진 사람들이 모여 공통의 목적을 위하여
                      정기적인 모임을 통해 친목을 도모하고 사회활동을 하면서
                      정보를 공유하는 모임입니다.
                    </p>
                  </div>

                  {/* <img src="/image/dog.png" alt="" style={{ width: '150px' }} /> */}
                </FlexContainerRow>
              </GroupDiv>
              <DrugDiv style={{ width: '100%', height: '45%' }}>
                <div style={{ padding: '10px 0px 0px 20px' }}>
                  <p style={{ fontSize: '20px' }}>중독검사</p>
                  <p style={{ marginRight: '20px' }}>
                    여러분들의 상태를 자가진단 해보세요.
                  </p>
                </div>
              </DrugDiv>
            </FlexContainer>
          </FlexContainerRow>
        </FlexContainer>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '50%',
          }}
        >
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
      </div>
      <div
        className="blank"
        style={{
          height: '150px',
          width: '100%',
        }}
      ></div>
      <TestimonyModal />
      <CounselJournalModal />
      <Footer />
    </div>
  )
}
