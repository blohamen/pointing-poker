import React, { useEffect, useState } from 'react'
import querystring from 'query-string'
import io from 'socket.io-client'

import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import { membersAction } from '../../features/members/membersSLice'

import './lobby-page.sass'
import Messages from '../Messages/Messages'
import MemberCard from '../Member-card'

const socket = io('http://localhost:4001', { transports: ['websocket'] })

interface ILobbyPage {
  location: any
}

const LobbyPage: React.FC<ILobbyPage> = ({ location }: ILobbyPage) => {
  // const [users, setUsers] = useState('')
  const [nameT, setTName] = useState<string | string[] | null>(null)
  const [roomT, setTRoom] = useState<string | string[] | null>(null)
  const [msg, setMessage] = useState<string | undefined>('')
  const [messagesChat, setMessagesChat] = useState<string[]>([])
  const ENDPOINT = 'localhost:5000/lobby'

  // Redux
  const dispatch = useDispatch()
  const role = useSelector((state: RootState) => state.role.roleValue)
  const membersBlock = useSelector((state: RootState) => state.members.membersArray)

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
      setMessagesChat((messages) => [...messages, message])
    })

    socket.on('members', ({ members }) => {
      // console.log(members)
      members.forEach(({ name }: any) => {
        // return <div key={name}>{name}</div>
        dispatch(membersAction(name))
      })
      // dispatch(membersAction(members))
      // redux dispatch memebers
    })

    // socket.on('roomData', ({ users }) => {
    //   setUsers(users)
    // })
  }, [])

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
        <h2>
          Scram master:
          <MemberCard title={role} subtitle="position" photoURL="test" />
        </h2>
        <h2>Members:</h2>
        <p>
          array of memebers]
          {/* {membersBlock.map(({ name }: any) => {
            return <div key={name}>{name}</div>
          })} */}
          {membersBlock.map((member) => {
            return (
              <div key={member}>
                <MemberCard title={member} subtitle="position" photoURL="test" />
              </div>
            )
          })}
        </p>

        {/* {users.map(({ name }) => (
          <div key={name} className="activeItem">
            {name}
          </div>
        ))} */}
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
        <Messages messages={messagesChat} name={nameT} />
      </aside>
    </div>
  )
}

export default LobbyPage
