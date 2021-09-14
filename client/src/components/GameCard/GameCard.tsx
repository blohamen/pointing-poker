import { useEffect, useState } from 'react'
import classNames from 'classnames'

import './game-card.sass'
import cupURL from '../../assets/img/cup.png'
import questionURL from '../../assets/img/question.png'

interface IImageCardsProps {
  url: string
}

const Cup = (props: IImageCardsProps) => (
  <div className="game-card__cup">
    <img src={props.url} alt="cup" className="game-card__back-image" />
  </div>
)

const Question = (props: IImageCardsProps) => (
  <div className="game-card__question">
    <img src={props.url} alt="unknow" className="game-card__back-image" />
  </div>
)

interface ICard {
  mode: 'setting' | 'play' | 'playerСhoice' | 'result'
  cardType?: 'value' | 'unknow' | 'coffee break'
  cardValue: string | number
  cardShirtURL: string
  storyPointShort: string
  finsishVoiting: boolean
}

const GameCard: React.FC<ICard> = (props: ICard) => {
  const [isFlip, setFlip] = useState(props.finsishVoiting)

  useEffect(() => {
    setFlip(!isFlip)
  }, [props.finsishVoiting])

  let cardSize = ''

  if (props.mode === 'setting') {
    cardSize = 'game__setting-mode'
  } else if (props.mode === 'play') {
    cardSize = 'game__play-mode'
  } else if (props.mode === 'playerСhoice') {
    cardSize = 'game__playerСhoice-mode'
  } else {
    cardSize = 'game__result-mode'
  }

  return (
    <div className={classNames('game-card__container', !isFlip && 'flip')}>
      <div className={classNames('game-card__card', cardSize)}>
        <div className="game-card__front">
          <span className="game-card__value-up">{props.cardValue}</span>
          {(() => {
            if (props.cardType === 'value') {
              return <p className="game-card__value-center">{props.storyPointShort}</p>
            }
            if (props.cardType === 'unknow') {
              return <Question url={questionURL} />
            }
            if (props.cardType === 'coffee break') return <Cup url={cupURL} />
          })()}
          <span className="game-card__value-down">{props.cardValue}</span>
        </div>

        <div className="game-card__back">
          <img className="game-card__back-image" src={props.cardShirtURL} alt="shirt" />
        </div>
      </div>
    </div>
  )
}

export default GameCard
