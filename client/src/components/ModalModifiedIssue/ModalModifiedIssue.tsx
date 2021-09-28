import './modal-midified-issue.sass'
import React, { useState } from 'react'
import { setModalModifiedIssue } from '../../store/issuesReducer'
import { useAppDispatch } from '../../store/redux'
import Button from '../Button/Button'

export default function ModalModifiedIssue(): JSX.Element {
  const [selectValue, setSelectValue] = useState<string>('Low')
  const [titleValue, setTitleValue] = useState<string>('')
  const [linkValue, setLinkValue] = useState<string>('')
  const dispatch = useAppDispatch()

  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(event.target.value)
  }

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitleValue(event.target.value)
  }

  const handleChangeLink = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLinkValue(event.target.value)
  }

  const handleFormCreateIssueSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(setModalModifiedIssue(false))
  }

  return (
    <div className="mmi">
      <div className="mmi__form-wrapper">
        <p className="mmi__title">Modified Issue</p>
        <form id="mmi-form" onSubmit={handleFormCreateIssueSubmit}>
          <label htmlFor="mmi-title" className="mmi__label">
            <span>Title:</span>
            <input
              type="text"
              name="mmi-title"
              value={titleValue}
              onChange={handleChangeTitle}
              className="mmi__input"
            />
          </label>

          <label htmlFor="mmi-link" className="mmi__label">
            <span>link:</span>
            <input type="text" name="mmi-link" value={linkValue} onChange={handleChangeLink} className="mmi__input" />
          </label>

          <label className="mmi__label">
            <span>Priority:</span>
            <select value={selectValue} onChange={handleChangeSelect} className="mmi__select">
              <option value="Low">Low</option>
              <option value="Middle">Middle</option>
              <option value="Hight">Hight</option>
            </select>
          </label>
          <p className="mmi__issue-id">Issue ID: {}</p>
        </form>
        <div className="mci__button-wrapper">
          <Button value="Yes" size="small" theme="dark" form="mci-form" />
          <Button
            value="No"
            size="small"
            theme="light"
            onSubmit={() => {
              dispatch(setModalModifiedIssue(false))
            }}
          />
        </div>
      </div>
    </div>
  )
}
