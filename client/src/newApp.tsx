// import ModalCreateIssue from './components/ModalCreateIssue/ModalCreateIssue'
import React from 'react'
import { Link, Route, Switch, useLocation } from 'react-router-dom'
import ModalCreateIssue from './components/ModalCreateIssue/ModalCreateIssue'
// import { RouteComponentProps } from 'react-router'
import Setting from './components/SettingComp/Test2'
import Test from './components/TestComponetn/Test'

interface ITest {
  modal?: boolean
}

export default function NewApp(): JSX.Element {
  const location = useLocation()
  const state = location.state as ITest

  let previousLocation = location

  if (!(location.state && state.modal)) {
    previousLocation = location
  }

  const isModal = location.state && state.modal && previousLocation !== location
  console.log('state: ', state, 'isModal: ', isModal)
  console.log('previousLocation: ', previousLocation, 'location: ', location)

  return (
    <div>
      <Link to="/">Home Page</Link>
      <p></p>
      <Link to="/setting">Setting Page</Link>

      <Switch location={isModal ? previousLocation : location}>
        <Route exact path="/">
          <Test />
        </Route>
        <Route path="/setting">
          <Setting />
        </Route>
        <Route exact path="/modal/:id">
          <ModalCreateIssue />
        </Route>
      </Switch>
      {isModal ? (
        <Route exact path="/modal/:id">
          <ModalCreateIssue />
        </Route>
      ) : null}
    </div>
  )
}
// location={background || location}
// {
//   /* <Route exact path="/modal/:id" component={Modal} /> */
// }
