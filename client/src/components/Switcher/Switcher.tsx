
import './switcher.sass'

interface ISwitcherProps {
  title: string
  defaultValue: boolean
  onChangeToogle(value: boolean): void
  className: string
}

export default function Switcher(props: ISwitcherProps): JSX.Element {
  const handleChange = () => {
    props.onChangeToogle(!props.defaultValue)
  }
  const  switcherTitleClass = `switcher, ${props.className}`

  return (
    <div className={switcherTitleClass}>
      <p className="switcher__title">{props.title}</p>
      <div className="toggle">
        <label className="toggle__switch" >
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