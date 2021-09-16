import React, { useEffect, useState } from 'react'
import querystring from 'query-string'
import io from 'socket.io-client'

import './lobby-page.sass'
import Messages from '../Messages/Messages'

const socket = io('http://localhost:4003', { transports: ['websocket'] })

interface ILobbyPage {
  location: any
}

const LobbyPage: React.FC<ILobbyPage> = ({ location }: ILobbyPage) => {
  const [nameT, setTName] = useState<string | string[] | null>(null)
  const [roomT, setTRoom] = useState<string | string[] | null>(null)
  const [msg, setMessage] = useState<string | undefined>('')
  const [messages, setMessages] = useState<string[]>([])
  const ENDPOINT = 'localhost:5000/lobby'

  useEffect(() => {
    const { name, room } = querystring.parse(location.search)

    // socket = io(ENDPOINT)
    setTName(name)
    setTRoom(room)

    console.log(nameT)
    console.log(roomT)

    socket.emit('join', { name, room }, () => {
      console.log(nameT)
    })
  }, [ENDPOINT, location.search])

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message])
    })
  }, [messages])

  const sendMessage = (event: any) => {
    event.preventDefault()

    if (msg) {
      socket.emit('sendMessage', msg, () => {
        setMessage('')
      })
    }
  }

  return (
    <div className="lobby-container">
      <main className="main-container">
        <h1>Lobby page</h1>
        <h2>Scram master: Vadim </h2>
        <h2>Members:</h2>
        <p>[... arrayt of member get from node]</p>
        <h2>Issues:</h2>
        <p>[... arrayt of issues get from node]</p>
      </main>
      <aside className="chat-container">
        <h2>Chat room_id:{roomT}</h2>
        <input
          value={msg}
          onChange={(event) => setMessage(event.target.value)}
          onKeyPress={(event) => (event.key === 'Enter' ? sendMessage(event) : null)}
        />
        <Messages messages={messages} name={nameT} />
      </aside>
    </div>
  )
}

export default LobbyPage
// localhost:3002/chat?name=qwe&room=room1ed22
