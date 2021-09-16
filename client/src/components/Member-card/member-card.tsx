import { FcCancel } from 'react-icons/fc'
import './member-card.sass'
import Card from '../Card/Card'
import Avatar from '../Avatar/Avatar'
import { useAppDispatch } from '../../store/redux'
import { isKick, kickMember } from '../../store/reducers'

interface IStatus {
  isCancel?: boolean
  onClickKickMember(value: boolean): void
}

const Status: React.FC<IStatus> = ({ isCancel, onClickKickMember }: IStatus) => {
  const handleClickDeleteMember = () => {
    onClickKickMember(true)
  }

  let element: JSX.Element | string = ''
  if (!isCancel) {
    element = ''
  } else {
    element = (
      <FcCancel
        size={30}
        role="button"
        onClick={handleClickDeleteMember}
        onKeyDown={handleClickDeleteMember}
        tabIndex={0}
      />
    )
  }
  return <i className="card__status">{element}</i>
}
Status.defaultProps = {
  isCancel: false,
}

interface IMemberCard {
  isCurrentPlayer?: boolean
  isSmall?: boolean
  title: string
  subtitle: string
  photoURL: string
  isCancel?: boolean | undefined
}
const MemberCard: React.FC<IMemberCard> = ({
  isCurrentPlayer,
  isSmall,
  title,
  subtitle,
  photoURL,
  isCancel,
}: IMemberCard) => {
  const dispath = useAppDispatch()

  const handleKickMember = (value: boolean) => {
    dispath(isKick(value))
    dispath(kickMember(title))
  }

  return (
    <div>
      <Card
        isCurrentPlayer={isCurrentPlayer}
        isSmall={isSmall}
        title={title}
        subtitle={subtitle}
        left={<Avatar name={title.split(' ')[0]} lastName={title.split(' ')[1]} src={photoURL} size="small" />}
        right={<Status isCancel={isCancel} onClickKickMember={handleKickMember} />}
      />
    </div>
  )
}

MemberCard.defaultProps = {
  isCurrentPlayer: false,
  isSmall: false,
  isCancel: false,
}
export default MemberCard
