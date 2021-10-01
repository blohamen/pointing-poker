import React, { useState, useEffect } from 'react'
import IChat from '../../interfaces/IChat'
import { setChatMessages } from '../../store/chatReducer'
import { useAppDispatch, useAppSelector } from '../../store/redux'
import socket from '../../utils/socket'
import { CHAT_MESSAGES, NEW_CHAT_MESSAGE } from '../../utils/socketActions'
import MemberCard from '../Member-card'
import './chat.sass'

const Chat = () => {
  const dispatch = useAppDispatch()
  const { roomId, firstName, lastName, jobPossition, image, userId } = useAppSelector((state) => state.userParameters)
  const { chatMessages } = useAppSelector((state) => state.chatParameters)
  const [message, setMessage] = useState('')

  useEffect(() => {
    socket.once(CHAT_MESSAGES, (data: IChat[]) => {
      dispatch(setChatMessages(data))
    })
  }, [])
  useEffect(() => {
    const handlerChatMessage = (data: IChat[]) => {
      dispatch(setChatMessages(data))
    }
    socket.on(NEW_CHAT_MESSAGE, handlerChatMessage)
  }, [])

  const sendMessage = (event: React.SyntheticEvent) => {
    event.preventDefault()
    socket.emit('sendMessage', message, roomId, firstName, lastName, jobPossition, image, userId)
    setMessage('')
  }

  const messagesText = chatMessages.map((item) => (
    <div className="message__block" key={item.messageId}>
      <div className="message__text"> {item.userText}</div>
      <div className="message__user">
        <MemberCard
          socketId={item.messageId}
          isCurrentPlayer={userId === item.userId}
          title={`${item.userName} ${item.userLastName}`}
          subtitle={item.userJobPosition}
          photoURL={item.userImageURL}
          isChatCard
        />
      </div>
    </div>
  ))

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
