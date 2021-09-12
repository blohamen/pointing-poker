import { useState } from 'react'
import Switcher from '../Switcher/Switcher'
import Timer from '../Timer/Timer'
import './game-settings.sass'

export default function GameSettings(): JSX.Element {
  const [masterAsPlayer, setMasterAsPlayer] = useState<boolean>(true)
  const [changingCard, setChangingCard] = useState<boolean>(false)
  const [isTimerNeeded, setIsTimerNeeded] = useState<boolean>(true)
  const handleMasterAsPlayer = (value: boolean) => {
    setMasterAsPlayer(value)
  }

  const handleChangingCard = (value: boolean) => {
    setChangingCard(value)
  }

  const handleIsTimerNeeded = (value: boolean) => {
    setIsTimerNeeded(value)
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

        <div className="game-settings__round-time">
          <p className="game-settings__round-time__title">Round time:</p>
          <Timer mode="setting" initMinutes={0} initSeconds={0} />
        </div>
      </div>
    </div>
  )
}
