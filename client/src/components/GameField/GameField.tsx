import React from 'react'
import './game-field.sass'
import Chat from '../Chat'

const GameField: React.FC = ({ children }) => {
  return (
    <div>
      <div className="game-field">
        <main className="game-field__main">{children}</main>
        <aside className="game-field__aside">
          <Chat />
        </aside>
      </div>
    </div>
  )
}

export default GameField
