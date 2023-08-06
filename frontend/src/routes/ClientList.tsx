import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import NavbarLogin from './../components/NavbarLogin'
import { LeftPictureCard } from '../components/PictureCard'
import { styled } from 'styled-components'

type Client = {
  id: string
  name: string
  introduce: string
  nickname: string
}

export const ClientList = () => {
  const navigate = useNavigate()
  let counselId = useParams()

  const clients = [
    {
      imageSrc: '/image/drug5.jpg',
      title: '헤로인',
      subtitle: '서비스 3 설명',
      content: '이곳에는 서비스의 상세 설명이 들어갑니다.',
    },
  ]

  const goCounselJournal = (counselId: number, { userEmail }: any) => {
    navigate(`/counsel/${counselId}/counseljournal/${userEmail}`)
  }

  return (
    <>
      <NavbarLogin />
      {/* axios로 받아온 상담제목 입력 */}
      <h1>상담 제목 ~~~</h1>

      {/* 해당 상담에 해당하는 내담자들의 사진과 이름, 닉네임, 소개등의 기초정보가 들어감 */}
      {/* 카드를 클릭시 내담자의 상담일지로 들어감 */}
      <div>
        {clients.map((client, email) => (
          <LeftPictureCard
            // onCardClick={goCounselJournal}
            key={email}
            imageSrc={client.imageSrc}
            title={client.title}
            subtitle={client.subtitle}
            content={client.content}
          />
        ))}

        <LeftPictureCard
          imageSrc="/image/drug5.jpg"
          title="헤로인"
          subtitle="서비스 3 설명"
          content="이곳에는 서비스의 상세 설명이 들어갑니다."
        />
        <LeftPictureCard
          imageSrc="/image/drug5.jpg"
          title="헤로인"
          subtitle="서비스 3 설명"
          content="이곳에는 서비스의 상세 설명이 들어갑니다."
        />
        <LeftPictureCard
          imageSrc="/image/drug5.jpg"
          title="헤로인"
          subtitle="서비스 3 설명"
          content="이곳에는 서비스의 상세 설명이 들어갑니다."
        />
        <LeftPictureCard
          imageSrc="/image/drug5.jpg"
          title="헤로인"
          subtitle="서비스 3 설명"
          content="이곳에는 서비스의 상세 설명이 들어갑니다."
        />
        <LeftPictureCard
          imageSrc="/image/drug5.jpg"
          title="헤로인"
          subtitle="서비스 3 설명"
          content="이곳에는 서비스의 상세 설명이 들어갑니다."
        />
      </div>
    </>
  )
}
