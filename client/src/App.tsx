import { BrowserRouter as Router, Route } from 'react-router-dom'

import ConnectToLobby from './components/ConnectToLobby/ConnectToLobby'
import LobbyPage from './components/LobbyPage/LobbyPage'

export default function App(): JSX.Element {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={ConnectToLobby} />
        <Route path="/lobby" exact component={LobbyPage} />
      </div>
    </Router>
  )
}
