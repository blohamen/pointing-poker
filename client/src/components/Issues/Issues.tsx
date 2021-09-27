import { useAppSelector } from '../../store/redux'
import IssueCard from '../Issue-card'
import './issues.sass'

const Issues: React.FC = (): JSX.Element => {
  const { issues } = useAppSelector((state) => state.issuesParameters)
  return (
    <div className="issues">
      <p className="issues__title">Issues: </p>
      <div className="issues__cards-wrapper">
        {issues.map((issue) => (
          <IssueCard mode="issueCard" issueName={issue.title} priority={`${issue.priority} priority`} />
        ))}

        <IssueCard mode="addNewIssue" issueName="Issue 55" priority="hight" />
      </div>
    </div>
  )
}

export default Issues
