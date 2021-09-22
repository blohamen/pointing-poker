import { useEffect } from 'react'
import Button from '../../components/Button/Button'
import GameField from '../../components/GameField/GameField'
import IssuesString from '../../components/IssuesString/IssuesString'
import MembersBlock from '../../components/MembersBlock/MembersBlock'
import ModalKickPlayer from '../../components/ModalKickPlayer/ModalKickPlayer'
import ObserverMemberBlock from '../../components/ObserverMemberBlock/ObserverMemberBlock'
import ScramMasterMemberBlock from '../../components/ScramMasterMemberBlock/ScramMasterMemberBlock'
import { useAppSelector } from '../../store/redux'
import socket from '../../utils/socket'
import './lobby-page.sass'

const LobbyPage: React.FC = () => {
  const { isKick, kickMember } = useAppSelector((state) => state.appParameters)
  const { roomId, userId } = useAppSelector((state) => state.userParameters)
  const { observerMemebers } = useAppSelector((state) => state.membersParameters)
  useEffect(() => {
    socket.emit('joinRoom', roomId)
    socket.emit('members', roomId)
  }, [])

  useEffect(() => {
    if (userId !== '') {
      socket.emit('newUser', roomId, userId)
    }
  }, [userId])

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
