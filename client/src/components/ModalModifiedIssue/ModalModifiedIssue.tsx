import './modal-midified-issue.sass'
import React, { useState } from 'react'
import { setModalModifiedIssue, setModifiedIssueId } from '../../store/issuesReducer'
import { useAppDispatch, useAppSelector } from '../../store/redux'
import Button from '../Button/Button'
import socket from '../../utils/socket'
import { MODIFIED_ISSUE } from '../../utils/socketActions'
import IIssue from '../../interfaces/IIssue'

export default function ModalModifiedIssue(): JSX.Element {
  const { modifiedIssueId, issues } = useAppSelector((state) => state.issuesParameters)
  const { roomId } = useAppSelector((state) => state.userParameters)
  let modifiedIssueInstance: IIssue
  const dispatch = useAppDispatch()
  const issue = issues.filter((item) => item.issueId === modifiedIssueId)[0]

  const [selectValue, setSelectValue] = useState<string>(issue.priority)
  const [titleValue, setTitleValue] = useState<string>(issue.title)
  const [linkValue, setLinkValue] = useState<string>(issue.link)

  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(event.target.value)
  }

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitleValue(event.target.value)
  }

  const handleChangeLink = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLinkValue(event.target.value)
  }

  const handleFormModifiedIssueSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()
    modifiedIssueInstance = {
      title: titleValue,
      link: linkValue,
      priority: selectValue,
      issueId: modifiedIssueId,
    }
    socket.emit(MODIFIED_ISSUE, roomId, modifiedIssueInstance)
    dispatch(setModalModifiedIssue(false))
  }

  return (
    <div className="mmi">
      <div className="mmi__form-wrapper">
        <p className="mmi__title">Modified Issue</p>
        <form id="mmi-form" onSubmit={handleFormModifiedIssueSubmit}>
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
          <p className="mmi__issue-id">Issue ID: {issue.issueId}</p>
        </form>
        <div className="mci__button-wrapper">
          <Button value="Yes" size="small" theme="dark" form="mmi-form" />
          <Button
            value="No"
            size="small"
            theme="light"
            onSubmit={() => {
              dispatch(setModalModifiedIssue(false))
              dispatch(setModifiedIssueId(''))
            }}
          />
        </div>
      </div>
    </div>
  )
}
