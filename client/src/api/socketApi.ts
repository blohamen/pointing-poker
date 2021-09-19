import createSocket from '../utils/socket'

const socketApi = {
  socket: createSocket('http://127.0.0.1:5000/settingScrumMaster'),

  onConnection() {
    this.socket.on('connection', () => {
      console.log('connect to socket!!!')
    })
  },

  createRoom(roomId: string) {
    this.socket.emit('createRoom', roomId)
    this.socket.on('message', (data) => {
      console.log(data)
    })
  },

  joinRoom(roomId: string) {
    this.socket.emit('createRoom', roomId)
  },
}

export default socketApi
