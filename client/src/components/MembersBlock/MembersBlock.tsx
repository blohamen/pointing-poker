import { useEffect } from 'react'
import IAddNewUserData from '../../interfaces/IAddNewUserData'
import IUser from '../../interfaces/IUser'
import { setMembers, setNewMember } from '../../store/memberRreducer'
import store, { useAppDispatch, useAppSelector } from '../../store/redux'
import socket from '../../utils/socket'
import { ADD_NEW_USER, DELETE_MEMBERS, SEND_MEMBERS_TO_CLIENT } from '../../utils/socketActions'
import MemberCard from '../Member-card'
import './members-block.sass'

const MembersBlock: React.FC = () => {
  const { members } = useAppSelector((state) => state.membersParameters)
  const { userId } = useAppSelector((state) => state.userParameters)
  const dispatch = useAppDispatch()

  useEffect(() => {
    socket.once(SEND_MEMBERS_TO_CLIENT, async (e: any) => {
      const data = await e
      dispatch(setMembers(data))
    })
  }, [])

  useEffect(() => {
    const newUserHandler = (data: IAddNewUserData) => {
      store.dispatch(setNewMember(data))
    }
    socket.on(ADD_NEW_USER, newUserHandler)

    return () => {
      socket.off(ADD_NEW_USER, newUserHandler)
    }
  }, [])

  useEffect(() => {
    const handleMembers = (data: any) => {
      dispatch(setMembers(data))
    }
    socket.on(DELETE_MEMBERS, handleMembers)

    return () => {
      socket.off(DELETE_MEMBERS, handleMembers)
    }
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
