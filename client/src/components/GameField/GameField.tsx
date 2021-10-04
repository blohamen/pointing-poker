import './game-field.sass'
import React from 'react'
import { useLocation } from 'react-router'
import Chat from '../Chat'
import ScoreSidebar from '../ScoreSidebar'

const GameField: React.FC = ({ children }) => {
  const location = useLocation()

  const isChat: boolean = location.pathname === '/settingScrumMaster' || location.pathname === '/lobby'
  const isScoreSidebar = location.pathname === '/game'

  return (
    <main className="game-field">
      <div className="game-field__wrapper">
        <div className="game-field__main">{children}</div>
        <aside className="game-field__aside">
          {isChat ? <Chat /> : ''}
          {isScoreSidebar ? <ScoreSidebar /> : ''}
        </aside>
      </div>
    </main>
  )
}

export default GameField
