import React from 'react'
import MemberCard from '../Member-card'

import './message.sass'

interface IMessage {
  message: { user: string; text: string }
  name: string
}

const Message = ({ message: { user, text }, name }: IMessage) => {
  let isSentByCurrentUser = false

  const trimmedName = name.trim().toLowerCase()

  if (user === trimmedName) {
    isSentByCurrentUser = true
  }

  return isSentByCurrentUser ? (
    <div className="msg-container">
      <div>
        <p>{text}</p>
      </div>
      <MemberCard title={trimmedName} subtitle="position" isSmall photoURL="test" />
    </div>
  ) : (
    <div className="msg-container">
      <div>
        <p>{text}</p>
      </div>
      <MemberCard title={user} subtitle="position" isSmall photoURL="test" />
    </div>
  )
}

export default Message
