import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import IIssue from '../../interfaces/IIssue'
import { setModalCreateIssues } from '../../store/issuesReducer'
import { useAppDispatch, useAppSelector } from '../../store/redux'
import socket from '../../utils/socket'
import { NEW_ISSUE } from '../../utils/socketActions'
import Button from '../Button/Button'
import './modal-create-issue.sass'

export default function ModalCreateIssue(): JSX.Element {
  const [selectValue, setSelectValue] = useState<string>('Low')
  const [titleValue, setTitleValue] = useState<string>('')
  const [linkValue, setLinkValue] = useState<string>('')
  const { roomId } = useAppSelector((state) => state.userParameters)
  const dispatch = useAppDispatch()
  let issueInstance: IIssue

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
    socket.emit(NEW_ISSUE, roomId, issueInstance)
    dispatch(setModalCreateIssues(false))
  }

  useEffect(() => {
    issueInstance = {
      title: titleValue,
      link: linkValue,
      priority: selectValue,
      issueId: uuidv4(),
    }
  }, [selectValue, titleValue, linkValue])

  return (
    <div className="mci">
      <div className="mci__form-wrapper">
        <p className="mci__title">Create Issue</p>
        <form id="mci-form" onSubmit={handleFormCreateIssueSubmit}>
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
        <div className="mci__button-wrapper">
          <Button value="Yes" size="small" theme="dark" form="mci-form" />
          <Button
            value="No"
            size="small"
            theme="light"
            onSubmit={() => {
              dispatch(setModalCreateIssues(false))
            }}
          />
        </div>
      </div>
    </div>
  )
}
