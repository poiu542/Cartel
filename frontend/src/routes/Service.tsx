import React from 'react'
import { LeftPictureCard, RightPictureCard } from '../components/PictureCard'
import NavbarLogin from '../components/NavbarLogin'
import { styled, keyframes } from 'styled-components'
import Footer from '../components/Footer'

// Import the font.css file
import '../fonts/font.css'

type TitleProps = {
  delay?: string
}

const PageContainer = styled.div`
  padding: 50px;
  background-color: #fafafa;
  min-height: 100vh;
  font-family: 'Arial';
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const Title = styled.h1<TitleProps>`
  font-size: 2.5em;
  text-align: center;
  margin-bottom: 30px;
  opacity: 0;
  animation: ${fadeIn} 2s forwards;
  animation-delay: ${(props) => props.delay || '0s'};
`

const Subtitle = styled.h2<{ shouldFadeIn: boolean }>`
  font-size: 1.8em;
  text-align: center;
  margin-bottom: 50px;
  opacity: ${(props) => (props.shouldFadeIn ? '1' : '0')};
  transition: opacity 2s;
`

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
`

export const Service = () => {
  const [isVisible, setIsVisible] = React.useState(false)
  const subtitleRef = React.useRef<HTMLHeadingElement | null>(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.1, // 10%가 보이면 알림을 받습니다.
      },
    )

    if (subtitleRef.current) {
      observer.observe(subtitleRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])
  return (
    <>
      <NavbarLogin />
      <PageContainer>
        <Title style={{ marginTop: '35px' }} delay="0.3s">
          '우린 약하지 않아' 에서
        </Title>
        <Title style={{ marginBottom: '100px' }} delay="0.8s">
          단약 의지를 강화해보세요
        </Title>
        <img
          src="https://modo-phinf.pstatic.net/20211205_216/1638700998315KFpFr_PNG/mosaSSrNq0.png?type=w1100"
          alt=""
          style={{ width: '100%', marginBottom: '50px' }}
        />
        <Subtitle ref={subtitleRef} shouldFadeIn={isVisible}>
          우리의 핵심 기능들을 만나보세요.
        </Subtitle>
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
