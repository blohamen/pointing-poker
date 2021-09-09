import './App.sass'
import FibonacciCards from './components/FibonacciCards/Fibonacci-cards'
import PowTwoCards from './components/PowTwoCards/PowTwoCards';

export default function App(): JSX.Element {
  return (
    <div className="App" >
      <h1>Fibonacci cards: </h1>
      <FibonacciCards />
      <h1>Pow two cards: </h1>
      <PowTwoCards />
    </div>
  )
} 