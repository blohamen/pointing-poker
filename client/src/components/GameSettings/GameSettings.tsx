import { useEffect, useState } from 'react'
import AddGameCard from '../AddGameCard/AddGameCard'
import GameCard from '../GameCard/GameCard'
import Switcher from '../Switcher/Switcher'
import Timer from '../Timer/Timer'
import './game-settings.sass'

import sh1URL from '../../assets/img/shirts/shirt1.jpg'
import sh2URL from '../../assets/img/shirts/shirt2.jpg'
import sh3URL from '../../assets/img/shirts/shirt3.jpg'
import sh4URL from '../../assets/img/shirts/shirt4.jpg'
import sh5URL from '../../assets/img/shirts/shirt5.jpg'
import ShirtGameCard from '../ShirtGameCard/ShirtGameCard'
import { useAppDispatch, useAppSelector } from '../../store/redux'
import {
  setAutomaticallyAdmitNewMember,
  setAutomaticallyFlipCards,
  setCardSetName,
  setChangingCard,
  setCurrentCardSet,
  setCurrentShirtCards,
  setIsTimerNeeded,
  setMasterAsPlayer,
  setScoreType,
  setScoreTypeShort,
} from '../../store/gameSettingsReducer'

export const cardsSetCollection: { [key: string]: string[] } = {
  fibonacci: ['0', '1', '2', '3', '5', '8', '13', '21', '34', '55', '89', 'unknow', 'coffee break'],
  powers2: ['0', '1', '2', '4', '8', '16', '32', '64', 'unknow', 'coffee break'],
  custom: ['unknow', 'coffee break'],
}
export default function GameSettings(): JSX.Element {
  const shirtsURLs = [sh1URL, sh2URL, sh3URL, sh4URL, sh5URL]
  const dispatch = useAppDispatch()
  const {
    masterAsPlayer,
    isTimerNeeded,
    scoreType,
    scoreTypeShort,
    automaticallyAdmitNewMember,
    automaticallyFlipCards,
    cardSetName,
    currentShirtCards,
    changingCard,
  } = useAppSelector((state) => state.gameSettingsParameters)

  const [finishVoiting, setFinishVoiting] = useState<boolean>(false)
  const [newCardVaule, setNewCardVaule] = useState<string>('')

  const handleChangeCardSet = (value: string) => {
    dispatch(setCardSetName(value))
    dispatch(setCurrentCardSet(cardsSetCollection[value]))
  }

  useEffect(() => {
    if (newCardVaule !== '') {
      cardsSetCollection.custom.push(newCardVaule)
      dispatch(setCurrentCardSet(cardsSetCollection.custom))
      setNewCardVaule('')
    }
  }, [newCardVaule])

  const cards = cardsSetCollection[cardSetName].map((item: number | string) => {
    if (item === 'unknow') {
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
    if (item === 'coffee break') {
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

  const handleChangeShirt = (value: string) => {
    dispatch(setCurrentShirtCards(value))
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
          onChangeToogle={(value: boolean) => {
            dispatch(setMasterAsPlayer(value))
          }}
          className="switcher-setting"
        />

        <Switcher
          title="Changing card in round end:"
          defaultValue={changingCard}
          onChangeToogle={(value: boolean) => {
            dispatch(setChangingCard(value))
          }}
          className="switcher-setting"
        />

        <Switcher
          title="Is timer needed:"
          defaultValue={isTimerNeeded}
          onChangeToogle={(value: boolean) => {
            dispatch(setIsTimerNeeded(value))
          }}
          className="switcher-setting"
        />
        <Switcher
          title="Automatically admit all new members"
          defaultValue={automaticallyAdmitNewMember}
          onChangeToogle={(value: boolean) => {
            dispatch(setAutomaticallyAdmitNewMember(value))
          }}
          className="switcher-setting"
        />

        <Switcher
          title="Automatically flip cards after voting"
          defaultValue={automaticallyFlipCards}
          onChangeToogle={(value: boolean) => {
            dispatch(setAutomaticallyFlipCards(value))
          }}
          className="switcher-setting"
        />

        <label className="game-settings__label">
          <span className="game-settings__span">Score type:</span>
          <input
            className="game-settings__input"
            type="text"
            value={scoreType}
            maxLength={20}
            onChange={(event) => {
              dispatch(setScoreType(event.target.value))
            }}
          />
        </label>

        <label className="game-settings__label">
          <span className="game-settings__span">Score type (Short):</span>
          <input
            className="game-settings__input"
            type="text"
            value={scoreTypeShort}
            maxLength={20}
            onChange={(event) => {
              dispatch(setScoreTypeShort(event.target.value))
            }}
          />
        </label>

        <div className="game-settings__round-time">
          <p className="game-settings__round-time__title">Round time:</p>
          <Timer mode="setting" />
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
                checked={cardSetName === 'fibonacci'}
                onChange={() => handleChangeCardSet('fibonacci')}
              />
              Fibonacci ( 0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ?, Pass )
            </label>

            <label className="game-settings__card-set__label">
              <input
                className="game-settings__card-set__input"
                type="radio"
                value="powers2"
                checked={cardSetName === 'powers2'}
                onChange={() => handleChangeCardSet('powers2')}
              />
              Powers of 2 ( 0, 1, 2, 4, 8, 16, 32, 64, ?, Pass )
            </label>

            <label className="game-settings__card-set__label">
              <input
                className="game-settings__card-set__input"
                type="radio"
                value="custom"
                checked={cardSetName === 'custom'}
                onChange={() => handleChangeCardSet('custom')}
              />
              Custom card set
            </label>
          </div>
          <div className="game-settings__game-cards-wrapper">
            {cards}
            {cardSetName === 'custom' ? (
              <AddGameCard
                onClick={(value: string) => {
                  setNewCardVaule(value)
                }}
              />
            ) : (
              ''
            )}

            <button
              type="button"
              onClick={() => {
                setFinishVoiting(!finishVoiting)
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
