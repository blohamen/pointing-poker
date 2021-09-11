import React from 'react'
import GameCard from '../GameCard/GameCard'
import './pow-two-cards.sass'

const PowTwoCards = () => {
  const powTwo = ['1', '2', '4', '8', '16', '32', '64', '128', '256', '512', '1024', '89', 'cup', '?']
  const cards = powTwo.map((number) => <GameCard cardValue={number} />)
  return <div className="pow-wrapper">{cards}</div>
}

export default PowTwoCards
