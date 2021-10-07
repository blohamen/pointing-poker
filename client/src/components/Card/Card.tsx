import classNames from 'classnames'
import './card.sass'

const ItsYou = () => <div className="card__its-you">It&apos;s you</div>
const ItsAdmin = () => <div className="card__its-you">Admin</div>

interface ICard {
  title: string | number | undefined
  subtitle: string
  isSmall?: boolean
  isChatCard?: boolean
  left?: JSX.Element | null
  right?: JSX.Element | null
  isCurrentPlayer?: boolean
  isAdmin?: boolean
}

const Card: React.FC<ICard> = ({
  isChatCard,
  isSmall,
  left,
  right,
  isCurrentPlayer,
  isAdmin,
  title,
  subtitle,
}: ICard) => (
  <div className={classNames('card', isSmall && 'small', isChatCard && 'chat-card')}>
    {left}
    <div>
      {isCurrentPlayer && <ItsYou />}
      {isAdmin && <ItsAdmin />}
      <span className={classNames('card__title', isSmall && 'small-title', isChatCard && 'chat-title')}>{title}</span>
      <div className={classNames('card_subtitle', isSmall && 'small-subtitle', isChatCard && 'chat-subtitle')}>
        {subtitle}
      </div>
    </div>
    {right}
  </div>
)

Card.defaultProps = {
  isSmall: false,
  left: null,
  right: null,
  isCurrentPlayer: false,
  isAdmin: false,
}

export default Card
