// import ModalCreateIssue from './components/ModalCreateIssue/ModalCreateIssue'
import { BrowserRouter as Router } from 'react-router-dom'
import NewApp from './newApp'

export default function App(): JSX.Element {
  return (
    <Router>
      <NewApp />
    </Router>
  )
}
