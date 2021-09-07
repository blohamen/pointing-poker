import classNames from 'classnames'
import './card.sass'

const ItsYou = () => <div className="card__its-you">It&apos;s you</div>

interface ICard {
  title: string,
  subtitle: string,
  isSmall?: boolean,
  left?: JSX.Element | null, 
  right?: JSX.Element | null, 
  isCurrentPlayer?: boolean,
}

export const Card: React.FC<ICard> = ( { isSmall, left, right, isCurrentPlayer, title, subtitle }: ICard ) =>
  <div className = {classNames("card", isSmall && 'small')}>
    {left}
    <div>
      {isCurrentPlayer === true ? <ItsYou /> : ""}
      <span className={classNames('card__title', isSmall && 'small-title')}>{title}</span>
      <div className={classNames('card_subtitle', isSmall && 'small__subtitle')}>{subtitle}</div>
    </div>
    {right}
  </div>

Card.defaultProps = {
  isSmall: false,
  left: null,
  right: null,
  isCurrentPlayer: false
};