
import './switcher.sass'

interface ISwitcherProps {
  title: string
  defaultValue: boolean
  onChangeToogle(value: boolean): void
  
}

export default function Switcher(props: ISwitcherProps): JSX.Element {
  const handleChange = () => {
    props.onChangeToogle(!props.defaultValue)
  }

  return (
    <div className="switcher">
      <p>{props.title}</p>
      <div className="toggle">
        <label className="toggle__switch">
          <input
            type="checkbox"
            className="toggle__checkbox"
            checked={props.defaultValue}
            onChange={handleChange}
          />
          <div className="toggle__slider"></div>
        </label>
      </div>
    </div>
  )
}