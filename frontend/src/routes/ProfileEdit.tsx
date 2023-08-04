import React, { useEffect, useState } from 'react'
import NavbarLogin from '../components/NavbarLogin'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

export const ProfileEdit = () => {
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

    navigate('/profile/1')
  }

  const cancle = () => {
    navigate('/profile/1')
  }
  return (
    <div>
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
              height: '250px',
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
            </div>
          </div>
          <div className="right bottom">
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
