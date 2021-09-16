import { IconContext } from 'react-icons/lib'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
<<<<<<< HEAD

import Card from '../Card'

=======
>>>>>>> origin/issues-block
import './issue-card.sass'
import { useState } from 'react'

const Edit = () => (
  <div className="edit">
    <AiOutlineEdit size={30} />
  </div>
)

const Delete = () => (
  <div className="delete">
    <IconContext.Provider value={{ color: 'red', size: '30px' }}>
      <div>
        <AiOutlineDelete />
      </div>
    </IconContext.Provider>
  </div>
)
<<<<<<< HEAD

const PropertyCard = () => (
  <div className="property">
    <Edit />
    <Delete />
  </div>
)

interface IIssueCard {
  title: string
  subtitle: string
}

export const IssueCard: React.FC<IIssueCard> = ({ title, subtitle }: IIssueCard) => (
  <div>
    <Card title={title} subtitle={subtitle} right={<PropertyCard />} />
  </div>
)
=======

interface IIssueCard {
  mode: 'issueCard' | 'addNewIssue'
  issueName: string
  priority: string
}

export default function IssueCard({ issueName, priority, mode }: IIssueCard): JSX.Element {
  // const [isAddNewIssue, setIsAddNewIssue] = useState<Boolean>(false)

  const handleClickAddNewCard = () => {
    // setIsAddNewIssue(true)
    console.log('swdsad')
  }

  // const modal = isAddNewIssue ?

  if (mode === 'issueCard') {
    return (
      <div className="issue-card">
        <div className="issue-card__text-field-wrapper">
          <p className="issue-card__title">{issueName}</p>
          <p className="issue-card__subtitle">{priority}</p>
        </div>

        <div className="issue-card__icon-wrapper">
          <Edit />
          <Delete />
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
>>>>>>> origin/issues-block
