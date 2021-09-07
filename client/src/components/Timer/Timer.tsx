import { useState } from "react";
import "./timer.sass";

export default function Timer(): JSX.Element {
  const [minutesValue, setMinutesValue] = useState(0);
  const [secondsValue, setSecondsValue] = useState(0);
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
          onKeyDown={(e) => !/^[А-Яа-яA-Za-z ]$/.test(e.key)}
          onChange={(e) => {
            if (+e.target.value > +e.target.max) {
              setMinutesValue(+e.target.max);
              return;
            }
            if (+e.target.value <= +e.target.max && e.target.value.length > 2) {
              setMinutesValue(+e.target.max);
              return;
            }
            setMinutesValue(+e.target.value);
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
          onKeyDown={(e) => !/^[А-Яа-яA-Za-z ]$/.test(e.key)}
          onChange={(e) => {
            if (+e.target.value > +e.target.max) {
              setMinutesValue(+e.target.max);
              return;
            }
            if (+e.target.value <= +e.target.max && e.target.value.length > 2) {
              setSecondsValue(+e.target.max);
              return;
            }
            setSecondsValue(+e.target.value);
          }}
        />
      </label>
    </div>
  );
}
