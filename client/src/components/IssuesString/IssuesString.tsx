import limitString from '../../utils/limitString'
import './issues-string.sass'

// const IssuesString: React.FC = () => {
const IssuesString: React.FC<{ issueValues: string }> = ({ issueValues }) => {
  return (
    <div className="issues-string">
      <p className="issues-string__text">
        {/* Spring 23 planning (issues {limitString('13, 533, 5623, 3252, 662, 313, 533, 5623, 3252, 6623', 20)}) */}
        Spring 23 planning (issues {limitString(issueValues, 20)})
      </p>
    </div>
  )
}

export default IssuesString
