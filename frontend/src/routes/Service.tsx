import React from 'react'
import { LeftPictureCard, RightPictureCard } from '../components/PictureCard'
import NavbarLogin from '../components/NavbarLogin'
import styled from 'styled-components'
import Footer from '../components/Footer'

// Import the font.css file
import '../fonts/font.css'

const PageContainer = styled.div`
  padding: 50px;
  background-color: #f7f9fc;
  min-height: 100vh;
  font-family: 'Arial';
`

const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  margin-bottom: 30px;
`

const Subtitle = styled.h2`
  font-size: 1.8em;
  text-align: center;
  margin-bottom: 50px;
`

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
`

export const Service = () => {
  return (
    <>
      <NavbarLogin />
      <PageContainer>
        <Title style={{ marginTop: '35px' }}>'우린 약하지 않아' 에서</Title>
        <Title style={{ marginBottom: '100px' }}>
          단약 의지를 강화해보세요
        </Title>
        <img
          src="https://modo-phinf.pstatic.net/20211205_216/1638700998315KFpFr_PNG/mosaSSrNq0.png?type=w1100"
          alt=""
          style={{ width: '100%', marginBottom: '50px' }}
        />
        <Subtitle>우리의 핵심 기능들을 만나보세요.</Subtitle>
        <CardsContainer style={{ margin: '0px 200px 0px 200px' }}>
          <LeftPictureCard
            imageSrc="/image/cat.png"
            title="서비스 1"
            subtitle="서비스 1 설명"
            content="이곳에는 서비스의 상세 설명이는 서비스의 상세 설명이는 서비스의 상세 설명이 들어갑니다."
          />
          <RightPictureCard
            imageSrc="/image/dog.png"
            title="서비스 2"
            subtitle="서비스 2 설명"
            content="이곳에는 서비스의 상세 설명이 들어갑니다."
          />
          <LeftPictureCard
            imageSrc="/image/dog.png"
            title="서비스 3"
            subtitle="서비스 3 설명"
            content="이곳에는 서비스의 상세 설명이 들어갑니다."
          />
          <RightPictureCard
            imageSrc="/image/dog.png"
            title="서비스 3"
            subtitle="서비스 3 설명"
            content="이곳에는 서비스의 상세 설명이 들어갑니다."
          />
          <LeftPictureCard
            imageSrc="/image/dog.png"
            title="서비스 3"
            subtitle="서비스 3 설명"
            content="이곳에는 서비스의 상세 설명이 들어갑니다."
          />
        </CardsContainer>
        <div style={{ height: '800px' }}>
          <h1>서비스 이용 방법, 서비스 스크린샷 찍기</h1>
        </div>
      </PageContainer>
      <Footer />
    </>
  )
}
