import { useState } from 'react'
import ConnectToLobby from '../ConnectToLobby/ConnectToLobby'
import PageLogo from '../PokerPlanning/PokerPlanning'
import Session from '../Session/Session'
import './HomePage.sass'

export default function PageProducts(): JSX.Element {
  const [modalConnect, setModalConnect] = useState<boolean>(false)
  const handleStartNewGame = () => {
    console.log('start new game')
    setModalConnect(!modalConnect)
  }
  if (modalConnect) {
    return (
      <>
        <PageLogo />
        <Session onSubmitStartGame={handleStartNewGame} />
        <ConnectToLobby />
      </>
    )
  }
  return (
    <>
      <PageLogo />
      <Session onSubmitStartGame={handleStartNewGame} />
    </>
  )
}
