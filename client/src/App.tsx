import './app.sass'
import Footer from './components/Footer/Footer'
import GameField from './components/GameField/GameField'
import Header from './components/Header/Header'
import PageProducts from './components/HomePage/HomePage'

export default function App(): JSX.Element {
  return (
    <div className="app">
      <Header />

      <GameField>
        <>
          <PageProducts />
        </>
      </GameField>

      <Footer />
    </div>
  )
}
