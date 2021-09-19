import { Redirect, Route, Switch, useLocation } from 'react-router-dom'
import './app.sass'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { useAppSelector } from './store/redux'
import LobbyPage from './views/LobbyPage/LobbyPage'
import MainPage from './views/MainPage'
import Page404 from './views/Page404/Page404'
import SettingPage from './views/SettingPage/SettingPage'

export default function App(): JSX.Element {
  const location = useLocation()
  const { authentification, isAdmin, isPlayer, isObserver } = useAppSelector((state) => state.userParameters)
  const isAdminUser = authentification && isAdmin
  const isPlayerUser = authentification && isPlayer
  const isObserverUser = authentification && isObserver
  return (
    <div className="app">
      <Header />
      <Switch location={location}>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/error404" component={Page404} />
        {isAdminUser ? <Route path="/settingScrumMaster" component={SettingPage} /> : <Redirect to="/error404" />}
        {isPlayerUser || isObserverUser ? <Route path="/lobby" component={LobbyPage} /> : <Redirect to="/error404" />}
      </Switch>

      <Footer />
    </div>
  )
}
