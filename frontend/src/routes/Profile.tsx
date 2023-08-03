import React from 'react'
import styled from '@emotion/styled'
import NavbarLogin from '../components/NavbarLogin'

interface Props {}
const handleWithdrawal = () => {
  alert('회원탙퇴')
}
const handleProfileEdit = () => {
  alert('수정')
}
export const Profile = (props: Props) => {
  return (
    <div>
      <NavbarLogin />
      <Container>
        <Input>
          <Content>
            <Placeholder>010-0000-0000</Placeholder>
          </Content>
        </Input>

        <Component1>
          <Content1>
            <Placeholder1>5400p</Placeholder1>
          </Content1>
        </Component1>
        <Component2>
          <Content2>
            <Placeholder2>박태흠</Placeholder2>
          </Content2>
        </Component2>
        <Component3>
          <Content3>
            <Placeholder3>councelor@naver.com</Placeholder3>
          </Content3>
        </Component3>
        <ListCustomContent>
          <ListGroupItems>
            <SubHeading>
              <Subheading>내가 쓴 게시글 보기</Subheading>
              <ContentForListItem>{`>>`}</ContentForListItem>
            </SubHeading>
          </ListGroupItems>
          <ListGroupItems1>
            <SubHeading1>
              <Subheading1>내가 쓴 댓글 보기</Subheading1>
              <ContentForListItem1>{`>>`}</ContentForListItem1>
            </SubHeading1>
          </ListGroupItems1>
          <ListGroupItems2>
            <SubHeading2>
              <Subheading2>내 상담 목록</Subheading2>
              <ContentForListItem2>{`>>`}</ContentForListItem2>
            </SubHeading2>
          </ListGroupItems2>
        </ListCustomContent>
        <GridLayout>
          <GridProfileArea>
            <ProfileImage>
              <img src="/image/seulyoon.jpg" alt="1" />
              <Component6>{nickname}</Component6>
            </ProfileImage>
          </GridProfileArea>
        </GridLayout>
        <Component4>
          <Content4>
            <WriteAMessage>자기소개입니다.</WriteAMessage>
          </Content4>
        </Component4>
        <Component5>
          <Button onClick={handleProfileEdit}>개인정보 수정</Button>
        </Component5>
        <BasicSolidButton>
          <BasicSolidButtonBasicSolidSmallBase>
            <Content5>
              <Button onClick={handleWithdrawal}>회원탈퇴</Button>
            </Content5>
          </BasicSolidButtonBasicSolidSmallBase>
        </BasicSolidButton>
      </Container>
    </div>
  )
}
const nickname = '밀개미'

const GridLayout = styled.div`
  max-width: 1280px;
  margin-top: 50px;
  display: grid;
  grid-template-columns: 300px auto;
  gap: 20px;
  padding: 0 24px;
  margin: 50px auto 0;
`

const GridProfileArea = styled.div`
  display: grid;
  grid-template-rows: 350px auto;
  align-items: center; /* 가로축 가운데 정렬을 위해 추가 */
`

const GridInputArea = styled.div`
  display: flex;
  width: 480px;
  flex-direction: column;
  align-items: center; /* 가로축 가운데 정렬을 위해 수정 */
  gap: 6px;
`

const ProfileImage = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 300px;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;

  > img {
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  > h2 {
    width: 100%;
    text-align: center;
  }
`

const ProfileMenu = styled.ul`
  width: 100%;
  border-radius: 20px;
  border: 2px solid #ccc;
  padding: 5px;

  > li {
    border-bottom: 2px solid #ccc;
    padding: 5px;
    margin: 0px;

    > h3 {
      margin: 0px;
      padding: 0px;
    }

    &:last-child {
      border: 0;
    }
  }
`
const ProfileInput = styled.input`
  border: 1px solid var(--gray-300, #dee2e6);
  border-radius: 6px;
  background: var(--default-white, #fff);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  width: px;
  height: 40px;
`
const ProfileMenuWrapper = styled.div`
  width: 100%;
  padding: 10px;
  display: grid; /* Grid 컨테이너로 설정 */
  grid-template-columns: auto auto; /* 두 개의 자식 요소를 자동 크기로 배치 */
  gap: 6px; /* 컬럼 사이의 간격 설정 */
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Input = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 480px;
  position: absolute;
  left: 579px;
  top: 347px;
  gap: 6px;
`

const Component1 = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 480px;
  position: absolute;
  left: 579px;
  top: 277px;
  gap: 6px;
`

const Component2 = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 480px;
  position: absolute;
  left: 579px;
  top: 217px;
  gap: 6px;
`

const Component3 = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 480px;
  position: absolute;
  left: 579px;
  top: 157px;
  gap: 6px;
`

const ListCustomContent = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 269px;
  height: 189px;
  position: absolute;
  left: 294px;
  top: 469px;
  overflow: hidden;
  border-radius: 8px;
  border-width: 1px;
  border-color: #e9ecef;
  border-style: solid;
`

const Frame175 = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 368px;
  top: 340px;
  gap: 10px;
  padding: 10px;
`

const Component4 = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 480px;
  height: 110px;
  position: absolute;
  left: 579px;
  top: 469px;
  gap: 6px;
`

const Component5 = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 35px;
  position: absolute;
  left: 832px;
  top: 609px;
  gap: 10px;
  padding: 10px 16px;
  border-radius: 5px;
  background: #80d4ff;
`

const BasicSolidButton = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 76px;
  height: 21px;
  position: absolute;
  left: 993px;
  top: 616px;
`

const Content = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-self: stretch;
  flex-grow: 0;
  flex-shrink: 0;
  position: relative;
  gap: 8px;
  padding: 9px 16px;
  border-radius: 6px;
  background: #fff;
  border-width: 1px;
  border-color: #dee2e6;
  border-style: solid;
`

const Content1 = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-self: stretch;
  flex-grow: 0;
  flex-shrink: 0;
  position: relative;
  gap: 8px;
  padding: 9px 16px;
  border-radius: 6px;
  background: #fff;
  border-width: 1px;
  border-color: #dee2e6;
  border-style: solid;
`

const Content2 = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-self: stretch;
  flex-grow: 0;
  flex-shrink: 0;
  position: relative;
  gap: 8px;
  padding: 9px 16px;
  border-radius: 6px;
  background: #fff;
  border-width: 1px;
  border-color: #dee2e6;
  border-style: solid;
`

const Content3 = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-self: stretch;
  flex-grow: 0;
  flex-shrink: 0;
  position: relative;
  gap: 8px;
  padding: 9px 16px;
  border-radius: 6px;
  background: #fff;
  border-width: 1px;
  border-color: #dee2e6;
  border-style: solid;
`

const ListGroupItems = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 0;
  flex-shrink: 0;
  width: 306px;
  gap: 8px;
  padding: 8px 16px;
  background: #fff;
  border-top-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 1px;
  border-left-width: 0px;
  border-color: #dee2e6;
  border-style: solid;
`

const ListGroupItems1 = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 0;
  flex-shrink: 0;
  width: 306px;
  gap: 8px;
  padding: 8px 16px;
  background: #fff;
  border-top-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 1px;
  border-left-width: 0px;
  border-color: #dee2e6;
  border-style: solid;
`

const ListGroupItems2 = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 0;
  flex-shrink: 0;
  width: 306px;
  gap: 8px;
  padding: 8px 16px;
  background: #fff;
  border-top-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 1px;
  border-left-width: 0px;
  border-color: #dee2e6;
  border-style: solid;
`

const Component6 = styled.p`
  margin: 0;
  white-space: pre-wrap;
  flex-grow: 0;
  flex-shrink: 0;
  font-family: AppleSDGothicNeoEB00;
  font-size: 23px;
  line-height: normal;
  letter-spacing: 0%;
  text-align: left;
  color: #000;
`

const Content4 = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: stretch;
  flex-grow: 0;
  flex-shrink: 0;
  height: 114px;
  position: relative;
  gap: 8px;
  padding: 16px;
  border-radius: 6px;
  background: #fff;
  border-width: 1px;
  border-color: #dee2e6;
  border-style: solid;
`

const Component7 = styled.p`
  margin: 0;
  white-space: pre-wrap;
  width: 120px;
  flex-grow: 0;
  flex-shrink: 0;
  font-family: Inter;
  font-size: 16px;
  line-height: normal;
  letter-spacing: 0%;
  font-weight: 500;
  text-align: center;
  color: #fff;
`

const BasicSolidButtonBasicSolidSmallBase = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  flex-grow: 0;
  flex-shrink: 0;
  padding: 8px 16px;
  border-radius: 8px;
  background: #ff4d4d;
`

const Placeholder = styled.p`
  margin: 0;
  white-space: pre-wrap;
  flex-grow: 1;
  font-family: Inter;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0%;
  text-align: left;
  color: #adb5bd;
`

const Placeholder1 = styled.p`
  margin: 0;
  white-space: pre-wrap;
  flex-grow: 1;
  font-family: Inter;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0%;
  text-align: left;
  color: #adb5bd;
`

const Placeholder2 = styled.p`
  margin: 0;
  white-space: pre-wrap;
  flex-grow: 1;
  font-family: Inter;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0%;
  text-align: left;
  color: #adb5bd;
`

const Placeholder3 = styled.p`
  margin: 0;
  white-space: pre-wrap;
  flex-grow: 1;
  font-family: Inter;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0%;
  text-align: left;
  color: #adb5bd;
`

const SubHeading = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-grow: 1;
  flex-basis: 100%;
  position: relative;
`

const SubHeading1 = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-grow: 1;
  flex-basis: 100%;
  position: relative;
`

const SubHeading2 = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-grow: 1;
  flex-basis: 100%;
  position: relative;
`

const WriteAMessage = styled.p`
  margin: 0;
  white-space: pre-wrap;
  flex-grow: 1;
  font-family: Inter;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0%;
  text-align: left;
  color: #adb5bd;
`

const Content5 = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: stretch;
  flex-grow: 0;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  gap: 8px;
`

const Subheading = styled.p`
  margin: 0;
  white-space: pre-wrap;
  flex-grow: 0;
  flex-shrink: 0;
  font-family: Inter;
  font-size: 16px;
  line-height: normal;
  letter-spacing: 0%;
  font-weight: 600;
  text-align: left;
  color: #343a40;
`

const ContentForListItem = styled.p`
  margin: 0;
  white-space: pre-wrap;
  flex-grow: 0;
  flex-shrink: 0;
  font-family: Inter;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0%;
  text-align: left;
  color: #6c757d;
`

const Subheading1 = styled.p`
  margin: 0;
  white-space: pre-wrap;
  flex-grow: 0;
  flex-shrink: 0;
  font-family: Inter;
  font-size: 16px;
  line-height: normal;
  letter-spacing: 0%;
  font-weight: 600;
  text-align: left;
  color: #343a40;
`

const ContentForListItem1 = styled.p`
  margin: 0;
  white-space: pre-wrap;
  flex-grow: 0;
  flex-shrink: 0;
  font-family: Inter;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0%;
  text-align: left;
  color: #6c757d;
`

const Subheading2 = styled.p`
  margin: 0;
  white-space: pre-wrap;
  flex-grow: 0;
  flex-shrink: 0;
  font-family: Inter;
  font-size: 16px;
  line-height: normal;
  letter-spacing: 0%;
  font-weight: 600;
  text-align: left;
  color: #343a40;
`

const ContentForListItem2 = styled.p`
  margin: 0;
  white-space: pre-wrap;
  flex-grow: 0;
  flex-shrink: 0;
  font-family: Inter;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0%;
  text-align: left;
  color: #6c757d;
`

const Button = styled.p`
  margin: 0;
  white-space: pre-wrap;
  flex-grow: 0;
  flex-shrink: 0;
  font-family: Inter;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0%;
  font-weight: 700;
  text-align: left;
  color: #fff;
`