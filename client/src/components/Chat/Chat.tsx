import React, { useState, useEffect } from 'react'
import { useAppSelector } from '../../store/redux'
import socket from '../../utils/socket'
import MemberCard from '../Member-card'

import './chat.sass'

const Chat = () => {
  const { roomId, firstName } = useAppSelector((state) => state.userParameters)
  const [messages, setMessages] = useState<string[]>([])
  const [message, setMessage] = useState('')

  const messagesText = messages.map((item) => (
    <div className="message__block">
      <div className="message__text"> {item}</div>
      <div className="message__user">
        <MemberCard socketId="123" title="First Last" subtitle="Position" photoURL="url" isSmall />
      </div>
    </div>
  ))

  useEffect(() => {
    socket.on('newMessage', (messageFromSocket) => {
      // const messagesArray = messages
      // messagesArray.push(messageFromSocket)
      // setMessage(messageFromSocket)
      setMessages([...messages, messageFromSocket])
    })
  }, [messages])

  const sendMessage = (event: any) => {
    event.preventDefault()
    if (message) {
      socket.emit('sendMessage', event.target.value, roomId, firstName)
    }
    setMessage('')
  }

  return (
    <div className="chat">
      <div className="messages">{messagesText}</div>
      <form className="form">
        <input
          className="chat__input"
          type="text"
          placeholder="To send message click Enter"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          onKeyPress={(event) => (event.key === 'Enter' ? sendMessage(event) : null)}
        />
      </form>
    </div>
  )
}

export default Chat
