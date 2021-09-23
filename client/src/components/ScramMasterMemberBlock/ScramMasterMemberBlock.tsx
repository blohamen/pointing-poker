import React from 'react'
import { useAppSelector } from '../../store/redux'
import MemberCard from '../Member-card'
import './scram-master-member-block.sass'

const ScramMasterMemberBlock: React.FC = (): JSX.Element => {
  const { adminMember } = useAppSelector((state) => state.membersParameters)
  const { userId } = useAppSelector((state) => state.userParameters)

  return (
    <div className="scram-master-member-block">
      <h3 className="scram-master-member-block__title">Scram master: </h3>
      <MemberCard
        isCurrentPlayer={userId === adminMember.userId}
        isSmall
        title={`${adminMember.firstName} ${adminMember.lastName}`}
        subtitle={adminMember.jobPossition}
        photoURL={adminMember.image}
        socketId={adminMember.socketId === undefined ? '' : adminMember.socketId}
      />
    </div>
  )
}

export default ScramMasterMemberBlock
