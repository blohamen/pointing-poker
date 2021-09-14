import './app.sass'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import MainPage from './views/MainPage'

export default function App(): JSX.Element {
  return (
    <div className="app">
      <Header />
      <MainPage />
      <Footer />
    </div>
  )
}
