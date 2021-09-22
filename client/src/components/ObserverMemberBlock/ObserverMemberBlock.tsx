import IUser from '../../interfaces/IUser'
import { useAppSelector } from '../../store/redux'
import MemberCard from '../Member-card'
import './observer-member-block.sass'

const ObserverMemberBlock: React.FC = () => {
  const { observerMemebers } = useAppSelector((state) => state.membersParameters)
  const { userId } = useAppSelector((state) => state.userParameters)

  return (
    <div className="observers-block">
      <p className="observers-block__title">Observers</p>
      <div className="observers-block__members-wrapper">
        {observerMemebers.map((item: IUser) => (
          <MemberCard
            isCurrentPlayer={userId === item.userId}
            title={`${item.firstName} ${item.lastName}`}
            subtitle={item.jobPossition}
            photoURL={item.image}
            key={item.userId}
            isCancel
            isSmall
          />
        ))}
      </div>
    </div>
  )
}

export default ObserverMemberBlock
