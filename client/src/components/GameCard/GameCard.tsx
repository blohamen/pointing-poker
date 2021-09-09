import { useState } from 'react'
import classNames from 'classnames';

import './game-card.sass'
import cupURL from '../../images/cup.png'

const Cup = () => (
  <div className="game-card__cup">
    <img src={cupURL} alt="cup" />
  </div>
)

interface ICardWithValue {
  cardValue: string
} 

const CardWithValue: React.FC<ICardWithValue> = ({cardValue} : ICardWithValue) => (
   <>
    <span className="game-card__value">{cardValue}</span>
    <span className="game-card__value-big">{cardValue}</span>
    <span className="game-card__value-upside-down">{cardValue}</span>
  </>
)

interface ICard {
  cardValue: string,
  cardShirtURL?: string
}

const GameCard: React.FC<ICard> = ({ cardValue, cardShirtURL }: ICard) => {

  const [isFlip, setFlip] = useState(true)
  
  const gameCardClick = () => {
    setFlip(!isFlip)
  }

  

  const onKeyPressHandler = () => {
    console.log("click");
  }

  return(
  <div 
    className={classNames("game-card", isFlip && "flip" )} 
    onClick={ gameCardClick } 
    onKeyPress={onKeyPressHandler}
    role="button"
    tabIndex={0}
  >
    <div className={classNames("game-card__inner", isFlip && "flip")}>
      <div className="game-card__front">
        {cardValue === 'cup' ? <Cup /> : <CardWithValue  cardValue={cardValue}/>}
      </div>
      <div className="game-card__back">
        <img className="game-card__back-image" src={cardShirtURL} alt=" " />
      </div>
    </div>
  </div>
)
}


GameCard.defaultProps = {
  cardShirtURL: "https://i.pinimg.com/originals/0e/32/a4/0e32a458fb8158720b1d5fc3ffc42c05.jpg"
}


export default GameCard
