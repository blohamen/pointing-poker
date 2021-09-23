import IMembers from '../interfaces/IMembers'
// import { socketAdminUrl } from '../utils/config'
// import createSocket from '../utils/socket'
import { CREATE_ROOM } from '../utils/socketActions'

// export interface IMmebersRecieved {
//   [key: string]: IMember[]
// }

export default class SocketApi {
  socket: any

  constructor(socket: any) {
    this.socket = socket
  }

  createRoom(roomId: string) {
    this.socket.emit(CREATE_ROOM, roomId)
  }

  joinRoom(roomId: string) {
    this.socket.emit('joinRoom', roomId)
  }

  membersRecieved(roomId: string) {
    this.socket.emit('members', roomId)
    const membersHandler = (e: IMembers) => {
      return e
    }
    this.socket.on('sendMembersToClient', membersHandler)
  }
}
