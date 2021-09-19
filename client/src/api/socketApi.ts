import { socketAdminUrl } from '../utils/config'
import createSocket from '../utils/socket'
import { CREATE_ROOM } from '../utils/socketActions'

export default class SocketApi {
  socket: any

  constructor() {
    this.socket = createSocket(socketAdminUrl)
  }

  onConnection() {
    this.socket.on('connection', () => {
      console.log('connect to socket!!!')
    })
  }

  createRoom(roomId: string) {
    this.socket.emit(CREATE_ROOM, roomId)
    this.socket.on('message', (data: string) => {
      console.log(data)
    })
  }

  joinRoom(roomId: string) {
    this.socket.emit('createRoom', roomId)
  }
}
