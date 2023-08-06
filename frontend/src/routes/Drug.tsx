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

export const Drug = () => {
  return (
    <>
      <NavbarLogin />
      <PageContainer>
        <Title style={{ marginTop: '35px' }}>
          당신은 마약에 대해 얼마나 알고 있으신가요?
        </Title>
        <Title style={{ marginBottom: '100px' }}>
          마약에 대해 알려드릴게요
        </Title>
        <img
          src="/image/drugtitle.jpg"
          alt=""
          style={{ width: '100%', marginBottom: '50px' }}
        />
        <Subtitle>마약의 종류</Subtitle>
        <CardsContainer style={{ margin: '0px 200px 0px 200px' }}>
          <LeftPictureCard
            imageSrc="/image/drug1.jpg"
            title="펜타닐"
            subtitle="펜타닐은 ~~"
            content="이곳에는 서비스의 상세 설명이는 서비스의 상세 설명이는 서비스의 상세 설명이 들어갑니다."
          />
          <RightPictureCard
            imageSrc="/image/drug2.jpg"
            title="엑스터시"
            subtitle="서비스 2 설명"
            content="이곳에는 서비스의 상세 설명이 들어갑니다."
          />
          <LeftPictureCard
            imageSrc="/image/drug3.jpg"
            title="마리화나"
            subtitle="서비스 3 설명"
            content="이곳에는 서비스의 상세 설명이 들어갑니다."
          />
          <RightPictureCard
            imageSrc="/image/drug4.jpg"
            title="필로폰"
            subtitle="서비스 3 설명"
            content="이곳에는 서비스의 상세 설명이 들어갑니다."
          />
          <LeftPictureCard
            imageSrc="/image/drug5.jpg"
            title="헤로인"
            subtitle="서비스 3 설명"
            content="이곳에는 서비스의 상세 설명이 들어갑니다."
          />
        </CardsContainer>
        <div style={{ height: '800px' }}>
          <h1>마약 부작용</h1>
        </div>
      </PageContainer>
      <Footer />
    </>
  )
}
