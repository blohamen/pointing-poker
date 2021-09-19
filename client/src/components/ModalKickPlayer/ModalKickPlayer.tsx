import { isKick } from '../../store/reducers'
import { useAppDispatch } from '../../store/redux'
import Button from '../Button/Button'
import './modal-kick-player.sass'

interface IModalKickPlayerProps {
  fullName: string
}

export default function ModalKickPlayer(props: IModalKickPlayerProps): JSX.Element {
  const dispatch = useAppDispatch()

  return (
    <div className="mkp">
      <div className="mkp__form-wrapper">
        <p className="mkp__title">Kick player?</p>
        <p className="mkp__content">
          Are you really want to remove player &nbsp; <b className="mkp__person">{props.fullName} </b> &nbsp; from game
          session?
        </p>
        <div className="mkp__button-wrapper">
          <Button value="Yes" size="small" theme="dark" onSubmit={() => dispatch(isKick(false))} />
          <Button value="No" size="small" theme="light" onSubmit={() => dispatch(isKick(false))} />
        </div>
      </div>
    </div>
  )
}
