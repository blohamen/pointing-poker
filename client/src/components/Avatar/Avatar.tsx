import './avatar.sass'

interface IAvatarProps {
  name: string
  lastName: string
  src: string
}

export default function Avatar(props: IAvatarProps): JSX.Element {
  const nameFirstLetter = props.name === '' ? 'N' : props.name[0]
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
      <div className="avatar">
        {nameFirstLetter}
        {lastNameFirstLetter}
      </div>
    )
  }
  return (
    <div className="avatar">
      <img className="avatar__img" src={props.src} alt={props.name} />
    </div>
  )
}
