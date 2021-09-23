// import { useEffect } from 'react'
import { setIsKick, setKickMember, setKickMemberSocketId } from '../../store/reducers'
import { useAppDispatch, useAppSelector } from '../../store/redux'
import socket from '../../utils/socket'
import { DENY_KICK_MEMBER, PERMIT_KICK_MEMBER } from '../../utils/socketActions'
import Button from '../Button/Button'
import './modal-kick-player.sass'

interface IModalKickPlayerProps {
  fullName: string
}

export default function ModalKickPlayer(props: IModalKickPlayerProps): JSX.Element {
  const dispatch = useAppDispatch()
  const { kickMemberSocketId } = useAppSelector((state) => state.appParameters)
  const { roomId } = useAppSelector((state) => state.userParameters)

  // useEffect(() => {
  //   if(isKick) {
  //     socket.emit(KICK_MEMBER, roomId, userId)
  //   }

  // }, [isKick])

  return (
    <div className="mkp">
      <div className="mkp__form-wrapper">
        <p className="mkp__title">Kick player?</p>
        <p className="mkp__content">
          Are you really want to remove player &nbsp; <b className="mkp__person">{props.fullName} </b> &nbsp; from game
          session?
        </p>
        <div className="mkp__button-wrapper">
          <Button
            value="Yes"
            size="small"
            theme="dark"
            onSubmit={() => {
              dispatch(setIsKick(false))
              socket.emit(PERMIT_KICK_MEMBER, roomId, kickMemberSocketId)
            }}
          />
          <Button
            value="No"
            size="small"
            theme="light"
            onSubmit={() => {
              dispatch(setIsKick(false))
              dispatch(setKickMember(''))
              dispatch(setKickMemberSocketId(''))
              socket.emit(DENY_KICK_MEMBER, roomId, kickMemberSocketId)
            }}
          />
        </div>
      </div>
    </div>
  )
}
