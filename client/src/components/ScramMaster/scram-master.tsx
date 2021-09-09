import Button from "../Button/Button";
import MemberCard from "../MemberCard/member-card";

import './scram-master.sass'

interface IScramMaster {
  linkLobby: string
}

const ScramMaster: React.FC<IScramMaster> = ({linkLobby}: IScramMaster ) => 
    <div className="scram">
      <h3 className="header-scram">Scram master: </h3>
      <MemberCard 
        isCurrentPlayer
        isSmall
        title="Rick Giligan" 
        subtitle="React Dev"
        photoURL="test"
      />
      <h2 className="header-lobby">Link to Lobby</h2>
      <div className="linkLobby-block">
        <input className="text-input" type="text" placeholder={ linkLobby } />
        <Button value="copy" size="small" theme="dark"/>
      </div>
      <div className="game-buttons">
        <Button value="Start game" size="small" theme="dark"/>
        <Button value="Cancel game" size="small" theme="light"/>
      </div>
    </div>

export default ScramMaster
