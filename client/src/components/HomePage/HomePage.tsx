import { useState } from 'react'
import ConnectToLobby from '../ConnectToLobby/ConnectToLobby'
import PageLogo from '../PokerPlanning/PokerPlanning'
import Session from '../Session/Session'
import './HomePage.sass'

export default function PageProducts(): JSX.Element {
  const [modalConnect, setModalConnect] = useState<boolean>(false)
  const handleStartNewGame = () => {
    setModalConnect(!modalConnect)
  }

  const ConnToLobby = modalConnect ? <ConnectToLobby onCancelForm={(value: boolean) => setModalConnect(value)} /> : ''
  return (
    <>
      <PageLogo />
      <Session onSubmitStartGame={handleStartNewGame} />
      {ConnToLobby}
    </>
  )
}
