import React from 'react'
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
  const { authentification, isAdmin, isPlayer } = useAppSelector((state) => state.userParameters)
  const isAdminUser = authentification && isAdmin
  const isPlayerUser = authentification && isPlayer

  const realRout = () => {
    if (isAdminUser) return <Route exact path="/settingScrumMaster" component={SettingPage} />
    if (isPlayerUser) return <Route exact path="/lobby" component={LobbyPage} />
    return <Redirect to="/error404" />
  }

  return (
    <div className="app">
      <Header />
      <Switch location={location}>
        <Route exact path="/">
          <MainPage />
        </Route>
        {realRout()}
      </Switch>
      <Route path="/error404" component={Page404} />
      <Footer />
    </div>
  )
}
