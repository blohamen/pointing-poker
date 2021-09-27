// import { useEffect } from 'react'
import { useEffect } from 'react'
import { setInitialStateKickMemberParameters, setKickMemberResolution } from '../../store/kickMemberReducer'
import { useAppDispatch, useAppSelector } from '../../store/redux'
import socket from '../../utils/socket'
import { RESOLUTION_KICK_MEMBER } from '../../utils/socketActions'

import Button from '../Button/Button'
import './modal-kick-player.sass'

interface IModalKickPlayerProps {
  fullName: string
}

export default function ModalKickPlayer(props: IModalKickPlayerProps): JSX.Element {
  const dispatch = useAppDispatch()
  const { kickMemberSocketId, kickMemberResolution } = useAppSelector((state) => state.kickMemberParameters)
  const { roomId } = useAppSelector((state) => state.userParameters)

  useEffect(() => {
    if (kickMemberResolution !== null) {
      socket.emit(RESOLUTION_KICK_MEMBER, roomId, kickMemberSocketId, kickMemberResolution)
      dispatch(setInitialStateKickMemberParameters())
    }
  }, [kickMemberResolution])

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
              dispatch(setKickMemberResolution(true))
            }}
          />
          <Button
            value="No"
            size="small"
            theme="light"
            onSubmit={() => {
              dispatch(setKickMemberResolution(false))
            }}
          />
        </div>
      </div>
    </div>
  )
}
