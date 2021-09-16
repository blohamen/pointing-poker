import GameField from '../components/GameField/GameField'
import GameSettings from '../components/GameSettings/GameSettings'
import Issues from '../components/Issues/Issues'
import IssuesString from '../components/IssuesString/IssuesString'
import MembersBlock from '../components/MembersBlock/MembersBlock'
import ModalKickPlayer from '../components/ModalKickPlayer/ModalKickPlayer'
import { useAppSelector } from '../store/redux'

const SettingPage: React.FC = () => {
  const isKick = useAppSelector((state) => state.isKick)
  const kickMember = useAppSelector((state) => state.kickMember)
  return (
    <GameField>
      <>
        <IssuesString />
        <MembersBlock />
        <Issues />
        <GameSettings />
      </>
      {isKick ? <ModalKickPlayer fullName={kickMember} /> : ''}
    </GameField>
  )
}

export default SettingPage
