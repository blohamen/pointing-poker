import './game-field.sass'
import React from 'react'
import { useLocation } from 'react-router'
import Chat from '../Chat'

const GameField: React.FC = ({ children }) => {
  const location = useLocation()

  const isChat: boolean = location.pathname === '/settingScrumMaster' || location.pathname === '/lobby'
  return (
    <main className="game-field">
      <div className="game-field__wrapper">
        <div className="game-field__main">{children}</div>
        <aside className="game-field__aside">{isChat ? <Chat /> : ''}</aside>
      </div>
    </main>
  )
}

export default GameField
