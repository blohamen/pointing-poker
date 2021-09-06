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

Card.defaultProps = {
  isSmall: false,
  left: null,
  right: null,
  isCurrentPlayer: false
};