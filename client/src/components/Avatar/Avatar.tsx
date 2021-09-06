import './avatar.sass'

interface IAvatarProps {
    name: string
    lastName: string

}

export default function Avatar(props: IAvatarProps): JSX.Element {
    const nameFirstLetter = props.name === '' ? 'N' : props.name[0]
    const lastNameFirstLetter = props.lastName === '' ? 'N' : props.lastName[0]

    return(
        <div className="avatar">{nameFirstLetter}{lastNameFirstLetter}</div>
    )
}