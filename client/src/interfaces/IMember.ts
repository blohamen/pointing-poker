export default interface IMember {
  firstName: string
  lastName: string
  jobPossition: string
  image: string
  isAdmin: boolean
  isObserver: boolean
  isPlayer: boolean
  userId: string
  roomId: string
  authentification?: boolean
  socketId?: string
}
