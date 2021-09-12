import { useState } from 'react'
import AddGameCard from '../AddGameCard/AddGameCard'
// import GameCard from '../GameCard'
import Switcher from '../Switcher/Switcher'
import Timer from '../Timer/Timer'
import './game-settings.sass'

export default function GameSettings(): JSX.Element {
  const [masterAsPlayer, setMasterAsPlayer] = useState<boolean>(true)
  const [changingCard, setChangingCard] = useState<boolean>(false)
  const [isTimerNeeded, setIsTimerNeeded] = useState<boolean>(true)
  const [scoreType, setScoreType] = useState<string>('story point')
  const [scoreTypeShort, setScoreTypeShort] = useState<string>('SP')

  const handleMasterAsPlayer = (value: boolean) => {
    setMasterAsPlayer(value)
  }

  const handleChangingCard = (value: boolean) => {
    setChangingCard(value)
  }

  const handleIsTimerNeeded = (value: boolean) => {
    setIsTimerNeeded(value)
  }

  const handleChangeScoreType = (event: React.ChangeEvent<HTMLInputElement>) => {
    setScoreType(event.target.value)
  }

  const handleChangeScoreTypeShort = (event: React.ChangeEvent<HTMLInputElement>) => {
    setScoreTypeShort(event.target.value)
  }

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

        <div className="game-settings__game-cards-wrapper">
          <p className="game-settings__game-cards-title">Add card values:</p>
          {/* <GameCard /> */}
          <AddGameCard />
        </div>
      </div>
    </div>
  )
}
