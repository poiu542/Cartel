import React, { useEffect, useState } from 'react'
import NavbarLogin from '../components/NavbarLogin'
import Footer from '../components/Footer'
import Button from '../components/Button'

export const Profile = () => {
  const myArticle = () => {}
  const myReview = () => {}
  const myCounsel = () => {}
  const editUserData = () => {}
  const Unsubscribe = () => {}
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
              className="profile name"
              style={{
                minWidth: '50px',
                minHeight: ' 50px',
                fontWeight: 'bold',
                fontSize: '20px',
                margin: '10px 0px 0px 0px',
              }}
            >
              족구왕
            </div>
          </div>
          <div
            className="left bottom"
            style={{
              width: '300px',
              height: '210px',
              margin: '60px 0px 0px 0px',
            }}
          >
            <div
              className="my article"
              style={{
                width: '300px',
                height: '70px',
                border: '1px solid lightgray',
                borderRadius: '10px 10px 0px 0px',
                cursor: 'pointer',
              }}
              onClick={myArticle}
            >
              <div
                style={{
                  fontWeight: 'bold',
                  margin: '10px 0px 0px 10px',
                }}
              >
                내가 쓴 게시글 보기
              </div>
              <div
                style={{
                  fontWeight: 'bold',
                  margin: '10px 0px 0px 10px',
                }}
              >
                {'>>'}
              </div>
            </div>
            <div
              className="my review"
              style={{
                width: '300px',
                height: '70px',
                border: '1px solid lightgray',
                borderRadius: '0px 0px 0px 0px',
                cursor: 'pointer',
              }}
              onClick={myReview}
            >
              <div
                style={{
                  fontWeight: 'bold',
                  margin: '10px 0px 0px 10px',
                }}
              >
                내가 쓴 댓글 보기
              </div>
              <div
                style={{
                  fontWeight: 'bold',
                  margin: '10px 0px 0px 10px',
                }}
              >
                {'>>'}
              </div>
            </div>
            <div
              className="my counsel"
              style={{
                width: '300px',
                height: '70px',
                border: '1px solid lightgray',
                borderRadius: '0px 0px 10px 10px',
                cursor: 'pointer',
              }}
              onClick={myCounsel}
            >
              <div
                style={{
                  fontWeight: 'bold',
                  margin: '10px 0px 0px 10px',
                }}
              >
                내 상담 보기
              </div>
              <div
                style={{
                  fontWeight: 'bold',
                  margin: '10px 0px 0px 10px',
                }}
              >
                {'>>'}
              </div>
            </div>
          </div>
        </div>
        <div
          className="right"
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'rgb(250, 251, 253)',
            // height: '100%',
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
                padding: '16px 10px 0px 10px',
              }}
            >
              <div
                className="email address"
                style={{
                  width: '400px',
                  height: '40px',
                  borderBottom: '1px solid lightgray',
                  margin: '0px 0px 15px 0px',
                  display: 'flex',
                  justifyContent: 'left ',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    margin: '0px 0px 0px 10px',
                  }}
                >
                  jokguking@jokgu.com
                </div>
              </div>

              <div
                className="name"
                style={{
                  width: '400px',
                  height: '40px',
                  borderBottom: '1px solid lightgray',
                  margin: '0px 0px 15px 0px',
                  display: 'flex',
                  justifyContent: 'left ',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    margin: '0px 0px 0px 10px',
                  }}
                >
                  석민혁
                </div>
              </div>
              <div
                className="point"
                style={{
                  width: '400px',
                  height: '40px',
                  borderBottom: '1px solid lightgray',
                  margin: '0px 0px 15px 0px',
                  display: 'flex',
                  justifyContent: 'left ',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    margin: '0px 0px 0px 10px',
                  }}
                >
                  5400p
                </div>
              </div>
              <div
                className="phone number"
                style={{
                  width: '400px',
                  height: '40px',
                  borderBottom: '1px solid lightgray',
                  margin: '0px 0px 15px 0px',
                  display: 'flex',
                  justifyContent: 'left ',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    margin: '0px 0px 0px 10px',
                  }}
                >
                  010-6723-8879
                </div>
              </div>
            </div>
          </div>
          <div className="right bottom">
            <div
              className="right bottom top"
              style={{
                width: '400px',
                height: '215px',
                border: '1px solid lightgray',
                borderRadius: '6px',
                margin: '41px 0px 0px 100px',
                display: 'flex',
                justifyContent: 'center ',
                alignItems: 'center',
                backgroundColor: 'white',
              }}
            >
              <div>족구왕이 될 사나이</div>
            </div>
            <div>
              <div
                className="right bottom bottom"
                style={{ display: 'flex', margin: '20px 0px 0px 281px' }}
              >
                <div style={{ margin: '0px 20px 0px 0px' }}>
                  <Button
                    size={{ width: '100px', height: '40px' }}
                    text="회원정보 수정"
                    color={{ background: '#00AAFF', color: 'white' }}
                    onClick={editUserData}
                  />
                </div>
                <div>
                  <Button
                    size={{ width: '100px', height: '40px' }}
                    text="회원탈퇴"
                    color={{ background: '#FF4D4D', color: 'white' }}
                    onClick={Unsubscribe}
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
