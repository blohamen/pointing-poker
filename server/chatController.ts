import { Socket } from "socket.io";
import { nsp } from "../app";
// socket.on('sendMessage', (message, roomId, firstName, lastName, jobPossition, image) => {sendMessage(socket, message, roomId, firstName, lastName, jobPossition, image)})
// import sendMessage from "./chatController";

function sendMessage(socket: Socket, message: string, roomId: string, firstName: string, lastName: string, jobPossition: string, image: string ) {
  nsp.to(roomId).emit('newMessage', 
  {
    userName: firstName,
    userLastName: lastName,
    userJobPosition: jobPossition,
    userImageURL: image,
    userText: message
  })
}

export default sendMessage
