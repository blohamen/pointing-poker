import Button from '../Button/Button'
import './modal-kick-player.sass'

interface IModalKickPlayerProps {
  fullName: string
}

export default function ModalKickPlayer(props: IModalKickPlayerProps): JSX.Element {
  return (
    <div className="mkp">
      <div className="mkp__form-wrapper">
        <p className="mkp__title">Kick player?</p>
        <p className="mkp__content">
          Are you really want to remove playe <b className="mkp__person">{props.fullName}</b> from game session?
        </p>
        <div className="mkp__button-wrapper">
          <Button value="Yes" size="small" theme="dark" />
          <Button value="No" size="small" theme="light" />
        </div>
      </div>
    </div>
  )
}
