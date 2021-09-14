import React, { useState } from 'react'
import './addGameCard.sass'

interface IAddCardsProps {
  onClick(value: string): void
}

export default function AddGameCard(props: IAddCardsProps): JSX.Element {
  const [plusCard, setPlusCard] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>('')

  const handleClickPlus = () => {
    setPlusCard(!plusCard)
  }

  const handleChangeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  if (plusCard) {
    return (
      <div className="add-card__card">
        <p className="add-card__title">Add value:</p>
        <input type="text" className="add-card__input" value={inputValue} onChange={handleChangeInputValue} />
        <input
          className="add-card__submit"
          value="OK"
          type="submit"
          onClick={() => {
            setPlusCard(!plusCard)
            props.onClick(inputValue)
            setInputValue('')
          }}
        />
      </div>
    )
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
