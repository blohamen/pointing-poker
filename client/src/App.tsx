import './app.sass'
import ConnectToLobby from './components/ConnectToLobby/ConnectToLobby'

export default function App(): JSX.Element {
  return (
    <div className="app">
      <ConnectToLobby />
    </div>
  )
}
