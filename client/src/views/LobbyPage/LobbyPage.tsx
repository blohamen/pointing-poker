import { useEffect } from 'react'
import Button from '../../components/Button/Button'
import GameField from '../../components/GameField/GameField'
import IssuesString from '../../components/IssuesString/IssuesString'
import MembersBlock from '../../components/MembersBlock/MembersBlock'
import ModalKickPlayer from '../../components/ModalKickPlayer/ModalKickPlayer'
import ObserverMemberBlock from '../../components/ObserverMemberBlock/ObserverMemberBlock'
import ScramMasterMemberBlock from '../../components/ScramMasterMemberBlock/ScramMasterMemberBlock'
import { setSocketId } from '../../store/authReducer'
import { useAppDispatch, useAppSelector } from '../../store/redux'
import socket from '../../utils/socket'
import { JOIN_ROOM, MEMBERS, MODAL_KICK_PLAYER_SERVER, NEW_USER } from '../../utils/socketActions'
import './lobby-page.sass'

const LobbyPage: React.FC = () => {
  const { isKick, kickMember, kickMemberSocketId } = useAppSelector((state) => state.appParameters)
  const { roomId, userId } = useAppSelector((state) => state.userParameters)
  const { observerMemebers } = useAppSelector((state) => state.membersParameters)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setSocketId(socket.id))
    socket.emit(JOIN_ROOM, roomId, userId)
    socket.emit(MEMBERS, roomId)
  }, [])

  useEffect(() => {
    if (userId !== '') {
      socket.emit(NEW_USER, roomId, userId)
    }
  }, [userId])

  useEffect(() => {
    if (isKick) {
      socket.emit(MODAL_KICK_PLAYER_SERVER, roomId, isKick, kickMember, kickMemberSocketId)
    }
  }, [isKick])

  return (
    <GameField>
      <IssuesString />
      <ScramMasterMemberBlock />
      <div className="lobby-page__btn-wrapper">
        <Button value="Exit" size="small" theme="light" />
      </div>
      {observerMemebers.length !== 0 ? <ObserverMemberBlock /> : ''}
      <MembersBlock />
      {isKick ? <ModalKickPlayer fullName={kickMember} /> : ''}
    </GameField>
  )
}

export default LobbyPage
