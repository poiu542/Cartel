import React, { useEffect, useState } from 'react'
import NavbarLogin from '../components/NavbarLogin'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'
import Modal from 'react-modal'
import { FlexContainer, FlexContainerRow } from '../styles/MainStyle'
import StyledButton from '../styles/StyledButton'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'

export const ProfileEdit = () => {
  const [school, setSchool] = useState('서울대')
  const [schoolInput, setSchoolInput] = useState('')

  const [nickname, setNickname] = useState('족구왕')
  const [nicknameInput, setNicknameInput] = useState('')
  const [email, setEmail] = useState('jokguking@jokgu.com')
  const [emailInput, setEmailInput] = useState('')
  const [name, setName] = useState('석민혁')
  const [nameInput, setNameInput] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('010-6723-8879')
  const [phoneNumberInput, setPhoneNumberInput] = useState('')
  const [introduction, setIntroduction] = useState('족구왕이 될 사나이')
  const [introductionInput, setIntroductionInput] = useState('')

  // 모달을 띄울 상태
  const [isModalOpen, setIsModalOpen] = useState(false)
  // 이력 저장할 State
  const [careers, setCareers] = useState<string[]>([''])

  // 모달 띄우기
  const openCareerModal = () => {
    setIsModalOpen(true)
  }

  // 모달 닫기
  const closeCareerModal = () => {
    setIsModalOpen(false)
  }
  // 이력 추가
  const addCareer = () => {
    setCareers([...careers, ''])
  }

  // 이력 삭제
  const deleteCareer = (index: number) => {
    setCareers(careers.filter((career, idx) => idx !== index))
  }

  // 이력 업데이트
  const updateCareer = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const updatedCareers = [...careers]
    updatedCareers[index] = event.target.value
    setCareers(updatedCareers)
  }

  const navigate = useNavigate()
  const saveUserdata = () => {
    if (!nicknameInput) setNickname('족구왕')
    else setNickname(nicknameInput)

    if (!emailInput) setEmail('jokguking@jokgu.com')
    else setEmail(emailInput)

    if (!nameInput) setName('석민혁')
    else setName(nameInput)

    if (!phoneNumberInput) setPhoneNumber('010-6723-8879')
    else setPhoneNumber(phoneNumberInput)

    if (!introductionInput) setIntroduction('족구왕이 될 사나이')
    else setIntroduction(introductionInput)

    if (!schoolInput) setSchool('족구왕이 될 사나이')
    else setSchool(schoolInput)

    navigate('/profile/1')
  }

  const cancle = () => {
    navigate('/profile/1')
  }
  return (
    <div>
      <Modal isOpen={isModalOpen} onRequestClose={closeCareerModal}>
        <FlexContainer>
          <h1>이력</h1>
        </FlexContainer>
        <FlexContainerRow>
          <FlexContainer>
            {careers.map((career, index) => (
              <div key={index} style={{ paddingBottom: '30px' }}>
                <FlexContainerRow>
                  <input
                    type="text"
                    value={career}
                    onChange={(event) => updateCareer(index, event)}
                    style={{ width: '900px', borderBlockColor: '#40BFFF' }}
                  />
                  {/* <StyledButton color="gray" background="white">
                    <DeleteIcon />
                  </StyledButton> */}
                  <IconButton
                    aria-label="delete"
                    onClick={() => deleteCareer(index)}
                    style={{ scale: '1.5' }}
                  >
                    <DeleteIcon fontSize="inherit" />
                  </IconButton>
                </FlexContainerRow>
              </div>
            ))}
          </FlexContainer>
          <FlexContainerRow
            style={{
              position: 'fixed',
              top: '120px',
              right: '100px',
              zIndex: 1,
            }}
          >
            <StyledButton
              fontSize="14px"
              width="50px"
              height="30px"
              onClick={addCareer}
            >
              Add
            </StyledButton>
            &nbsp;
            <StyledButton
              fontSize="12px"
              width="50px"
              height="30px"
              onClick={closeCareerModal}
              background="#ef5c5c"
            >
              Close
            </StyledButton>
            &nbsp;
            <StyledButton
              fontSize="14px"
              width="50px"
              height="30px"
              background="#15e506"
              onClick={() => alert('저장되었습니다.')}
            >
              Save
            </StyledButton>
          </FlexContainerRow>
        </FlexContainerRow>
      </Modal>
      <div className="navbar">
        <NavbarLogin />
      </div>
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '800px',
        }}
      >
        <div
          className="left"
          style={{
            margin: '100px 0px 0px 330px',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '5px 0px 5px -2px rgba(0, 0, 0, 0.2)',
            height: '600px',
            width: '500px',
          }}
        >
          <div
            className="left top"
            style={{
              position: 'relative',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div className="profile image">
              <img
                src="/image/seulyoon.jpg"
                alt="seulyoon"
                style={{ width: '200px', height: '200px', borderRadius: '50%' }}
              />
            </div>
            <div
              className="profile nickname"
              style={{
                minWidth: '70px',
                minHeight: ' 50px',
                fontWeight: 'bold',
                fontSize: '20px',
                margin: '10px 0px 0px 0px',
              }}
            >
              <input
                type="text"
                value={nicknameInput}
                onChange={(e) => setNicknameInput(e.target.value)}
                placeholder={nickname}
                style={{
                  width: '200px',
                  margin: '10px 0px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              />
            </div>
          </div>
        </div>
        <div
          className="right"
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'rgb(250, 251, 253)',
            width: '1000px',
            margin: '7px 0px 0px 10px',
          }}
        >
          <div
            className="right top"
            style={{
              margin: '95px 0px 25px 100px',
              border: '1px solid #3b478f',
              borderRadius: '20px',
              width: '420px ',
              minHeight: '250px',
              backgroundColor: 'white',
            }}
          >
            <div
              className="user data"
              style={{
                padding: '40px 10px 0px 10px',
              }}
            >
              <div className="email address">
                <input
                  type="text"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder={email}
                  style={{
                    width: '400px',
                    height: '40px',
                    margin: '0px 0px 15px 0px',
                    display: 'flex',
                    justifyContent: 'left ',
                    alignItems: 'center',
                  }}
                />
              </div>

              <div className="name">
                <input
                  type="text"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  placeholder={name}
                  style={{
                    width: '400px',
                    height: '40px',
                    margin: '0px 0px 15px 0px',
                    display: 'flex',
                    justifyContent: 'left ',
                    alignItems: 'center',
                  }}
                />
              </div>
              <div className="phone number">
                <input
                  type="text"
                  value={phoneNumberInput}
                  onChange={(e) => setPhoneNumberInput(e.target.value)}
                  placeholder={phoneNumber}
                  style={{
                    width: '400px',
                    height: '40px',
                    margin: '0px 0px 15px 0px',
                    display: 'flex',
                    justifyContent: 'left ',
                    alignItems: 'center',
                  }}
                />
              </div>
              <div className="school">
                <input
                  type="text"
                  value={schoolInput}
                  onChange={(e) => setSchoolInput(e.target.value)}
                  placeholder={school}
                  style={{
                    width: '400px',
                    height: '40px',
                    margin: '0px 0px 15px 0px',
                    display: 'flex',
                    justifyContent: 'left ',
                    alignItems: 'center',
                  }}
                />
              </div>
            </div>
          </div>
          <div className="right bottom">
            <div
              style={{
                marginLeft: '100px',
              }}
            >
              <Button
                text="이력 수정"
                size={{ width: '420px', height: '50px' }}
                onClick={openCareerModal}
              ></Button>
            </div>
            <div className="right bottom top">
              <input
                type="text"
                value={introductionInput}
                onChange={(e) => setIntroductionInput(e.target.value)}
                placeholder={introduction}
                style={{
                  width: '400px',
                  height: '215px',
                  margin: '41px 0px 0px 100px',
                  display: 'flex',
                  justifyContent: 'center ',
                  alignItems: 'center',
                }}
              />
            </div>
            <div>
              <div
                className="right bottom bottom"
                style={{ display: 'flex', margin: '20px 0px 0px 281px' }}
              >
                <div style={{ margin: '0px 20px 0px 0px' }}>
                  <Button
                    size={{ width: '100px', height: '40px' }}
                    text="저장"
                    color={{ background: '#00AAFF', color: 'white' }}
                    onClick={saveUserdata}
                  />
                </div>
                <div>
                  <Button
                    size={{ width: '100px', height: '40px' }}
                    text="취소"
                    color={{ background: '#FF4D4D', color: 'white' }}
                    onClick={cancle}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div
        className="blank"
        style={{
          width: '1440px',
          height: '100px',
        }}
      ></div> */}
      <Footer />
    </div>
  )
}
