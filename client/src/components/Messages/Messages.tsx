import React from 'react'
import Message from '../Message/Message'

interface IMessages {
  messages: any
  name: any
}

const Messages = ({ messages, name }: IMessages) => (
  <div>
    {messages.map((message: any) => (
      <div>
        <Message message={message} name={name} />
      </div>
    ))}
  </div>
)
export default Messages
