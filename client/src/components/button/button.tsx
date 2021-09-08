import './Button.sass'

interface IButtonProps {
  value: string
  size: 'large' | 'medium' | 'small'
  theme: 'dark' | 'light'
  form?: string
  onSubmit?(event: React.SyntheticEvent): void
}

export default function Button(props: IButtonProps): JSX.Element {
  const { value, size, theme, form, onSubmit } = props

  const className = `button__${size} button__${theme}`

  const handleClick = (event: React.SyntheticEvent) => {
    event.preventDefault()
    if (onSubmit) {
      onSubmit(event)
    } else {
      event.preventDefault()
    }
  }

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
}
