import './App.sass'
import GameCard from './components/Game-card/GameCard'

export default function App(): JSX.Element {
  return (
    <div className="App" > 
      <GameCard cardValue="10" />
    </div>
  )
} 