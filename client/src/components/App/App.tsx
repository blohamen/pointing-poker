import { useEffect } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import PageLobbyHome from "../pages/PageLobbyHome/PageLobbyHome";

import "./App.sass";

function App() {
  useEffect(() => {
    async function testFetch() {
      const rawRes = await fetch('/api/test');
      const res = await rawRes.json();
      console.log(res);
    };

    testFetch();
  }, []);
  return (
    <Router>
      <Switch>
        <Route path="/">
          <MainLayout>
            <Route exact path="/">
              <PageLobbyHome/>
            </Route>
          </MainLayout>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
