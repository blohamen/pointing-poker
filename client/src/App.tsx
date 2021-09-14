import './app.sass'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import PageProducts from './components/HomePage/HomePage'

export default function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <PageProducts />
      <Footer />
    </div>
  )
}
