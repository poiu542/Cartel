import React, { Component } from 'react'
import OpenViduVideoComponent from './OvVideo'
import './UserVideo.css'
import TestimonyModal from '../components/TestimonyModal'
import CounselJournalModal from '../components/CounselJournalModal'

export default class UserVideoComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isTestimonyModal: false,
      isCounselJournalModal: false,
    }
    this.handleVideoClick = this.handleVideoClick.bind(this)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // nextProps.isTestimony가 false라면 isTestimonyModal false로 변경
    if (!nextProps.isCounselJournal && prevState.isCounselJournalModal) {
      return { isCounselJournalModal: false }
    }
    // 상태를 변경하지 않을 때는 null을 반환
    return null
  }

  getNicknameTag() {
    // 유저 닉네임 가져오기
    return JSON.parse(this.props.streamManager.stream.connection.data)
      .clientData
  }

  // 비디오 누르기
  handleVideoClick() {
    this.setState((prevState) => ({
      isCounselJournalModal: !prevState.isCounselJournalModal,
    }))
  }

  render() {
    return (
      <div>
        {this.props.streamManager !== undefined ? (
          <div
            className="streamcomponent"
            onClick={this.handleVideoClick.bind(this)}
          >
            <OpenViduVideoComponent streamManager={this.props.streamManager} />
            <div>
              <p>{this.getNicknameTag()}</p>
            </div>
          </div>
        ) : null}

        {this.state.isCounselJournalModal && this.props.isCounselJournal ? (
          <CounselJournalModal nickname={this.getNicknameTag()} />
        ) : null}
        {/* redis 사용해서 testimony가 true면 소감문 띄우기 */}
      </div>
    )
  }
}
