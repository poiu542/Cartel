import React from 'react'
import Bar from '@mui/material/AppBar'

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
      <div className="counseling-bar">
        <h3>{title}</h3>
        <p>{episodeCount}회차</p>
      </div>
    </Bar>
  )
}

export default CounselingBar
