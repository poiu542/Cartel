import React from 'react'
import styled from 'styled-components'

const NoticeBtn = styled.button`
  background-color: #80d4ff;
  width: 24.4375rem;
  padding: 0.5rem 1rem;
  height: 5.5625rem;
  border-radius: 0.1875rem;
  color: white;
  border: 1px solid white;
  font-size: 20px;
`

const FreeBtn = styled.button`
  background-color: rgba(63, 137, 176, 0.7);
  width: 24.4375rem;
  padding: 0.5rem 1rem;
  height: 5.5625rem;
  border-radius: 0.1875rem;
  color: white;
  border: 1px solid white;
  font-size: 20px;
`

const CommunityBackground = styled.div`
  background-image: url('/sky.jpg');

  height: 25.125rem;
  border-radius: 0.375rem;
  background-size: cover;
  position: relative; /* Add relative positioning */
`

const Bar = styled.div`
  /* The Bar doesn't need any styling changes for this layout */
  background-color: rgba(63, 137, 176, 0.7);
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  position: absolute; /* Position the Bar relative to CommunityBackground */
  bottom: 0; /* Position the Bar at the bottom */
  width: 100%; /* Make sure the Bar covers the entire width of the CommunityBackground */
`

const ButtonsContainer = styled.div`
  /* This container will hold the buttons and arrange them side by side */
  display: flex;
`

export const CommunityNotice = () => {
  return (
    <div>
      <CommunityBackground>
        <Bar>
          <ButtonsContainer>
            <NoticeBtn>공지사항</NoticeBtn>
            <FreeBtn>자유게시판</FreeBtn>
          </ButtonsContainer>
        </Bar>
      </CommunityBackground>
    </div>
  )
}
