import { Link } from 'react-router-dom'
import './test2.sass'

export default function Setting(): JSX.Element {
  return (
    <div className="test2">
      <Link
        to={{
          pathname: '/setting/createIssue',
          state: { modal: true },
        }}
      >
        <button type="button" className="button">
          add new issue
        </button>
      </Link>
    </div>
  )
}
