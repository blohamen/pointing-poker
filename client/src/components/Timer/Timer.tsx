import { useEffect, useState } from 'react'
import './timer.sass'

interface ITimerProps {
  mode: 'setting' | 'game'
  initMinutes: number
  initSeconds: number
  timer?: boolean
  onChangeTimerMode?(value: boolean): void
}

export default function Timer(props: ITimerProps): JSX.Element {
  const [minutesValue, setMinutesValue] = useState<number>(props.initMinutes)
  const [secondsValue, setSecondsValue] = useState<number>(props.initSeconds)
  const mode = props.mode !== 'setting'

  const calculateTimeLeft = () => {
    const seconds: number = minutesValue * 60 + secondsValue
    const difference = seconds - 1
    if (difference <= 0) {
      setMinutesValue(0)
      setSecondsValue(0)
      if (props.onChangeTimerMode) props.onChangeTimerMode(false)
      return
    }
    const newMinutes = Math.floor(difference / 60)
    const newSeconds = Math.floor(difference - newMinutes * 60)
    setMinutesValue(newMinutes)
    setSecondsValue(newSeconds)
  }

  useEffect(() => {
    if (props.timer) {
      const timer = setInterval(() => calculateTimeLeft(), 1000)
      return () => clearInterval(timer)
    }
  }, [minutesValue, secondsValue, props.timer])

  return (
    <div className="timer">
      <label htmlFor="minutes" className="timer__minutes">
        <span>minutes</span>
        <input
          type="number"
          name="minutes"
          className="timer__input"
          value={minutesValue}
          min={0}
          max={59}
          step={1}
          readOnly={mode}
          onKeyDown={(e) => !/^[А-Яа-яA-Za-z ]$/.test(e.key)}
          onChange={(e) => {
            if (+e.target.value > +e.target.max) {
              setMinutesValue(+e.target.max)
              return
            }
            if (+e.target.value <= +e.target.max && e.target.value.length > 2) {
              setMinutesValue(+e.target.max)
              return
            }
            setMinutesValue(+e.target.value)
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
          value={secondsValue}
          min={0}
          max={59}
          step={1}
          readOnly={mode}
          onKeyDown={(e) => !/^[А-Яа-яA-Za-z ]$/.test(e.key)}
          onChange={(e) => {
            if (+e.target.value > +e.target.max) {
              setMinutesValue(+e.target.max)
              return
            }
            if (+e.target.value <= +e.target.max && e.target.value.length > 2) {
              setSecondsValue(+e.target.max)
              return
            }
            setSecondsValue(+e.target.value)
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
