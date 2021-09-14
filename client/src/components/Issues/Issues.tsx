import IssueCard from '../Issue-card'
import './issues.sass'

const Issues: React.FC = (): JSX.Element => (
  <div className="issues">
    <IssueCard mode="addNewIssue" issueName="Issue 255" priority="hight" />
  </div>
)

export default Issues
