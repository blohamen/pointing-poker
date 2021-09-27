import { useEffect } from 'react'
import { setTimerMinutes, setTimerSeconds } from '../../store/gameSettingsReducer'
import { useAppDispatch, useAppSelector } from '../../store/redux'
import './timer.sass'

interface ITimerProps {
  mode: 'setting' | 'game'
  timer?: boolean
  onChangeTimerMode?(value: boolean): void
}

export default function Timer(props: ITimerProps): JSX.Element {
  const { timerMinutes, timerSeconds, isTimerNeeded } = useAppSelector((state) => state.gameSettingsParameters)
  const dispatch = useAppDispatch()
  const mode = props.mode !== 'setting'

  const calculateTimeLeft = () => {
    const seconds: number = timerMinutes * 60 + timerSeconds
    const difference = seconds - 1
    if (difference <= 0) {
      dispatch(setTimerMinutes(0))
      dispatch(setTimerSeconds(0))
      if (props.onChangeTimerMode) props.onChangeTimerMode(false)
      return
    }
    const newMinutes = Math.floor(difference / 60)
    const newSeconds = Math.floor(difference - newMinutes * 60)
    dispatch(setTimerMinutes(newMinutes))
    dispatch(setTimerSeconds(newSeconds))
  }

  useEffect(() => {
    if (!isTimerNeeded) {
      dispatch(setTimerMinutes(0))
      dispatch(setTimerSeconds(0))
    }
  }, [isTimerNeeded])

  useEffect(() => {
    if (props.timer) {
      const timer = setInterval(() => calculateTimeLeft(), 1000)
      return () => clearInterval(timer)
    }
  }, [timerMinutes, timerSeconds, props.timer])

  return (
    <div className="timer">
      <label htmlFor="minutes" className="timer__minutes">
        <span>minutes</span>
        <input
          type="number"
          name="minutes"
          className="timer__input"
          value={timerMinutes}
          min={0}
          max={59}
          step={1}
          readOnly={mode}
          disabled={!isTimerNeeded}
          onKeyDown={(e) => !/^[А-Яа-яA-Za-z ]$/.test(e.key)}
          onChange={(e) => {
            if (+e.target.value > +e.target.max) {
              dispatch(setTimerMinutes(+e.target.max))
              return
            }
            if (+e.target.value <= +e.target.max && e.target.value.length > 2) {
              dispatch(setTimerMinutes(+e.target.max))
              return
            }
            dispatch(setTimerMinutes(+e.target.value))
          }}
        />
      </label>
      <span>:</span>
      <label htmlFor="seconds" className="timer__seconds">
        <span>seconds</span>
        <input
          type="number"
          name="seconds"
          className="timer__input"
          value={timerSeconds}
          min={0}
          max={59}
          step={1}
          readOnly={mode}
          disabled={!isTimerNeeded}
          onKeyDown={(e) => !/^[А-Яа-яA-Za-z ]$/.test(e.key)}
          onChange={(e) => {
            if (+e.target.value > +e.target.max) {
              dispatch(setTimerSeconds(+e.target.max))
              return
            }
            if (+e.target.value <= +e.target.max && e.target.value.length > 2) {
              dispatch(setTimerSeconds(+e.target.max))
              return
            }
            dispatch(setTimerSeconds(+e.target.value))
          }}
        />
      </label>
    </div>
  )
}

// Helper!!!

// const [isTimer, setIsTimer] = useState(false)
// const handlerTimer = () => {
//   setIsTimer(false)
// }
// <Timer mode="game" initMinutes={0} initSeconds={30} timer={isTimer} onChangeTimerMode={handlerTimer} />
//       <button
//         type="button"
//         onClick={() => {
//           setIsTimer(true)
//         }}
//       >
//         start
//       </button>
