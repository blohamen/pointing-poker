let ROOM_DATA = {
  members: [],
}

const addMember = ({
  id,
  name,
  room
}) => {
  // check id name room

  const memberT = {
    id,
    name,
    room
  }

  ROOM_DATA.members.push(memberT)
}

const removeMember = (
  id
) => {
  const membersAfterRemove = ROOM_DATA.members.filter(item => item.id !== '1');
  ROOM_DATA.members = membersAfterRemove
}

const getMembers = () => {
  return ROOM_DATA.members
}

// test 
addMember({
  id: '1',
  name: 'name',
  room: 'room'
})

addMember({
  id: '2',
  name: 'name2',
  room: 'room2'
})
console.log('ADD two object', ROOM_DATA)

removeMember('1')

console.log('after remove', ROOM_DATA)

socket.broadcast.to(user.room).emit('membersToCLient', {
  members: getMembers()
})