import { OpenVidu } from 'openvidu-browser'
import styled from 'styled-components'
import axios from 'axios'
import React, { Component } from 'react'
import UserVideoComponent from './UserVideoComponent'
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined'
import MicOutlinedIcon from '@mui/icons-material/MicOutlined'
import HeadsetIcon from '@mui/icons-material/Headset'
import VideocamOffOutlinedIcon from '@mui/icons-material/VideocamOffOutlined'
import MicOffIcon from '@mui/icons-material/MicOff'
import HeadsetOffIcon from '@mui/icons-material/HeadsetOff'
import CallEndIcon from '@mui/icons-material/CallEnd'
import ChatIcon from '@mui/icons-material/Chat'
// import ChatBox from '../Chat/ChatBox'
import FlightIcon from '@mui/icons-material/FlightIcon'
import MonitorIcon from '@mui/icons-material/MonitorIcon'
// import MicIcon from '@mui/icons-material/Mic';
// import MicOffIcon from '@mui/icons-material/MicOff';
// import MonitorIcon from '@mui/icons-material/Monitor';
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
`

export const ToolBar = () => {
  return (
    <>
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
      <Icon primary onClick={this.leaveSession}>
        <CallEndIcon />
      </Icon>
      <Icon primary={!this.state.isShare}>
        <MonitorIcon />
      </Icon>
      <Icon primary={!this.state.isTravel}>
        <FlightIcon />
      </Icon>
    </>
  )
}
