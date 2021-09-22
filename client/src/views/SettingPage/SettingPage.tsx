import './setting-page.sass'
import { useEffect } from 'react'
import GameField from '../../components/GameField/GameField'
import GameSettings from '../../components/GameSettings/GameSettings'
import Issues from '../../components/Issues/Issues'
import IssuesString from '../../components/IssuesString/IssuesString'
import MembersBlock from '../../components/MembersBlock/MembersBlock'
import ModalKickPlayer from '../../components/ModalKickPlayer/ModalKickPlayer'
import { useAppSelector } from '../../store/redux'
import LinkToLobby from '../../components/LinkToLobby/LinkToLobby'
import Button from '../../components/Button/Button'
import socket from '../../utils/socket'
import ScramMasterMemberBlock from '../../components/ScramMasterMemberBlock/ScramMasterMemberBlock'

const SettingPage: React.FC = () => {
  const { isKick, kickMember } = useAppSelector((state) => state.appParameters)
  const { roomId, userId } = useAppSelector((state) => state.userParameters)

  useEffect(() => {
    socket.emit('joinRoom', roomId, userId)
    socket.emit('members', roomId)
  }, [])

  return (
    <GameField>
      <IssuesString />
      <ScramMasterMemberBlock />
      <LinkToLobby linkLobby="testlink" />
      <div className="setting-page__btns-wrapper">
        <Button value="Start Game" size="small" theme="dark" />
        <Button value="Cancel game" size="small" theme="light" />
      </div>
      <>
        <MembersBlock />
        <Issues />
        <GameSettings />
      </>
      {isKick ? <ModalKickPlayer fullName={kickMember} /> : ''}
    </GameField>
  )
}

export default SettingPage
