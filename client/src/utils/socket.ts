import io, { Socket } from 'socket.io-client'
import { DefaultEventsMap } from 'socket.io-client/build/typed-events'
import { socketAdminUrl } from './config'

function createSocket(socketUrl: string) {
  return io(socketUrl, { transports: ['websocket'] })
}

const socket: Socket<DefaultEventsMap, DefaultEventsMap> = createSocket(socketAdminUrl)

export default socket
