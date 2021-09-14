import React from 'react'
import './game-field.sass'

const GameField: React.FC = ({ children }) => (
  <>
    <div className="game-field">
      <main className="game-field__main">{children}</main>
      <aside className="game-field__aside"></aside>
    </div>
  </>
)

export default GameField
