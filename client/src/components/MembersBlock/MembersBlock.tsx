import { useAppSelector } from '../../store/redux'
import MemberCard from '../Member-card'
import './members-block.sass'

const MembersBlock: React.FC = () => {
  const isKickPlayer = useAppSelector((state) => state.appParameters.isKick)
  console.log('isKickPlayer: ', isKickPlayer)

  return (
    <div className="members-block">
      <p className="members-block__title">Members</p>
      <div className="members-block__members-wrapper">
        <MemberCard title="Vadim Shut" subtitle="junior Front-End developer" photoURL="" isCancel isSmall />
        <MemberCard title="Vadim Shut" subtitle="junior Front-End developer" photoURL="" isCancel isSmall />
        <MemberCard title="Ihar Usmanov" subtitle="junior Front-End developer" photoURL="" isCancel isSmall />
        <MemberCard title="Vadim Shut" subtitle="junior Front-End developer" photoURL="" isCancel isSmall />
        <MemberCard title="Vadim Shut" subtitle="junior Front-End developer" photoURL="" isCancel isSmall />
        <MemberCard title="Ihar Usmanov" subtitle="junior Front-End developer" photoURL="" isCancel isSmall />
      </div>
    </div>
  )
}

export default MembersBlock
