import React from 'react'
import MemberCard from '../Member-card'
import ProgressCard from '../ProgressCard'

import './ScoreSidebar.sass'

const ScoreSidebar = () => {
  return (
    <div className="score-sidebar">
      <div className="score-sidebar__progress-players">
        <ProgressCard progress="2" />
        <MemberCard title="Player 1" subtitle="subtitle" photoURL="test" socketId="id" isChatCard />
      </div>
      <div className="score-sidebar__progress-players">
        <ProgressCard progress="In Progress" />
        <MemberCard title="Player 1" subtitle="subtitle" photoURL="test" socketId="id" isChatCard />
      </div>
      <div className="score-sidebar__progress-players">
        <ProgressCard progress="3" />
        <MemberCard title="Player 1" subtitle="subtitle" photoURL="test" socketId="id" isChatCard />
      </div>
      <div className="score-sidebar__progress-players">
        <ProgressCard progress="In Progress" />
        <MemberCard title="Player 1" subtitle="subtitle" photoURL="test" socketId="id" isChatCard />
      </div>
    </div>
  )
}

export default ScoreSidebar
