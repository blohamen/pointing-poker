import PropTypes from 'prop-types';
import './card.sass'

const ItsYou = () => <div className="card__its-you">It&apos;s you</div>

const Card = (props) => {
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

Card.propTypes = {
  isSmall: PropTypes.bool.isRequired,
  left: PropTypes.string.isRequired,
  right: PropTypes.string.isRequired,
  isCurrentPlayer: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Card
