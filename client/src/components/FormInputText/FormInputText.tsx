import formValidate from '../../utils/formValidate'
import './FormInputText.sass'

interface ITextItemProps {
  title?: string
  name: string
  initialValue: string
  validate: boolean
  onValueChange(value: string): void
}

export default function FormInputText(props: ITextItemProps): JSX.Element {
  const { title, name, initialValue, validate, onValueChange } = props

  const error = validate ? formValidate(initialValue) : ''

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onValueChange(event.target.value)
  }

  return (
    <div className="fit__wrapper">
      <label htmlFor={name} className="fit__label">
        <p className="fit__title">{title}</p>
        <input
          className="fit__input"
          type="text"
          name={name}
          value={initialValue}
          onChange={handleChange}
        />
      </label>
      {initialValue === '' && error}
    </div>
  )
}

FormInputText.defaultProps = {
  title: '',
}
