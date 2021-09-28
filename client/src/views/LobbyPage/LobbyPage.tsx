import { useEffect } from 'react'
import { useHistory } from 'react-router'
import Button from '../../components/Button/Button'
import GameField from '../../components/GameField/GameField'
import IssuesString from '../../components/IssuesString/IssuesString'
import MembersBlock from '../../components/MembersBlock/MembersBlock'
import ModalKickPlayer from '../../components/ModalKickPlayer/ModalKickPlayer'
import ObserverMemberBlock from '../../components/ObserverMemberBlock/ObserverMemberBlock'
import ScramMasterMemberBlock from '../../components/ScramMasterMemberBlock/ScramMasterMemberBlock'
import IKickMeberFromLobby from '../../interfaces/IKickMeberFromLobby'
import IOpenModalKickPlayer from '../../interfaces/IOpenModalKickPlayer'
import { setInitialUserState, setSocketId } from '../../store/authReducer'
import { setIsKick, setKickMember, setKickMemberSocketId, setYouAreKickFromRoom } from '../../store/kickMemberReducer'
import { setInitialMembersState, setMembers } from '../../store/memberRreducer'
import { useAppDispatch, useAppSelector } from '../../store/redux'
import socket from '../../utils/socket'
import {
  JOIN_ROOM,
  KICK_MEMBER_FROM_LOBBY,
  KICK_ME_FROM_ROOM,
  MEMBERS,
  MODAL_KICK_PLAYER_CLIENT,
  MODAL_KICK_PLAYER_SERVER,
  NEW_USER,
} from '../../utils/socketActions'
import './lobby-page.sass'

const LobbyPage: React.FC = () => {
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
  }, [])

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
        console.log('you are must be delete from room')
        socket.emit(KICK_ME_FROM_ROOM, roomId)
        history.push('./')
        dispatch(setInitialUserState())
        dispatch(setInitialMembersState())
        dispatch(setYouAreKickFromRoom(''))
      }
    }
  }, [youAreKickFromRoom, socketId])

  return (
    <GameField>
      <IssuesString />
      <ScramMasterMemberBlock />
      <div className="lobby-page__btn-wrapper">
        <Button value="Exit" size="small" theme="light" />
      </div>
      {observerMemebers.length !== 0 ? <ObserverMemberBlock /> : ''}
      <MembersBlock />
      {isKick && members.length >= 3 ? <ModalKickPlayer fullName={kickMember} /> : ''}
    </GameField>
  )
}

export default LobbyPage
