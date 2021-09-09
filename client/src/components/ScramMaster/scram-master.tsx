import MemberCard from "../MemberCard/member-card";

import './scram-master.sass'

const ScramMaster = () => 
    <div>
      <h3>Scram master: </h3>
      <MemberCard 
        isCurrentPlayer
        isSmall
        title="Rick Giligan" 
        subtitle="React Dev"
        photoURL="test"
      />
      <h2>Link to Lobby</h2>
      <input type="text" />
      <button type="button">copy</button>
      <button type="button">Start game</button>
      <button type="button">Cancel game</button>
    </div>

export default ScramMaster
