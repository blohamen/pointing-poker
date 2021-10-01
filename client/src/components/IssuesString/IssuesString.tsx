import { useAppSelector } from '../../store/redux'
import limitString from '../../utils/limitString'
import './issues-string.sass'

const IssuesString: React.FC = () => {
  const { issues } = useAppSelector((state) => state.issuesParameters)
  const issuesString = issues.map((item) => item.title).join(',')

  return (
    <div className="issues-string">
      <p className="issues-string__text">Spring planning (issues: {limitString(issuesString, 30)})</p>
    </div>
  )
}

export default IssuesString
