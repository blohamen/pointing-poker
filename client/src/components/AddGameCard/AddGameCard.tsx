import React, { useState } from 'react'
import './addGameCard.sass'

interface IAddCardsProps {
  mode: 'shirt' | 'value'
}

export default function AddGameCard(props: IAddCardsProps): JSX.Element {
  const [plusCard, setPlusCard] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<number | string>('')

  const handleClickPlus = () => {
    setPlusCard(true)
    console.log(props.mode)
  }

  const handleChangeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  if (plusCard) {
    return (
      <div className="add-card__card">
        <div className="add-card__addValue-wrapper">
          <p>Add value: </p>
          <p>
            <i>coffee break</i>,
          </p>
          <p>
            <i>unknow</i>
          </p>
          <p>or you value</p>
          <input type="text" className="add-card__input" value={inputValue} onChange={handleChangeInputValue} />
        </div>
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

// event: React.SyntheticEvent
