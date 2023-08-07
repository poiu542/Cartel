import React from 'react'
import styled from 'styled-components'

interface CardProps {
  imageSrc: string
  title: string
  subtitle: string
  content: string
  onCardClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const CardContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  padding: 37px;
  margin-bottom: 30px;
  border-radius: 15px;
  background-color: #f2f2f2;
`

const ImageContainer = styled.div`
  width: 45%;
  img {
    width: 250px;
    height: 250px;
    border-radius: 8px;
    object-fit: fill;
  }
`

const TextContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10%;
  width: 45%;
  h2 {
    margin-bottom: 15px;
  }

  h3 {
    margin-bottom: 35px;
    color: gray;
  }

  p {
    margin-top: 8px;
  }
`

export const LeftPictureCard: React.FC<CardProps> = ({
  imageSrc,
  title,
  subtitle,
  content,
  onCardClick,
}) => {
  return (
    <CardContainer onClick={onCardClick}>
      <ImageContainer>
        <img src={imageSrc} alt="카드 이미지" />
      </ImageContainer>
      <TextContainer>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        {content.split('\n').map((item, key) => {
          return <p key={key}>{item}</p>
        })}
      </TextContainer>
    </CardContainer>
  )
}

export const RightPictureCard: React.FC<CardProps> = ({
  imageSrc,
  title,
  subtitle,
  content,
}) => {
  return (
    <CardContainer>
      <TextContainer>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        {content.split('\n').map((item, key) => {
          return <p key={key}>{item}</p>
        })}
      </TextContainer>
      <ImageContainer>
        <img src={imageSrc} alt="카드 이미지" />
      </ImageContainer>
    </CardContainer>
  )
}
