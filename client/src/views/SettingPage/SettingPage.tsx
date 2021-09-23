import './setting-page.sass'
import { useEffect } from 'react'
import GameField from '../../components/GameField/GameField'
import GameSettings from '../../components/GameSettings/GameSettings'
import Issues from '../../components/Issues/Issues'
import IssuesString from '../../components/IssuesString/IssuesString'
import MembersBlock from '../../components/MembersBlock/MembersBlock'
import ModalKickPlayer from '../../components/ModalKickPlayer/ModalKickPlayer'
import { useAppDispatch, useAppSelector } from '../../store/redux'
import LinkToLobby from '../../components/LinkToLobby/LinkToLobby'
import Button from '../../components/Button/Button'
import socket from '../../utils/socket'
import ScramMasterMemberBlock from '../../components/ScramMasterMemberBlock/ScramMasterMemberBlock'
import { JOIN_ROOM, MEMBERS, MODAL_KICK_PLAYER_CLIENT, MODAL_KICK_PLAYER_SERVER } from '../../utils/socketActions'
import { setSocketId } from '../../store/authReducer'
import IOpenModalKickPlayer from '../../interfaces/IOpenModalKickPlayer'
import { setIsKick, setKickMember, setKickMemberSocketId } from '../../store/kickMemberReducer'

const SettingPage: React.FC = () => {
  const { isKick, kickMember, kickMemberSocketId } = useAppSelector((state) => state.appParameters)
  const { roomId, userId } = useAppSelector((state) => state.userParameters)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setSocketId(socket.id))
    socket.emit(JOIN_ROOM, roomId, userId)
    socket.emit(MEMBERS, roomId)
  }, [])

  useEffect(() => {
    if (isKick) {
      socket.emit(MODAL_KICK_PLAYER_SERVER, roomId, isKick, kickMember, kickMemberSocketId)
    }
  }, [isKick])

  useEffect(() => {
    const handlerOpenModalKickPlayer = (data: { data: IOpenModalKickPlayer }) => {
      dispatch(setIsKick(data.data.isKick))
      dispatch(setKickMember(data.data.kickMember))
      dispatch(setKickMemberSocketId(data.data.kickMemberSocketId))
    }
    socket.on(MODAL_KICK_PLAYER_CLIENT, handlerOpenModalKickPlayer)
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
