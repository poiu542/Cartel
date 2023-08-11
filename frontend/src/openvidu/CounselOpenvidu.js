import { OpenVidu } from 'openvidu-browser'

import axios from 'axios'
import React, { Component } from 'react'
import './Drug.css'
import UserVideoComponent from './UserVideoComponent'
// import { ToolBar } from './ToolBar.jsx'
import CallEndIcon from '@mui/icons-material/CallEnd'
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined'
import MicOutlinedIcon from '@mui/icons-material/MicOutlined'
import HeadsetIcon from '@mui/icons-material/Headset'
import VideocamOffOutlinedIcon from '@mui/icons-material/VideocamOffOutlined'
import MicOffIcon from '@mui/icons-material/MicOff'
import HeadsetOffIcon from '@mui/icons-material/HeadsetOff'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import ChatIcon from '@mui/icons-material/Chat'
import ChatBox from '../Chat/ChatBox'
import styled from '@emotion/styled'
// import ScreenShareOutlinedIcon from '@mui/icons-material/ScreenShareOutlined'
// import StopScreenShareOutlinedIcon from '@mui/icons-material/StopScreenShareOutlined'
// import { Icon } from '@mui/material'

const APPLICATION_SERVER_URL = 'http://i9b209.p.ssafy.io:8080/'
const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #202124;
`

const Header = styled.div`
  height: 8vh;
  display: flex;
  align-items: center;
  padding: 0 50px;
  justify-content: center;
`

const StudyTitle = styled.p`
  color: white;
  font-size: 20px;
  font-weight: 600;
`

const Middle = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
`

const Left = styled.div`
  flex: 3;
  width: 100%;
  display: flex;
  justify-content: center;
`

const Right = styled.div`
  position: relative;
  padding: 0 20px;
  display: flex;
  align-items: center;
  transition: 0.5s;
  ${(props) =>
    props.primary ? `right:0; flex:1;` : `right:calc(-100vw/3); flex:0;`}
`

const Chat = styled.div`
  width: 100%;
  height: 93%;
  border-radius: 5px;
  background-color: white;
  display: flex;
`

const VideoContainer = styled.div`
  margin-top: 30px;
  width: 50%;
  height: 77vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
`

const StreamContainerWrapper = styled.div`
  display: grid;
  place-items: center;
  ${(props) =>
    props.primary
      ? `
    grid-template-columns: repeat(3, 1fr);
    `
      : `
    grid-template-columns: repeat(4, 1fr);
    `}
  grid-gap: 20px;
  height: 100%;
  padding: 10px;
  @media screen and (max-width: 800px) {
    background-color: red;
  }
`

const StreamContainer = styled.div`
  width: 100%;
  position: relative;
  border-radius: 5px;
  min-height: 34vh;
  overflow: hidden;
  box-sizing: border-box;
`

const Bottom = styled.div`
  height: 13vh;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
`

const BottomBox = styled.div`
  display: flex;
  height: 100%;
  width: 20%;
  align-items: center;
  justify-content: space-around;
`

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #333;
  color: white;
  cursor: pointer;
  transition: 0.1s;
  &:hover {
    background-color: #3c4043;
  }

  ${(props) =>
    props.primary &&
    `
      background-color: red;
      color: white;
      &:hover{
          background-color: red;
      }
    `}
`

const ChatIconBox = styled.div`
  position: absolute;
  color: white;
  right: 60px;
  top: 50%;
  bottom: 50%;
  cursor: pointer;
`
class CounselOpenvidu extends Component {
  constructor(props) {
    super(props)

    // These properties are in the state's component in order to re-render the HTML whenever their values change
    this.state = {
      mySessionId: 'drugking',
      myUserName: 'Par' + Math.floor(Math.random() * 100),
      session: undefined,
      mainStreamManager: undefined, // Main video of the page. Will be the 'publisher' or one of the 'subscribers'
      publisher: undefined,
      subscribers: [],
    }

    this.joinSession = this.joinSession.bind(this)
    this.leaveSession = this.leaveSession.bind(this)
    this.switchCamera = this.switchCamera.bind(this)
    this.handleChangeSessionId = this.handleChangeSessionId.bind(this)
    this.handleChangeUserName = this.handleChangeUserName.bind(this)
    this.handleMainVideoStream = this.handleMainVideoStream.bind(this)
    this.onbeforeunload = this.onbeforeunload.bind(this)
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this.onbeforeunload)
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.onbeforeunload)
  }

  onbeforeunload(event) {
    this.leaveSession()
  }

  handleChangeSessionId(e) {
    this.setState({
      mySessionId: e.target.value,
    })
  }

  handleChangeUserName(e) {
    this.setState({
      myUserName: e.target.value,
    })
  }

  handleMainVideoStream(stream) {
    if (this.state.mainStreamManager !== stream) {
      this.setState({
        mainStreamManager: stream,
      })
    }
  }
  handleToggle(kind) {
    if (this.state.publisher) {
      switch (kind) {
        case 'camera':
          this.setState({ isCamera: !this.state.isCamera }, () => {
            console.log(this.state.publisher)
            this.state.publisher.publishVideo(this.state.isCamera)
          })
          break

        case 'speaker':
          this.setState({ isSpeaker: !this.state.isSpeaker }, () => {
            this.state.subscribers.forEach((s) =>
              s.subscribeToAudio(this.state.isSpeaker),
            )
          })
          break

        case 'mike':
          this.setState({ isMike: !this.state.isMike }, () => {
            this.state.publisher.publishAudio(this.state.isMike)
          })
          break

        // case 'share':
        //   this.setState({ isShareScreen: !this.state.isShareScreen }, () => {
        //     this.state.subscribers.forEach((s) =>
        //       s.publishScreen(this.state.isShareScreen),
        //     )
        //   })
        //   break
      }
    }
  }
  // startScreenSharing = async () => {
  //   const { session } = this.state

  //   if (session) {
  //     const publisher = this.OV.initPublisher(undefined, {
  //       videoSource: 'screen',
  //       publishVideo: true, // 화면 공유 비디오 활성화
  //       publishAudio: false, // 오디오 비활성화
  //     })

  //     try {
  //       await session.publish(publisher)
  //       this.setState({ publisher })
  //     } catch (error) {
  //       console.error('Error publishing screen share:', error)
  //     }
  //   }
  // }

  // stopScreenSharing = () => {
  //   const { session, publisher } = this.state

  //   if (publisher) {
  //     session.unpublish(publisher)
  //     publisher.stream.dispose()
  //     this.setState({ publisher: null })
  //   }
  // }
  deleteSubscriber(streamManager) {
    let subscribers = this.state.subscribers
    let index = subscribers.indexOf(streamManager, 0)
    if (index > -1) {
      subscribers.splice(index, 1)
      this.setState({
        subscribers: subscribers,
      })
    }
  }

  joinSession() {
    // --- 1) Get an OpenVidu object ---

    this.OV = new OpenVidu()

    // --- 2) Init a session ---

    this.setState(
      {
        session: this.OV.initSession(),
      },
      () => {
        var mySession = this.state.session

        // --- 3) Specify the actions when events take place in the session ---

        // On every new Stream received...
        mySession.on('streamCreated', (event) => {
          // Subscribe to the Stream to receive it. Second parameter is undefined
          // so OpenVidu doesn't create an HTML video by its own
          var subscriber = mySession.subscribe(event.stream, undefined)
          var subscribers = this.state.subscribers
          subscribers.push(subscriber)

          // Update the state with the new subscribers
          this.setState({
            subscribers: subscribers,
          })
        })

        // On every Stream destroyed...
        mySession.on('streamDestroyed', (event) => {
          // Remove the stream from 'subscribers' array
          this.deleteSubscriber(event.stream.streamManager)
        })

        // On every asynchronous exception...
        mySession.on('exception', (exception) => {
          console.warn(exception)
        })

        // --- 4) Connect to the session with a valid user token ---

        // Get a token from the OpenVidu deployment
        this.getToken().then((token) => {
          console.log(token)
          // First param is the token got from the OpenVidu deployment. Second param can be retrieved by every user on event
          // 'streamCreated' (property Stream.connection.data), and will be appended to DOM as the user's nickname
          mySession
            .connect(token, { clientData: this.state.myUserName })
            .then(async () => {
              // --- 5) Get your own camera stream ---

              // Init a publisher passing undefined as targetElement (we don't want OpenVidu to insert a video
              // element: we will manage it on our own) and with the desired properties
              let publisher = await this.OV.initPublisherAsync(undefined, {
                audioSource: undefined, // The source of audio. If undefined default microphone
                videoSource: undefined, // The source of video. If undefined default webcam
                publishAudio: true, // Whether you want to start publishing with your audio unmuted or not
                publishVideo: true, // Whether you want to start publishing with your video enabled or not
                resolution: '640x480', // The resolution of your video
                frameRate: 30, // The frame rate of your video
                insertMode: 'APPEND', // How the video is inserted in the target element 'video-container'
                mirror: false, // Whether to mirror your local video or not
              })

              // --- 6) Publish your stream ---

              mySession.publish(publisher)

              // Obtain the current video device in use

              var devices = await this.OV.getDevices()
              var videoDevices = devices.filter(
                (device) => device.kind === 'videoinput',
              )
              var currentVideoDeviceId = publisher.stream
                .getMediaStream()
                .getVideoTracks()[0]
                .getSettings().deviceId
              var currentVideoDevice = videoDevices.find(
                (device) => device.deviceId === currentVideoDeviceId,
              )

              // Set the main video in the page to display our webcam and store our Publisher
              this.setState({
                currentVideoDevice: currentVideoDevice,
                mainStreamManager: publisher,
                publisher: publisher,
              })
            })
            .catch((error) => {
              console.log(
                'There was an error connecting to the session:',
                error.code,
                error.message,
              )
            })
        })
      },
    )
  }

  leaveSession() {
    // --- 7) Leave the session by calling 'disconnect' method over the Session object ---

    const mySession = this.state.session

    if (mySession) {
      mySession.disconnect()
    }

    // Empty all properties...
    this.OV = null
    this.setState({
      session: undefined,
      subscribers: [],
      mySessionId: 'SessionA',
      myUserName: 'Participant' + Math.floor(Math.random() * 100),
      mainStreamManager: undefined,
      publisher: undefined,
    })
  }

  async switchCamera() {
    try {
      const devices = await this.OV.getDevices()
      var videoDevices = devices.filter(
        (device) => device.kind === 'videoinput',
      )

      if (videoDevices && videoDevices.length > 1) {
        var newVideoDevice = videoDevices.filter(
          (device) =>
            device.deviceId !== this.state.currentVideoDevice.deviceId,
        )

        if (newVideoDevice.length > 0) {
          // Creating a new publisher with specific videoSource
          // In mobile devices the default and first camera is the front one
          var newPublisher = this.OV.initPublisher(undefined, {
            videoSource: newVideoDevice[0].deviceId,
            publishAudio: true,
            publishVideo: true,
            mirror: true,
          })

          //newPublisher.once("accessAllowed", () => {
          await this.state.session.unpublish(this.state.mainStreamManager)

          await this.state.session.publish(newPublisher)
          this.setState({
            currentVideoDevice: newVideoDevice[0],
            mainStreamManager: newPublisher,
            publisher: newPublisher,
          })
        }
      }
    } catch (e) {
      console.error(e)
    }
  }

  render() {
    // const mySessionId = this.state.mySessionId
    // const myUserName = this.state.myUserName
    const { mySessionId } = this.state
    const { localUser } = this.state
    return (
      <Container>
        <Header>
          <StudyTitle>상담이름</StudyTitle>
        </Header>
        <Middle>
          {this.state.session === undefined ? (
            <div
              style={{
                position: 'absolute',
                right: '0',
                left: '0',
                width: '300px',
                margin: 'auto',
                height: '300px',
              }}
              id="join"
            >
              <div>
                <h1 style={{ color: 'white' }}> 상담에 참여하세요! </h1>
                <form
                  style={{ display: 'flex', justifyContent: 'center' }}
                  className="form-group"
                  onSubmit={this.joinSession}
                >
                  <p className="text-center">
                    <input
                      className="btn btn-lg btn-success"
                      name="commit"
                      type="submit"
                      value="JOIN"
                    />
                  </p>
                </form>
              </div>
            </div>
          ) : null}
          <Left>
            <VideoContainer>
              {this.state.session !== undefined ? (
                <StreamContainerWrapper
                  primary={this.state.isChat}
                  ref={this.userRef}
                >
                  {this.state.publisher !== undefined ? (
                    <StreamContainer key={this.state.publisher.stream.streamId}>
                      <UserVideoComponent
                        streamManager={this.state.publisher}
                      />
                    </StreamContainer>
                  ) : null}
                  {this.state.subscribers.map((sub, i) => (
                    <StreamContainer key={sub.stream.streamId}>
                      <UserVideoComponent streamManager={sub} />
                    </StreamContainer>
                  ))}
                </StreamContainerWrapper>
              ) : null}
            </VideoContainer>
          </Left>

          <Right primary={this.state.isChat}>
            {/* <Chat>
              <ChatBox />
            </Chat> */}
          </Right>
        </Middle>
        <Bottom>
          <BottomBox>
            <Icon
              primary={!this.state.isCamera}
              onClick={() => this.handleToggle('camera')}
            >
              {this.state.isCamera ? (
                <VideocamOutlinedIcon />
              ) : (
                <VideocamOffOutlinedIcon />
              )}
            </Icon>

            <Icon
              primary={!this.state.isMike}
              onClick={() => this.handleToggle('mike')}
            >
              {this.state.isMike ? <MicOutlinedIcon /> : <MicOffIcon />}
            </Icon>

            <Icon
              primary={!this.state.isSpeaker}
              onClick={() => this.handleToggle('speaker')}
            >
              {this.state.isSpeaker ? <HeadsetIcon /> : <HeadsetOffIcon />}
            </Icon>
            {/* <Icon
              primary={!this.state.isShareScreen}
              onClick={() => this.handleToggle('speaker')}
            >
              {this.state.isShareScreen ? (
                <ScreenShareOutlinedIcon onClick={this.stopScreenSharing} />
              ) : (
                <StopScreenShareOutlinedIcon
                  onClick={this.startScreenSharing}
                />
              )}
            </Icon> */}
            <Icon primary onClick={this.leaveSession}>
              <ExitToAppIcon />
            </Icon>
          </BottomBox>
          {/* <ChatIconBox
            onClick={() => this.setState({ isChat: !this.state.isChat })}
          >
            <ChatIcon />
          </ChatIconBox> */}
        </Bottom>
      </Container>
    )
    // return (
    //   <div className="container">
    //     {this.state.session === undefined ? (
    //       <div id="join">
    //         <div id="img-div">
    //           <img
    //             src="resources/images/openvidu_grey_bg_transp_cropped.png"
    //             alt="OpenVidu logo"
    //           />
    //         </div>
    //         <div id="join-dialog" className="jumbotron vertical-center">
    //           <h1> Join a video session </h1>
    //           <form className="form-group" onSubmit={this.joinSession}>
    //             <p>
    //               <label>약쟁이 이름: </label>
    //               <input
    //                 className="form-control"
    //                 type="text"
    //                 id="userName"
    //                 value={myUserName}
    //                 onChange={this.handleChangeUserName}
    //                 required
    //               />
    //             </p>
    //             <p>
    //               <label>약팔이방 </label>
    //               <input
    //                 className="form-control"
    //                 type="text"
    //                 id="sessionId"
    //                 value={mySessionId}
    //                 onChange={this.handleChangeSessionId}
    //                 required
    //               />
    //             </p>
    //             <p className="text-center">
    //               <input
    //                 className="btn btn-lg btn-success"
    //                 name="commit"
    //                 type="submit"
    //                 value="JOIN"
    //               />
    //             </p>
    //           </form>
    //         </div>
    //       </div>
    //     ) : null}

    //     {this.state.session !== undefined ? (
    //       <div id="session">
    //         <div id="session-header">
    //           <h1 id="session-title">{mySessionId}</h1>
    //           <input
    //             className="btn btn-large btn-danger"
    //             type="button"
    //             id="buttonLeaveSession"
    //             onClick={this.leaveSession}
    //             value="Leave session"
    //           />
    //           <input
    //             className="btn btn-large btn-success"
    //             type="button"
    //             id="buttonSwitchCamera"
    //             onClick={this.switchCamera}
    //             value="Switch Camera"
    //           />
    //         </div>

    //         {this.state.mainStreamManager !== undefined ? (
    //           <div id="main-video" className="col-md-6">
    //             <UserVideoComponent
    //               streamManager={this.state.mainStreamManager}
    //             />
    //           </div>
    //         ) : null}
    //         <div id="video-container" className="col-md-6">
    //           {this.state.publisher !== undefined ? (
    //             <div
    //               className="stream-container col-md-6 col-xs-6"
    //               onClick={() =>
    //                 this.handleMainVideoStream(this.state.publisher)
    //               }
    //             >
    //               <UserVideoComponent streamManager={this.state.publisher} />
    //             </div>
    //           ) : null}
    //           {this.state.subscribers.map((sub, i) => (
    //             <div
    //               key={sub.id}
    //               className="stream-container col-md-6 col-xs-6"
    //               onClick={() => this.handleMainVideoStream(sub)}
    //             >
    //               <span>{sub.id}</span>
    //               <UserVideoComponent streamManager={sub} />
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     ) : null}
    //   </div>
    // )
  }

  /**
   * --------------------------------------------
   * GETTING A TOKEN FROM YOUR APPLICATION SERVER
   * --------------------------------------------
   * The methods below request the creation of a Session and a Token to
   * your application server. This keeps your OpenVidu deployment secure.
   *
   * In this sample code, there is no user control at all. Anybody could
   * access your application server endpoints! In a real production
   * environment, your application server must identify the user to allow
   * access to the endpoints.
   *
   * Visit https://docs.openvidu.io/en/stable/application-server to learn
   * more about the integration of OpenVidu in your application server.
   */
  async getToken() {
    const sessionId = await this.createSession(this.state.mySessionId)
    return await this.createToken(sessionId)
  }

  async createSession(sessionId) {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}sessions`,
      { customSessionId: sessionId },
      {
        headers: { 'Content-Type': 'application/json' },
      },
    )
    return response.data // The sessionId
  }

  async createToken(sessionId) {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}sessions/` + sessionId + '/connections',
      {},
      {
        headers: { 'Content-Type': 'application/json' },
      },
    )
    return response.data // The token
  }
}

export default CounselOpenvidu
