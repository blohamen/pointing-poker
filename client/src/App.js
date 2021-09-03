import { useEffect } from "react"

import "./App.sass"

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
    <div className="App">
      <header className="App-header">
        <span>Hello world</span>
      </header>
    </div>
  )
}

export default App
