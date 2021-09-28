import React from 'react'
import { IconContext } from 'react-icons/lib'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import './issue-card.sass'
import { useAppDispatch, useAppSelector } from '../../store/redux'
import { setModalCreateIssues, setModalModifiedIssue, setModifiedIssueId } from '../../store/issuesReducer'
import socket from '../../utils/socket'
import { DELETE_ISSUE_CARD } from '../../utils/socketActions'

interface IEdit {
  onEdit(): void
}
const Edit = ({ onEdit }: IEdit) => {
  return (
    <div className="edit" role="button" onClick={onEdit} onKeyDown={onEdit} tabIndex={0}>
      <AiOutlineEdit size={30} />
    </div>
  )
}

interface IDelete {
  onDelete(): void
}
const Delete = ({ onDelete }: IDelete) => {
  return (
    <div className="delete" role="button" onClick={onDelete} onKeyDown={onDelete} tabIndex={0}>
      <IconContext.Provider value={{ color: 'red', size: '30px' }}>
        <div>
          <AiOutlineDelete />
        </div>
      </IconContext.Provider>
    </div>
  )
}

interface IIssueCard {
  mode: 'issueCard' | 'addNewIssue'
  issueName: string
  priority: string
  issueId: string
}

export default function IssueCard({ issueName, priority, issueId, mode }: IIssueCard): JSX.Element {
  const dispatch = useAppDispatch()
  const { roomId } = useAppSelector((state) => state.userParameters)

  const handleClickAddNewCard = () => {
    dispatch(setModalCreateIssues(true))
  }
  const handleEditIssueCardData = () => {
    dispatch(setModalModifiedIssue(true))
    dispatch(setModifiedIssueId(issueId))
  }
  const handleDeleteIssueCard = () => {
    socket.emit(DELETE_ISSUE_CARD, roomId, issueId)
  }

  if (mode === 'issueCard') {
    return (
      <div className="issue-card">
        <div className="issue-card__text-field-wrapper">
          <p className="issue-card__title">{issueName}</p>
          <p className="issue-card__subtitle">{priority}</p>
        </div>

        <div className="issue-card__icon-wrapper">
          <Edit onEdit={handleEditIssueCardData} />
          <Delete onDelete={handleDeleteIssueCard} />
        </div>
      </div>
    )
  }
  return (
    <div
      className="issue-card add-issue-card"
      role="button"
      onClick={handleClickAddNewCard}
      onKeyDown={handleClickAddNewCard}
      tabIndex={0}
    >
      <p className="issue-card__plus-title">Create new Issue</p>
      <div className="issue-card__plus"></div>
    </div>
  )
}
