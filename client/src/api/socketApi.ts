import io, { Socket } from 'socket.io-client'
import { DefaultEventsMap } from 'socket.io-client/build/typed-events'
import IMembers from '../interfaces/IMembers'
import { CREATE_ROOM, JOIN_ROOM, MEMBERS, SEND_MEMBERS_TO_CLIENT } from '../utils/socketActions'
// export interface IMmebersRecieved {
//   [key: string]: IMember[]
// }

export default class SocketApi {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>

  constructor(socket: Socket<DefaultEventsMap, DefaultEventsMap>) {
    this.socket = socket
  }

  createRoom(roomId: string) {
    this.socket.emit(CREATE_ROOM, roomId)
  }

  joinRoom(roomId: string) {
    this.socket.emit(JOIN_ROOM, roomId)
  }

  membersRecieved(roomId: string) {
    this.socket.emit(MEMBERS, roomId)
    const membersHandler = (e: IMembers) => {
      return e
    }
    this.socket.on(SEND_MEMBERS_TO_CLIENT, membersHandler)
  }
}
