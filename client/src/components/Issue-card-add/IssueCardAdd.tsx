import { GrAdd } from 'react-icons/gr';

import Card from "../Card"

import './issue-card-add.sass'

const Add = () => <div className="add"><GrAdd size={30}/></div>

export const IssueCardAdd = () => {
  const createIssue = () => {
    console.log('create issoe card');
  }
  const keyDown = () => {
    console.log('create issoe card');
  }

  return(
    <div 
      className="create-issue"
      onClick={createIssue}
      onKeyDown={keyDown}
      role="button"
      tabIndex={0}
    >
      <Card 
        title="Create new issue"
        isSmall
        right={<Add />} />
    </div>
  )} 