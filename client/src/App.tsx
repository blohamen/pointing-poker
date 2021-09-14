import './app.sass'
// import ConnectToLobby from './components/ConnectToLobby/ConnectToLobby'
import PageProducts from './components/HomePage/HomePage'

export default function App(): JSX.Element {
  return (
    <div className="App">
      <PageProducts />
      {/* <ConnectToLobby /> */}
    </div>
  )
}
