import './setting-page.sass'
import { useEffect } from 'react'
import { useHistory } from 'react-router'
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
import {
  ISSUES,
  JOIN_ROOM,
  KICK_MEMBER_FROM_LOBBY,
  KICK_ME_FROM_ROOM,
  MEMBERS,
  MODAL_KICK_PLAYER_CLIENT,
  MODAL_KICK_PLAYER_SERVER,
} from '../../utils/socketActions'
import { setInitialUserState, setSocketId } from '../../store/authReducer'
import IOpenModalKickPlayer from '../../interfaces/IOpenModalKickPlayer'
import { setIsKick, setKickMember, setKickMemberSocketId, setYouAreKickFromRoom } from '../../store/kickMemberReducer'
import ObserverMemberBlock from '../../components/ObserverMemberBlock/ObserverMemberBlock'
import IKickMeberFromLobby from '../../interfaces/IKickMeberFromLobby'
import { setMembers, setInitialMembersState } from '../../store/memberRreducer'
import ModalCreateIssue from '../../components/ModalCreateIssue/ModalCreateIssue'
import IIssue from '../../interfaces/IIssue'
import { setIssues } from '../../store/issuesReducer'
import ModalModifiedIssue from '../../components/ModalModifiedIssue/ModalModifiedIssue'

const SettingPage: React.FC = () => {
  const dispatch = useAppDispatch()
  const { isKick, kickMember, kickMemberSocketId, openModalKickPlayer } = useAppSelector(
    (state) => state.kickMemberParameters
  )
  const { roomId, userId, socketId } = useAppSelector((state) => state.userParameters)
  const { observerMemebers, members } = useAppSelector((state) => state.membersParameters)
  const { youAreKickFromRoom } = useAppSelector((state) => state.kickMemberParameters)
  const { modalCreateIssues, modalModifiedIssue } = useAppSelector((state) => state.issuesParameters)
  const history = useHistory()

  useEffect(() => {
    dispatch(setSocketId(socket.id))
    socket.emit(JOIN_ROOM, roomId, userId)
    socket.emit(MEMBERS, roomId)
  }, [])

  useEffect(() => {
    if (isKick && openModalKickPlayer) {
      socket.emit(MODAL_KICK_PLAYER_SERVER, roomId, isKick, kickMember, kickMemberSocketId)
    }
  }, [isKick, openModalKickPlayer])

  useEffect(() => {
    const handlerKickMemberFromLobby = (data: IKickMeberFromLobby) => {
      dispatch(setYouAreKickFromRoom(data.kickerMember))
      dispatch(setMembers({ members: data.members }))
    }
    socket.on(KICK_MEMBER_FROM_LOBBY, handlerKickMemberFromLobby)
  }, [])

  useEffect(() => {
    if (youAreKickFromRoom !== '' && socketId !== '') {
      if (youAreKickFromRoom === socketId) {
        socket.emit(KICK_ME_FROM_ROOM, roomId)
        history.push('./')
        dispatch(setInitialUserState())
        dispatch(setInitialMembersState())
        dispatch(setYouAreKickFromRoom(''))
      }
    }
  }, [youAreKickFromRoom, socketId])

  useEffect(() => {
    const handlerOpenModalKickPlayer = (data: { data: IOpenModalKickPlayer }) => {
      dispatch(setIsKick(data.data.isKick))
      dispatch(setKickMember(data.data.kickMember))
      dispatch(setKickMemberSocketId(data.data.kickMemberSocketId))
    }
    socket.on(MODAL_KICK_PLAYER_CLIENT, handlerOpenModalKickPlayer)
  }, [])

  useEffect(() => {
    const handlerIssues = (data: { issues: IIssue[] }) => {
      dispatch(setIssues(data.issues))
    }
    socket.on(ISSUES, handlerIssues)
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
        {observerMemebers.length !== 0 ? <ObserverMemberBlock /> : ''}
        <MembersBlock />
        <Issues />
        <GameSettings />
      </>
      {isKick && members.length >= 3 ? <ModalKickPlayer fullName={kickMember} /> : ''}
      {modalCreateIssues ? <ModalCreateIssue /> : ''}
      {modalModifiedIssue ? <ModalModifiedIssue /> : ''}
    </GameField>
  )
}

export default SettingPage
