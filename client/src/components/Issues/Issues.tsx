import IssueCard from '../Issue-card'
import './issues.sass'

const Issues: React.FC = (): JSX.Element => (
  <div className="issues">
    <p className="issues__title">Issues: </p>
    <div className="issues__cards-wrapper">
      <IssueCard mode="issueCard" issueName="Issue 255" priority="hight" />
      <IssueCard mode="issueCard" issueName="Issue 122" priority="hight" />
      <IssueCard mode="issueCard" issueName="Issue 223" priority="hight" />
      <IssueCard mode="issueCard" issueName="Issue 1132" priority="hight" />
      <IssueCard mode="issueCard" issueName="Issue 232" priority="hight" />
      <IssueCard mode="addNewIssue" issueName="Issue 55" priority="hight" />
    </div>
  </div>
)

export default Issues
