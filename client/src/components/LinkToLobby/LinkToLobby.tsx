import Button from '../Button/Button'
// import MemberCard from '../Member-card'
import './link-to-lobby.sass'

interface ILinkToLobbyProps {
  linkLobby: string
}

const LinkToLobby: React.FC<ILinkToLobbyProps> = ({ linkLobby }: ILinkToLobbyProps) => (
  <div className="scram">
    {/* <h3 className="header-scram">Scram master: </h3>
    <MemberCard isCurrentPlayer isSmall title="Rick Giligan" subtitle="React Dev" photoURL="" /> */}
    <h2 className="header-lobby">Link to Lobby</h2>
    <div className="linkLobby-block">
      <input className="text-input" type="text" placeholder={linkLobby} />
      <Button value="Copy" size="small" theme="dark" />
    </div>
  </div>
)

export default LinkToLobby
