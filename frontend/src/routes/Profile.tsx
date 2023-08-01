import React from 'react'
import NavbarLogin from '../components/NavbarLogin'
import styles from './styles.module.css'
import styled from 'styled-components'

// 원형 이미지
const CircleImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지 비율 유지하면서 컨테이너 크기에 맞춤 */
`
// 원형 이미지 칸을 감싸는 컨테이너
const CircleImageContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%; /* 반지름을 50%로 지정하여 원형으로 만듦 */
  overflow: hidden; /* 이미지가 컨테이너를 넘어가지 않도록 설정 */
  flex-shrink: 0; /* flexbox 내에서 크기 변화 방지 */
  margin-right: 20px; /* 원형 이미지 오른쪽 여백 설정 */
`
// Input 스타일
const ProfileInput = styled.input`
  border: 1px solid var(--gray-300, #dee2e6);
  background: var(--default-white, #fff);
  color: var(--gray-500, #adb5bd);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  padding: 8px;
`
// Input 요소를 담는 컨테이너
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* 요소들을 수직 방향으로 가운데 정렬 */
  gap: 10px; /* input 요소 간격 설정 */
`
const CircleImageContainerWithOrder = styled(CircleImageContainer)`
  order: -1; /* 이미지의 순서를 앞으로 변경 */
`

export const Profile: React.FC = () => {
  return (
    <div>
      <NavbarLogin />
      <InputContainer>
        <CircleImageContainer>
          <CircleImage src="/image/seulyoon.jpg" alt="Circle Image" />
        </CircleImageContainer>
        <ProfileInput placeholder="1" />
        <ProfileInput placeholder="1" />
        <ProfileInput placeholder="1" />
        <ProfileInput placeholder="1" />
      </InputContainer>
    </div>
  )
}

