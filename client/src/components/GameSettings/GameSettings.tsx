import { useState } from 'react'
import AddGameCard from '../AddGameCard/AddGameCard'
import GameCard from '../GameCard/GameCard'

import Switcher from '../Switcher/Switcher'
import Timer from '../Timer/Timer'
import './game-settings.sass'
import ShirtGameCard from './ShirtGameCard/ShirtGameCard'
import sh1URL from '../../assets/img/shirts/shirt1.jpg'
import sh2URL from '../../assets/img/shirts/shirt2.jpg'
import sh3URL from '../../assets/img/shirts/shirt3.jpg'
import sh4URL from '../../assets/img/shirts/shirt4.jpg'
import sh5URL from '../../assets/img/shirts/shirt5.jpg'

export default function GameSettings(): JSX.Element {
  const shirtsURLs = [sh1URL, sh2URL, sh3URL, sh4URL, sh5URL]
  console.log('sh1URL: ', sh1URL)

  const [masterAsPlayer, setMasterAsPlayer] = useState<boolean>(true)
  const [changingCard, setChangingCard] = useState<boolean>(false)
  const [isTimerNeeded, setIsTimerNeeded] = useState<boolean>(true)
  const [scoreType, setScoreType] = useState<string>('story point')
  const [scoreTypeShort, setScoreTypeShort] = useState<string>('SP')
  const [automaticallyAdmitNewMember, setAutomaticallyAdmitNewMember] = useState<boolean>(true)
  const [automaticallyFlipCards, setAutomaticallyFlipCards] = useState<boolean>(false)
  const [currentShirtCards, setcurrentShirtCards] = useState<string>(sh1URL)
  const [cardSet, setCardSet] = useState<string>('fibonacci')
  const [finishVoiting, setFinishVoiting] = useState<boolean>(false)

  const cardsSetCollection: { [key: string]: (number | string)[] } = {
    fibonacci: [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 'unknow', 'coffee break'],
    powers2: [0, 1, 2, 4, 8, 16, 32, 64, 'unknow', 'coffee break'],
    custom: ['unknow', 'coffee break'],
  }

  const cards = cardsSetCollection[cardSet].map((item: number | string) => {
    if (typeof item === 'number') {
      return (
        <GameCard
          mode="setting"
          cardType="value"
          cardValue={item}
          cardShirtURL={currentShirtCards}
          storyPointShort={scoreTypeShort}
          finsishVoiting={finishVoiting}
          key={item}
        />
      )
    }
    if (typeof item === 'string' && item === 'unknow') {
      return (
        <GameCard
          mode="setting"
          cardType="unknow"
          cardValue={item}
          cardShirtURL={currentShirtCards}
          storyPointShort={scoreTypeShort}
          finsishVoiting={finishVoiting}
          key={item}
        />
      )
    }
    if (typeof item === 'string' && item === 'coffee break') {
      return (
        <GameCard
          mode="setting"
          cardType="coffee break"
          cardValue={item}
          cardShirtURL={currentShirtCards}
          storyPointShort={scoreTypeShort}
          finsishVoiting={finishVoiting}
          key={item}
        />
      )
    }
    return (
      <GameCard
        mode="setting"
        cardType="value"
        cardValue={item}
        cardShirtURL={currentShirtCards}
        storyPointShort={scoreTypeShort}
        finsishVoiting={finishVoiting}
        key={item}
      />
    )
  })

  const handleMasterAsPlayer = (value: boolean) => {
    setMasterAsPlayer(value)
  }

  const handleChangingCard = (value: boolean) => {
    setChangingCard(value)
  }

  const handleIsTimerNeeded = (value: boolean) => {
    setIsTimerNeeded(value)
  }

  const handleAutomaticallyAdmitNewMember = (value: boolean) => {
    setAutomaticallyAdmitNewMember(value)
  }

  const handleAutomaticallyFlipCards = (value: boolean) => {
    setAutomaticallyFlipCards(value)
  }

  const handleChangeScoreType = (event: React.ChangeEvent<HTMLInputElement>) => {
    setScoreType(event.target.value)
  }

  const handleChangeScoreTypeShort = (event: React.ChangeEvent<HTMLInputElement>) => {
    setScoreTypeShort(event.target.value)
  }

  const handleChangeShirt = (value: string) => {
    setcurrentShirtCards(value)
  }

  const handleChangeCardSet = (value: string) => {
    setCardSet(value)
  }

  const shirtCards = shirtsURLs.map((url: string) => (
    <ShirtGameCard url={url} onChangeShirt={handleChangeShirt} shirtValue={currentShirtCards} key={url} />
  ))

  return (
    <div className="game-settings">
      <p className="game-settings__title">Game settings:</p>
      <div className="game-settings__form-wrapper">
        <Switcher
          title="Scram master as player:"
          defaultValue={masterAsPlayer}
          onChangeToogle={handleMasterAsPlayer}
          className="switcher-setting"
        />

        <Switcher
          title="Changing card in round end:"
          defaultValue={changingCard}
          onChangeToogle={handleChangingCard}
          className="switcher-setting"
        />

        <Switcher
          title="Is timer needed:"
          defaultValue={isTimerNeeded}
          onChangeToogle={handleIsTimerNeeded}
          className="switcher-setting"
        />
        <Switcher
          title="Automatically admit all new members"
          defaultValue={automaticallyAdmitNewMember}
          onChangeToogle={handleAutomaticallyAdmitNewMember}
          className="switcher-setting"
        />

        <Switcher
          title="Automatically flip cards after voting"
          defaultValue={automaticallyFlipCards}
          onChangeToogle={handleAutomaticallyFlipCards}
          className="switcher-setting"
        />

        <label className="game-settings__label">
          <span className="game-settings__span">Score type:</span>
          <input
            className="game-settings__input"
            type="text"
            value={scoreType}
            maxLength={20}
            onChange={handleChangeScoreType}
          />
        </label>

        <label className="game-settings__label">
          <span className="game-settings__span">Score type (Short):</span>
          <input
            className="game-settings__input"
            type="text"
            value={scoreTypeShort}
            maxLength={20}
            onChange={handleChangeScoreTypeShort}
          />
        </label>

        <div className="game-settings__round-time">
          <p className="game-settings__round-time__title">Round time:</p>
          <Timer mode="setting" initMinutes={0} initSeconds={0} needTimer={isTimerNeeded} />
        </div>

        <div className="game-settings__select-cover-wrapper">
          <p className="game-settings__game-cards-title">Select cover:</p>
          <div className="game-settings__game-cards-wrapper">{shirtCards}</div>
        </div>

        <div className="game-settings__add-card-values-wrapper">
          <p className="game-settings__game-cards-title">Add card values:</p>

          <div className="game-settings__card-set__wrapper">
            <label className="game-settings__card-set__label">
              <input
                className="game-settings__card-set__input"
                type="radio"
                value="fibonacci"
                checked={cardSet === 'fibonacci'}
                onChange={() => handleChangeCardSet('fibonacci')}
              />
              Fibonacci ( 0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ?, Pass )
            </label>

            <label className="game-settings__card-set__label">
              <input
                className="game-settings__card-set__input"
                type="radio"
                value="powers2"
                checked={cardSet === 'powers2'}
                onChange={() => handleChangeCardSet('powers2')}
              />
              Powers of 2 ( 0, 1, 2, 4, 8, 16, 32, 64, ?, Pass )
            </label>

            <label className="game-settings__card-set__label">
              <input
                className="game-settings__card-set__input"
                type="radio"
                value="custom"
                checked={cardSet === 'custom'}
                onChange={() => handleChangeCardSet('custom')}
              />
              Custom card set
            </label>
          </div>
          <div className="game-settings__game-cards-wrapper">
            {cards}
            {cardSet === 'custom' ? <AddGameCard mode="value" /> : ''}

            <button
              type="button"
              onClick={() => {
                setFinishVoiting(!finishVoiting)
                console.log('finishVoiting: ', finishVoiting)
              }}
            >
              click
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
