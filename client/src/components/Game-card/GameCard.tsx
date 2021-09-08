import './game-card.sass'

interface ICard {
  cardValue: string,
  cardShirt?: string
}

const GameCard: React.FC<ICard> = ({ cardValue, cardShirt }: ICard) => {

  const gameCardClick = () => {
    console.log("click");
  }

  const onKeyPressHandler = () => {
    console.log("click");
  }
  
  return(
  <div 
    className="game-card" 
    onClick={ gameCardClick } 
    onKeyPress={onKeyPressHandler}
    role="button"
    tabIndex={0}
  >
    <div className="game-card__inner">
      <div className="game-card__front">
        <span className="game-card__value">{cardValue}</span>
        <span className="game-card__sp">sp</span>
        <span className="game-card__value-upside-down">{cardValue}</span>
      </div>
      <div className="game-card__back">{cardShirt}</div>
    </div>
  </div>
)
}


GameCard.defaultProps = {
  cardShirt: "back"
}


export default GameCard
