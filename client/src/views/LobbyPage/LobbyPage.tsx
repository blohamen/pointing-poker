import { useCallback, useEffect } from 'react'
import { useHistory } from 'react-router'
import Button from '../../components/Button/Button'
import GameField from '../../components/GameField/GameField'
import IssuesString from '../../components/IssuesString/IssuesString'
import MembersBlock from '../../components/MembersBlock/MembersBlock'
import ModalKickPlayer from '../../components/ModalKickPlayer/ModalKickPlayer'
import ObserverMemberBlock from '../../components/ObserverMemberBlock/ObserverMemberBlock'
import ScramMasterMemberBlock from '../../components/ScramMasterMemberBlock/ScramMasterMemberBlock'
import IIssue from '../../interfaces/IIssue'
import IKickMeberFromLobby from '../../interfaces/IKickMeberFromLobby'
import IOpenModalKickPlayer from '../../interfaces/IOpenModalKickPlayer'
import { setInitialUserState, setSocketId } from '../../store/authReducer'
import { setIssues } from '../../store/issuesReducer'
import { setIsKick, setKickMember, setKickMemberSocketId, setYouAreKickFromRoom } from '../../store/kickMemberReducer'
import { setInitialMembersState, setMembers } from '../../store/memberRreducer'
import { setStartGame } from '../../store/reducers'
import { useAppDispatch, useAppSelector } from '../../store/redux'
import socket from '../../utils/socket'
import {
  CANCEL_GAME_CLIENT,
  EXIT_GAME_CLIENT,
  EXIT_GAME_SERVER,
  GET_CHAT_MESSAGES,
  ISSUES,
  JOIN_ROOM,
  KICK_MEMBER_FROM_LOBBY,
  KICK_ME_FROM_ROOM,
  MEMBERS,
  MODAL_KICK_PLAYER_CLIENT,
  MODAL_KICK_PLAYER_SERVER,
  NEW_USER,
  START_GAME_CLIENT,
} from '../../utils/socketActions'
import './lobby-page.sass'

const LobbyPage: React.FC = () => {
  const exitGame = useCallback(() => {
    history.push('./')
    dispatch(setInitialUserState())
    dispatch(setInitialMembersState())
    dispatch(setYouAreKickFromRoom(''))
  }, [])

  const { isKick, kickMember, kickMemberSocketId, openModalKickPlayer } = useAppSelector(
    (state) => state.kickMemberParameters
  )
  const { roomId, userId, socketId } = useAppSelector((state) => state.userParameters)
  const { observerMemebers, members } = useAppSelector((state) => state.membersParameters)
  const { youAreKickFromRoom } = useAppSelector((state) => state.kickMemberParameters)
  const dispatch = useAppDispatch()
  const history = useHistory()

  useEffect(() => {
    dispatch(setSocketId(socket.id))
    socket.emit(JOIN_ROOM, roomId, userId)
    socket.emit(MEMBERS, roomId)
    socket.emit(GET_CHAT_MESSAGES, roomId)
  }, [])

  useEffect(() => {
    const handlerCancelGameClient = () => {
      socket.emit(KICK_ME_FROM_ROOM, roomId)
      exitGame()
    }
    socket.once(CANCEL_GAME_CLIENT, handlerCancelGameClient)
  }, [])

  useEffect(() => {
    if (userId !== '') {
      socket.emit(NEW_USER, roomId, userId)
    }
  }, [userId])

  useEffect(() => {
    if (isKick && openModalKickPlayer) {
      socket.emit(MODAL_KICK_PLAYER_SERVER, roomId, isKick, kickMember, kickMemberSocketId)
    }
  }, [isKick, openModalKickPlayer])

  useEffect(() => {
    const handlerOpenModalKickPlayer = (data: { data: IOpenModalKickPlayer }) => {
      dispatch(setIsKick(data.data.isKick))
      dispatch(setKickMember(data.data.kickMember))
      dispatch(setKickMemberSocketId(data.data.kickMemberSocketId))
    }
    socket.on(MODAL_KICK_PLAYER_CLIENT, handlerOpenModalKickPlayer)

    return () => {
      socket.off(MODAL_KICK_PLAYER_CLIENT, handlerOpenModalKickPlayer)
    }
  }, [])

  useEffect(() => {
    const handlerKickMemberFromLobby = (data: IKickMeberFromLobby) => {
      dispatch(setYouAreKickFromRoom(data.kickerMember))
      dispatch(setMembers({ members: data.members }))
    }
    socket.on(KICK_MEMBER_FROM_LOBBY, handlerKickMemberFromLobby)

    return () => {
      socket.off(KICK_MEMBER_FROM_LOBBY, handlerKickMemberFromLobby)
    }
  }, [])

  useEffect(() => {
    if (youAreKickFromRoom !== '' && socketId !== '') {
      if (youAreKickFromRoom === socketId) {
        socket.emit(KICK_ME_FROM_ROOM, roomId)
        exitGame()
      }
    }
  }, [youAreKickFromRoom, socketId])

  useEffect(() => {
    const handleStartGame = (data: boolean) => {
      dispatch(setStartGame(data))
      if (data) history.push('/game')
    }
    socket.on(START_GAME_CLIENT, handleStartGame)

    return () => {
      socket.off(START_GAME_CLIENT, handleStartGame)
    }
  }, [])

  useEffect(() => {
    const handleEitGameClient = (data: { exit: boolean; socketId: string }) => {
      if (data.exit && data.socketId === socketId) exitGame()
    }
    socket.on(EXIT_GAME_CLIENT, handleEitGameClient)

    return () => {
      socket.off(EXIT_GAME_CLIENT, handleEitGameClient)
    }
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
      <div className="lobby-page__btn-wrapper">
        <Button
          value="Exit"
          size="small"
          theme="light"
          onSubmit={() => {
            socket.emit(EXIT_GAME_SERVER, roomId)
          }}
        />
      </div>
      {observerMemebers.length !== 0 ? <ObserverMemberBlock /> : ''}
      <MembersBlock />
      {isKick && members.length >= 3 ? <ModalKickPlayer fullName={kickMember} /> : ''}
    </GameField>
  )
}

export default LobbyPage
