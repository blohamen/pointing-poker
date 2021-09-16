const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

const PORT = process.env.PORT || 4003

const router = require('./router')
const {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom
} = require('./user.js')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

io.on('connect', (socket) => {
  console.log('we have a new connection ')

  socket.on('join', ({
    name,
    room
  }, callback) => {
    // console.log(name, room)
    const {
      error,
      user
    } = addUser({
      id: socket.id,
      name,
      room
    })

    if (error) return callback(error)

    socket.emit('message', {
      user: `admin`,
      text: `${user.name}, welcome to room ${user.room}`
    })

    socket.broadcast.to(user.room).emit('message', {
      user: `admin`,
      text: `${user.name}, has joined`
    })

    socket.join(user.room)
  })

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id)

    io.to(user.room).emit('message', {
      user: user.name,
      text: message
    })

    io.to(user.room).emit('roomData', {
      room: user.room,
      users: getUsersInRoom(user.room)
    })

    callback()
  })

  socket.on('disconnect', () => {
    console.log('User left ...')
    // const user = removeUser(socket.id)
    // 1:40:49
  })
})

app.use(cors())
app.use(router)


server.listen(PORT, () => console.log(`Server has started port ${PORT}.`));