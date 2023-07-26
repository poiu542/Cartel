import React, { useState } from 'react'
import styled from 'styled-components'

type Slide = {
  imageUrl: string
  text: string
}

const carouselData: Slide[] = [
  {
    imageUrl:
      'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791157844142.jpg',
    text: '첫 번째 슬라이드',
  },
  {
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUSgKXrFWjGCoKpE5Ky0_AdFYnfDYnZLLk-Q&usqp=CAU',
    text: '두 번째 슬라이드',
  },
  // Add more slide data as needed
]

const CarouselContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 300px; /* Set the desired width of the carousel */
  background: blue;
`

const SlideContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 100%;
  transition: transform 0.3s ease-in-out;
`

const SlideImage = styled.img`
  max-width: 100%;
  height: auto;
`

const SlideText = styled.p`
  color: white;
  font-size: 24px;
  text-align: center;
`

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length)
  }

  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + carouselData.length) % carouselData.length,
    )
  }

  return (
    <CarouselContainer>
      {carouselData.map((slide, index) => (
        <SlideContainer
          key={index}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          <SlideImage src={slide.imageUrl} alt={`Slide ${index + 1}`} />
          <SlideText>{slide.text}</SlideText>
        </SlideContainer>
      ))}
      <button onClick={goToPrevSlide}>왼쪽으로&#8249;</button>
      <button onClick={goToNextSlide}>오른쪽으로&#8250;</button>
    </CarouselContainer>
  )
}

export default Carousel
