<<<<<<< HEAD
import './button.sass'
=======
import './Button.sass'
>>>>>>> main-page

interface IButtonProps {
  value: string
  size: 'large' | 'medium' | 'small'
  theme: 'dark' | 'light'
  form?: string
  onSubmit?(event: React.SyntheticEvent): void
}

export default function Button(props: IButtonProps): JSX.Element {
<<<<<<< HEAD
  const clasName = `button button__${props.size} button__${props.theme}`
  const handleClick = (event: React.SyntheticEvent) => {
    event.preventDefault()
    if (props.onSubmit) {
      props.onSubmit(event)
=======
  const { value, size, theme, form, onSubmit } = props

  const className = `button__${size} button__${theme}`

  const handleClick = (event: React.SyntheticEvent) => {
    event.preventDefault()
    if (onSubmit) {
      onSubmit(event)
>>>>>>> main-page
    } else {
      event.preventDefault()
    }
  }
<<<<<<< HEAD
  return <input className={clasName} type="submit" value={props.value} onClick={handleClick} form={props.form || ''} />
=======

  return (
    <input
      className={className}
      type="submit"
      value={value}
      onClick={handleClick}
      form={form || ''}
    />
  )
}

Button.defaultProps = {
  form: '',
  onSubmit: () => null,
>>>>>>> main-page
}
