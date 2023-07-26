import React from 'react'
import Bar from '@mui/material/AppBar'
import { Icon } from '@mui/material'

interface CounselingBarProps {
  title: string
  episodeCount: number
}

const CounselingBar: React.FC<CounselingBarProps> = ({
  title,
  episodeCount,
}) => {
  return (
    <Bar position="static" color="primary">
      <Icon>
        <img
          src="./image/NoticeBell.png"
          alt="User profile"
          style={{ width: '40px', height: '40px' }}
        />
      </Icon>
      <div className="counseling-bar">
        <h3>
          {title} - {episodeCount}회차
        </h3>
      </div>
    </Bar>
  )
}

export default CounselingBar
