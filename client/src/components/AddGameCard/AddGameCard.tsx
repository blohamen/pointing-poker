import React from 'react'
import './addGameCard.sass'

export default function AddGameCard(): JSX.Element {
  const handleClickPlus = (event: React.SyntheticEvent) => {
    console.log(event, 'plus click')
  }
  return (
    <div className="add-card__card">
      <div
        className="add-card__plus"
        role="button"
        onClick={handleClickPlus}
        onKeyDown={handleClickPlus}
        tabIndex={0}
      ></div>
    </div>
  )
}
