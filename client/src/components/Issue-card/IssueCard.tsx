import { IconContext } from 'react-icons/lib'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import './issue-card.sass'

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

const handleClickAddNewCard = () => {
  console.log('dsa')
}

interface IIssueCard {
  mode: 'issueCard' | 'addNewIssue'
  issueName: string
  priority: string
}

export default function IssueCard({ issueName, priority, mode }: IIssueCard): JSX.Element {
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
