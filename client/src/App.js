import { useEffect } from "react"
import Card from './components/card/card';
import IssueCard from './components/issue-card/issue-card';
import MemberCard from './components/member-card/member-card';
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
        <IssueCard 
          title="Issue 543" 
          subtitle="low priority" 
      />
      <MemberCard 
        title="Ihar Usmanau" 
        subtitle="React Dev"
      />
      <MemberCard 
        title="David Blane" 
        subtitle="React Dev"
        isPhoto
        isCancel
      />
      <MemberCard 
      isCurrentPlayer
      title="Ihar Usmanau" 
      subtitle="React Dev"
      />
      <Card 
        isCurrentPlayer
        isSmall
        title="Chat" 
        subtitle="card"  
      />
      <MemberCard 
        title="Ihar Usmanau" 
        subtitle="React Dev"
        isSmall
      />
      <MemberCard 
        title="David Blane" 
        subtitle="React Dev"
        isPhoto
        isCancel
        isSmall
      />
      </main>
    </div>
  )
}

export default App
