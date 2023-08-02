import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { FlexContainer } from '../styles/MainStyle'

interface Slide {
  imageUrl: string
  text: string
  header: string
}

const fadeInOut = keyframes`
  0% { opacity: 0;  }
  100% { opacity: 1;  }
`

const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
`

const CarouselItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 300px;
  animation: ${fadeInOut} 0.3s ease-in-out;
  background: linear-gradient(to right, #5f9ea0, #6495ed);
`

const CarouselHeader = styled.div`
  left: 10px;
  font-size: 25px;
  fonr-weight: bold;
  color: white;
`

const CarouselImage = styled.img`
  width: 30%;
  height: 70%;
  object-fit: cover;
`

const CarouselText = styled.p`
  bottom: 10px;
  left: 10px;
  font-size: 30px;
  font-weight: bold;
  color: white;
`

const IndicatorsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`

const Indicator = styled.div`
  width: 13px;
  height: 13px;
  background-color: #ccc;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;

  &.active {
    background-color: #40bfff;
    width: 30px;
    border-radius: 20%;
  }
`

const Carousel: React.FC = () => {
  const carouselData: Slide[] = [
    {
      imageUrl: '/friend.jpg',
      header: '떠나요, 내 꿈을 위한 여행',
      text: '전문 코칭과 함께 \n나만의 목표를 달성해봐요',
    },
    {
      imageUrl: '/friend.jpg',
      header: '같은 고민을 같이 공감해요',
      text: '함께 고민을 나누는 \n공감 테라피',
    },
    {
      imageUrl: '/friend.jpg',
      header: '멋진 상담사님들을 모십니다',
      text: '서비스를 통해 \n많은 분들과 함께해요',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length)
    }

    const timer = setInterval(nextSlide, 3000)

    return () => {
      clearInterval(timer)
    }
  }, [currentIndex, carouselData.length])

  return (
    <CarouselContainer>
      {/* 이미지와 텍스트를 표시하는 부분 */}
      <CarouselItem key={currentIndex}>
<<<<<<< HEAD
        <FlexContainer>
          <CarouselHeader>{carouselData[currentIndex].header}</CarouselHeader>
          <CarouselText
            dangerouslySetInnerHTML={{
              __html: carouselData[currentIndex].text.replace(/\n/g, '<br />'),
            }}
          />
        </FlexContainer>
=======
        <CarouselText style={{ color: '#3b478f', fontSize: '20px' }}>
          {carouselData[currentIndex].text}
          <p style={{ fontSize: '13px' }}>
            아이브 장원영 최이서 안유진 리즈 김가을 레이
          </p>
        </CarouselText>
>>>>>>> 4f8c0f25995839f2d7617b01e052b8490680d9c1
        <CarouselImage
          src={carouselData[currentIndex].imageUrl}
          alt={`Slide ${currentIndex + 1}`}
        />
      </CarouselItem>

      {/* 인디케이터 부분 */}
      <IndicatorsContainer>
        {carouselData.map((slide, index) => (
          <Indicator
            key={index}
            className={currentIndex === index ? 'active' : ''}
            onClick={() => goToSlide(index)}
          />
        ))}
      </IndicatorsContainer>
    </CarouselContainer>
  )
}

export default Carousel
