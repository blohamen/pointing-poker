import { useEffect } from "react"
import Card from './components/card/card';

import "./App.sass"

const Example = () => <div>example</div>


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
      <main>
        <Card 
          title="Ihar Usmanau" 
          subtitle="React Dev"  
          right={<Example />}
        /> 
      </main>
    </div>
  )
}

export default App
