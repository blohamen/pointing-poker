import './button.sass'

interface IButtonProps {
  value: string
  size: 'large' | 'medium' | 'small'
  theme: 'dark' | 'light'
  form?: string
  onSubmit?(event: React.SyntheticEvent): void
}

export default function Button(props: IButtonProps): JSX.Element {
  const clasName = `button button__${props.size} button__${props.theme}`
  const handleClick = (event: React.SyntheticEvent) => {
    if (props.onSubmit) {
      event.preventDefault()
      props.onSubmit(event)
    }
  }
  return <input className={clasName} type="submit" value={props.value} onClick={handleClick} form={props.form || ''} />
}
