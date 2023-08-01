import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'

interface Slide {
  imageUrl: string
  text: string
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
  background-color: #ecf9ff;
  background: linear-gradient(to right top, rgba(8, 241, 116, 0.39), #b7d1ff);
`

const CarouselImage = styled.img`
  width: 30%;
  height: 70%;
  object-fit: cover;
`

const CarouselText = styled.p`
  bottom: 10px;
  left: 10px;
  font-size: 18px;
  font-weight: bold;
`

const IndicatorsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`

const Indicator = styled.div`
  width: 10px;
  height: 10px;
  background-color: #ccc;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;

  &.active {
    background-color: #40bfff;
  }
`

const Carousel: React.FC = () => {
  const carouselData: Slide[] = [
    {
      imageUrl:
        'https://blog.kakaocdn.net/dn/28Dd5/btrfWKXfzPj/pWOE0n7CHbgG3jT3RIiWK0/img.gif',
      text: '첫 번째 슬라이드',
    },
    {
      imageUrl:
        'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbohPY4%2FbtrgblBwn6v%2FDKuPiKT0bFlyXduX8yjkI0%2Fimg.png',
      text: '두 번째 슬라이드',
    },
    {
      imageUrl:
        'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbq8Q8f%2FbtrgbaNu2gp%2FXU1AxRQWG2SQg8sKeeWff1%2Fimg.png',
      text: '세 번째 슬라이드',
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
        <CarouselText style={{ color: '#3b478f', fontSize: '20px' }}>
          {carouselData[currentIndex].text}
          <p style={{ fontSize: '13px' }}>
            아이브 장원영 최이서 안유진 리즈 김가을 레이
          </p>
        </CarouselText>
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
