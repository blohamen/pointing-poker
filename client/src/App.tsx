import { Route, Switch, useLocation } from 'react-router-dom'
import './app.sass'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import MainPage from './views/MainPage'
import SettingPage from './views/SettingPage/SettingPage'

export default function App(): JSX.Element {
  const location = useLocation()

  return (
    <div className="app">
      <Header />
      <Switch location={location}>
        <Route exact path="/">
          {/* <SettingPage /> */}
          <MainPage />
        </Route>
        <Route path="/settingScrumMaster">
          <MainPage />
          <SettingPage />
        </Route>
      </Switch>

      <Footer />
    </div>
  )
}
