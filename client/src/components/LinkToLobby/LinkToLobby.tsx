import React, { useState } from 'react'
import { useAppSelector } from '../../store/redux'
import Button from '../Button/Button'
import './link-to-lobby.sass'

interface ILinkToLobbyProps {
  linkLobby: string
}

const LinkToLobby: React.FC<ILinkToLobbyProps> = () => {
  const { roomId } = useAppSelector((state) => state.userParameters)
  const [tooltipValue, setTooltipValue] = useState<string>('Copy to clipboard')

  const handleCopyLink = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()
    const copyText: any = event.currentTarget.elements[0]
    window.navigator.clipboard.writeText(copyText.value)
    setTooltipValue('room ID copied')
    setTimeout(() => {
      setTooltipValue('Copy to clipboard')
    }, 5000)
  }
  return (
    <div className="scram">
      <h2 className="header-lobby">Link to Lobby</h2>
      <form className="linkLobby-block" onSubmit={handleCopyLink} id="link-form">
        <input className="text-input" type="text" disabled value={roomId} />
        <div className="scram__btn-wrapper">
          <Button value="Copy" size="small" theme="dark" form="link-form" />
          <span className="tooltiptext" id="myTooltip">
            {tooltipValue}
          </span>
        </div>
      </form>
    </div>
  )
}

export default LinkToLobby
