import React from 'react'

const SocketContext = React.createContext<any | undefined>(undefined)

// const SocketProvider: React.FC = ({ children }): JSX.Element => {
//   const socket = createSocket(socketAdminUrl)
//   return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
// }

export { SocketContext }
