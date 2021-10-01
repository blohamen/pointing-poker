import React from 'react'
import MemberCard from '../Member-card'
import ProgressCard from '../ProgressCard'
import IUser from '../../interfaces/IUser'
import { useAppSelector } from '../../store/redux'

import './ScoreSidebar.sass'

const ScoreSidebar = () => {
  const { members } = useAppSelector((state) => state.membersParameters)
  const { userId } = useAppSelector((state) => state.userParameters)
  // const { scoreId, scoreValue } = useAppSelector((state) => state.scoreParameters)
  // <ProgressCard progress={scoreValue} />

  const membersWithScore = members.map((item: IUser) => (
    <div className="score-sidebar__progress-players">
      <ProgressCard progress="In Progress" />
      <MemberCard
        isCurrentPlayer={userId === item.userId}
        title={`${item.firstName} ${item.lastName}`}
        subtitle={item.jobPossition}
        photoURL={item.image}
        key={item.userId}
        isCancel
        isChatCard
        socketId={item.socketId === undefined ? '' : item.socketId}
      />
    </div>
  ))

  return <div className="score-sidebar">{membersWithScore}</div>
}

export default ScoreSidebar
