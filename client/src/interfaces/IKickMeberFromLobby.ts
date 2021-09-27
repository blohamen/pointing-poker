import IUser from "./IUser";

export default interface IKickMeberFromLobby {
    members: IUser[]
    kickerMember: string
}