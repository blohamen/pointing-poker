import validate from '../../utils/formValidate'
import './form-item-text.sass'

interface ITextItemProps {
  title: string
  name: string
  initialValue: string
  validate: boolean
  onValueChange(value: string): void
}

export default function FormInputText(props: ITextItemProps): JSX.Element {
  const error = props.validate ? validate(props.initialValue) : ''

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onValueChange(event.target.value)
  }

  return (
    <div className="fit__wrapper">
      <label htmlFor={props.name} className="fit__label">
        <p className="fit__title">{props.title}</p>
        <input
          className="fit__input"
          type="text"
          name={props.name}
          value={props.initialValue}
          onChange={handleChange}
        />
      </label>
      {props.initialValue === '' && error}
    </div>
  )
}
