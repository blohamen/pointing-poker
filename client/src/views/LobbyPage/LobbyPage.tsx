import React from 'react'
import Button from '../../components/Button/Button'
import GameField from '../../components/GameField/GameField'
import MembersBlock from '../../components/MembersBlock/MembersBlock'
import './lobby-page.sass'

const LobbyPage: React.FC = () => {
  return (
    <GameField>
      <div></div>
      <Button value="Exit" size="small" theme="light" />
      <MembersBlock />
    </GameField>
  )
}

export default LobbyPage
