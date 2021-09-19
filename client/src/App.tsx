import { BrowserRouter as Router, Route } from 'react-router-dom'

import './app.sass'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import HomePage from './components/HomePage/HomePage'
import LobbyPage from './components/LobbyPage/LobbyPage'

export default function App(): JSX.Element {
  return (
    <div className="app">
      <Header />
      <Router>
        <div className="App">
          <Route path="/" exact component={HomePage} />
          <Route path="/lobby" exact component={LobbyPage} />
        </div>
      </Router>
      <Footer />
    </div>
  )
}
