import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 1000px;
  height: 500px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
`

const ImageBox = styled.ul<{ count: number }>`
  margin: 10px 0 0 0;
  padding: 0;
  width: 100%;
  display: flex;
  transition: ${(props) => (!props.count ? '' : 'all 0.5s ease-in-out')};
  transform: ${(props) => 'translateX(-' + props.count * 1000 + 'px)'};
`

const ImageList = styled.li`
  list-style: none;
`

const Bullets = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column-reverse;
  right: 10px;
  bottom: 10px;
  z-index: 2;
`

const Label = styled.label`
  display: inline-block;
  border-radius: 50%;
  background-color: rgba(88, 84, 84, 0.55);
  width: 10px;
  height: 10px;
  margin-top: 5px;
  cursor: pointer;
`

type Slide = {
  imageUrl: string
}

type CarouselProps = {
  slides: Slide[]
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const TOTAL_SLIDES = slides.length
  const [currentIdx, setCurrentIdx] = useState<number>(0)
  const [count, setCount] = useState<number>(0)
  const slideRef = useRef<HTMLUListElement>(null)

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev + 1) % TOTAL_SLIDES)
  }

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev - 1 + TOTAL_SLIDES) % TOTAL_SLIDES)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => (prev + 1) % TOTAL_SLIDES)
    }, 3000)

    return () => {
      clearInterval(timer)
    }
  }, [TOTAL_SLIDES])

  return (
    <>
      <Container>
        {slides.map((slide, idx) => (
          <ImageBox
            key={idx}
            ref={slideRef}
            count={count}
            style={{ transform: `translateX(-${currentIdx * 1000}px)` }}
          >
            <ImageList>{/* <Image src={slide.imageUrl} /> */}</ImageList>
          </ImageBox>
        ))}
        <Bullets>
          {slides.map((_, idx) => (
            <Label key={idx} htmlFor={`slider${idx + 1}`}>
              &nbsp;
            </Label>
          ))}
        </Bullets>
      </Container>
      {/* <Button onClick={prevSlide}>prev</Button>
      <Button onClick={nextSlide}>next</Button> */}
    </>
  )
}

export default Carousel
