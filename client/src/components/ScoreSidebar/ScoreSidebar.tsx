import React, { useEffect } from 'react'
import MemberCard from '../Member-card'
import ProgressCard from '../ProgressCard'
import IUser from '../../interfaces/IUser'
import IDataRounds from '../../interfaces/IDataRounds'
import { useAppSelector, useAppDispatch } from '../../store/redux'
import socket from '../../utils/socket'

import './ScoreSidebar.sass'
import { setScore } from '../../store/authReducer'
import { setRounds } from '../../store/memberRreducer'

const ScoreSidebar = () => {
  const { members } = useAppSelector((state) => state.membersParameters)
  // const { userId } = useAppSelector((state) => state.userParameters)
  const { userId, firstName, lastName, jobPossition, image, socketId, score } = useAppSelector(
    (state) => state.userParameters
  )
  const { masterAsPlayer } = useAppSelector((state) => state.gameSettingsParameters)
  // const { scoreId, scoreValue } = useAppSelector((state) => state.scoreParameters)
  // <ProgressCard progress={scoreValue} />
  const dispatch = useAppDispatch()
  // dispatch(setScore('In progress'))

  useEffect(() => {
    const handlerScore = (dataRounds: IDataRounds[]) => {
      dispatch(setRounds(dataRounds))
      dataRounds.forEach((element: { userId: string; score: string | number }) => {
        if (userId === element.userId) {
          console.log(element.score)
          dispatch(setScore(element.score))
        }
      })
    }
    socket.on('resultVoiting', handlerScore)
  }, [])

  const adminAsPlayerMemberCard = (
    <div className="score-sidebar__progress-players">
      <ProgressCard progress={score === undefined ? 'In progress' : score} />
      <MemberCard
        isAdmin
        title={`${firstName} ${lastName}`}
        subtitle={jobPossition}
        photoURL={image}
        key={userId}
        isChatCard
        socketId={`${socketId}`}
      />
    </div>
  )
  // const test = <div>test</div>

  const membersWithScore = members.map((item: IUser) => (
    <div className="score-sidebar__progress-players">
      <ProgressCard progress={score === undefined ? 'In progress' : score} />
      <MemberCard
        isCurrentPlayer={userId === item.userId}
        title={`${item.firstName} ${item.lastName}`}
        subtitle={item.jobPossition}
        photoURL={item.image}
        key={item.userId}
        isChatCard
        socketId={item.socketId === undefined ? '' : item.socketId}
      />
    </div>
  ))

  return (
    <div className="score-sidebar">
      {masterAsPlayer ? adminAsPlayerMemberCard : ''}
      {membersWithScore}
    </div>
  )
}

export default ScoreSidebar
