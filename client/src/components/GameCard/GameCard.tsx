import { useEffect, useState } from 'react'
import classNames from 'classnames'
import socket from '../../utils/socket'
import './game-card.sass'
import cupURL from '../../assets/img/cup.png'
import questionURL from '../../assets/img/question.png'
import { useAppSelector } from '../../store/redux'

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
  const { roomId, userId } = useAppSelector((state) => state.userParameters)
  const { issues, currentIssue } = useAppSelector((state) => state.issuesParameters)
  const [isFlip, setFlip] = useState(props.finsishVoiting)
  const handelClick = (value: string | number) => {
    const issueId = issues[currentIssue]
    socket.emit('voitingValueIssue', issueId, roomId, currentIssue, userId, value)
  }
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
        <div
          className="game-card__front"
          onClick={() => {
            handelClick(props.cardValue)
          }}
          onKeyDown={() => {
            console.log('Hello from here')
          }}
          role="button"
          tabIndex={0}
        >
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
