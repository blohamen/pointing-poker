<<<<<<< HEAD
import classNames from 'classnames'
import './card.sass'


=======
import './card.sass'

>>>>>>> origin/scram-master
const ItsYou = () => <div className="card__its-you">It&apos;s you</div>

interface ICard {
  title: string,
  subtitle: string,
  isSmall?: boolean,
  left?: JSX.Element | null, 
  right?: JSX.Element | null, 
  isCurrentPlayer?: boolean,
}

<<<<<<< HEAD
export const Card: React.FC<ICard> = ( { isSmall, left, right, isCurrentPlayer, title, subtitle }: ICard ) =>
  <div className = {classNames("card", isSmall && 'small')}>
    {left}
    <div>
      {isCurrentPlayer && <ItsYou />}
      <span className={classNames('card__title', isSmall && 'small-title')}>{title}</span>
      <div className={classNames('card_subtitle', isSmall && 'small__subtitle')}>{subtitle}</div>
    </div>
    {right}
  </div>
=======
export const Card: React.FC<ICard> = (props: ICard ) => {
  const { isSmall, left, right, isCurrentPlayer, title, subtitle } = props

  let classNameCard = "card"
  const classNameInfo = "card__info"
  let classNameTitle = "card__title"
  let classNameSubtitle = "card__subtitle"

  if(isSmall){
    classNameCard = "small-card"
    classNameTitle = "small-card__title"
    classNameSubtitle = "small-card__subtitle"
  }

  return (
  <div className = {classNameCard}>
    {left}
    <div className={classNameInfo}>
      {isCurrentPlayer === true ? <ItsYou /> : ""}
      <span className={classNameTitle}>{title}</span>
      <div className={classNameSubtitle}>{subtitle}</div>
    </div>
    {right}
  </div>
  )
}
>>>>>>> origin/scram-master

Card.defaultProps = {
  isSmall: false,
  left: null,
  right: null,
  isCurrentPlayer: false
};