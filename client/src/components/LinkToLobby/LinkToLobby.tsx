import React from 'react'
import { useAppSelector } from '../../store/redux'
import Button from '../Button/Button'
import './link-to-lobby.sass'

interface ILinkToLobbyProps {
  linkLobby: string
}

const LinkToLobby: React.FC<ILinkToLobbyProps> = () => {
  const { roomId } = useAppSelector((state) => state.userParameters)

  const handleCopyLink = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()
    const copyText: any = event.currentTarget.elements[0]
    window.navigator.clipboard.writeText(copyText.value)
  }
  return (
    <div className="scram">
      <h2 className="header-lobby">Link to Lobby</h2>
      <form className="linkLobby-block" onSubmit={handleCopyLink} id="link-form">
        <input className="text-input" type="text" disabled value={roomId} />
        <Button value="Copy" size="small" theme="dark" form="link-form" />

        <span className="tooltiptext" id="myTooltip">
          Copy to clipboard
        </span>
      </form>
    </div>
  )
}

export default LinkToLobby
