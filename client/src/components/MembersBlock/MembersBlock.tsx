import { useEffect } from 'react'
import IAddNewUserData from '../../interfaces/IAddNewUserData'
import IUser from '../../interfaces/IUser'
import { setMembers, setNewMember } from '../../store/memberRreducer'
import store, { useAppDispatch, useAppSelector } from '../../store/redux'
import socket from '../../utils/socket'
import MemberCard from '../Member-card'
import './members-block.sass'

const MembersBlock: React.FC = () => {
  const { members } = useAppSelector((state) => state.membersParameters)
  const { userId } = useAppSelector((state) => state.userParameters)
  const dispatch = useAppDispatch()

  useEffect(() => {
    socket.once('sendMembersToClient', async (e: any) => {
      const data = await e
      dispatch(setMembers(data))
    })
  }, [])

  useEffect(() => {
    const newUserHandler = (data: IAddNewUserData) => {
      console.log('new user: ', data)
      store.dispatch(setNewMember(data))
    }
    socket.on('addNewUser', newUserHandler)
  }, [])

  return (
    <div className="members-block">
      <p className="members-block__title">Members</p>
      <div className="members-block__members-wrapper">
        {members.map((item: IUser) => (
          <MemberCard
            isCurrentPlayer={userId === item.userId}
            title={`${item.firstName} ${item.lastName}`}
            subtitle={item.jobPossition}
            photoURL={item.image}
            key={item.userId}
            isCancel
            isSmall
            socketId={item.socketId === undefined ? '' : item.socketId}
          />
        ))}
      </div>
    </div>
  )
}

export default MembersBlock
