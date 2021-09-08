import './avatar.sass'

interface IAvatarProps {
  name: string
  lastName: string
  src: string
  size: 'large' | 'small'
}

export default function Avatar(props: IAvatarProps): JSX.Element {
  const nameFirstLetter = props.name === '' ? 'N' : props.name[0]
  const className = props.size === 'large' ? 'avatar avatar__large' : 'avatar avatar__small'
  let lastNameFirstLetter = ''
  if (props.lastName === '' && props.name !== '') {
    lastNameFirstLetter = props.name[props.name.length - 1]
  } else if (props.lastName === '' && props.name === '') {
    lastNameFirstLetter = 'N'
  } else {
    ;[lastNameFirstLetter] = props.lastName.split('')
  }

  if (props.src === '') {
    return (
      <div className={className}>
        {nameFirstLetter}
        {lastNameFirstLetter}
      </div>
    )
  }
  return (
    <div className={className}>
      <img className="avatar__img" src={props.src} alt={props.name} />
    </div>
  )
}
