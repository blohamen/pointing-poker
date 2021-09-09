import React, { useState } from 'react'
import './modal-create-issue.sass'
import { withRouter } from 'react-router-dom'

function ModalCreateIssue(): JSX.Element {
  const [selectValue, setSelectValue] = useState<string>('Low')
  const [titleValue, setTitleValue] = useState<string>('')
  const [linkValue, setLinkValue] = useState<string>('')

  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(event.target.value)
  }

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitleValue(event.target.value)
  }

  const handleChangeLink = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLinkValue(event.target.value)
  }

  return (
    <div className="mci">
      <div className="mci__form-wrapper">
        <p className="mci__title">Create Issue</p>
        <form id="mci-form">
          <label htmlFor="mci-title" className="mci__label">
            <span>Title:</span>
            <input
              type="text"
              name="mci-title"
              value={titleValue}
              onChange={handleChangeTitle}
              className="mci__input"
            />
          </label>

          <label htmlFor="mci-link" className="mci__label">
            <span>link:</span>
            <input type="text" name="mci-link" value={linkValue} onChange={handleChangeLink} className="mci__input" />
          </label>

          <label className="mci__label">
            <span>Priority:</span>
            <select value={selectValue} onChange={handleChangeSelect} className="mci__select">
              <option value="Low">Low</option>
              <option value="Middle">Middle</option>
              <option value="Hight">Hight</option>
            </select>
          </label>
        </form>
        <button type="button">Cancel</button>
      </div>
    </div>
  )
}

export default withRouter(ModalCreateIssue)
