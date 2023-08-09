import React from 'react'

import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom'
import NavbarLogin from '../components/NavbarLogin'
import { Link } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`

const Description = styled.p`
  font-size: 16px;
  text-align: center;
`

const Button = styled.button`
  margin-top: 15px;
  padding: 10px 20px;
  font-size: 18px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`

export const SelfHelpGroup = () => {
  const navigate = useNavigate()
  const openInfo = () =>
    (window.location.href =
      'https://ko.wikipedia.org/wiki/%EC%9D%B8%EC%B9%B4%EC%9A%B4%ED%84%B0_%EA%B7%B8%EB%A3%B9')
  return (
    <>
      <NavbarLogin />

      <Container>
        <Title>자조모임에 대해 알아보세요</Title>
        <Description>
          자조모임은 그룹 참여를 통해 서로의 경험을 공유하고 서로를 지원하는
          소중한 활동입니다.
        </Description>
        <Button onClick={openInfo}>더 알아보기</Button>
      </Container>
    </>
  )
}
