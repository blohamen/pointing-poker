import React from 'react'
import GameCard from '../GameCard/GameCard'
import './fibonacci-cards.sass'

const FibonacciCards = () => {
  const fibonacci = ['0', '1', '1', '2', '3', '5', '8', '13', '21', '34', '55', '89', 'cup', '?']
  const cards = fibonacci.map((number) => <GameCard cardValue={number} />)
  return <div className="fibonacci-wrapper">{cards}</div>
}

export default FibonacciCards
