import { useEffect, useState } from 'react'
import { useAppSelector } from '../../store/redux'
import ConnectToLobby from '../ConnectToLobby/ConnectToLobby'
import PageLogo from '../PokerPlanning/PokerPlanning'
import Session from '../Session/Session'
import './HomePage.sass'

export default function PageProducts(): JSX.Element {
  const { modalConnectLobby } = useAppSelector((state) => state.appParameters)
  const [modalConnect, setModalConnect] = useState<boolean>(modalConnectLobby)

  useEffect(() => {
    setModalConnect(modalConnectLobby)
  }, [modalConnectLobby])

  const ConnToLobby = modalConnect ? <ConnectToLobby /> : ''
  return (
    <>
      <PageLogo />
      <Session />
      {ConnToLobby}
    </>
  )
}
