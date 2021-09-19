import io from 'socket.io-client'

export default function createSocket(socketUrl: string) {
  return io(socketUrl, { transports: ['websocket'] })
}
