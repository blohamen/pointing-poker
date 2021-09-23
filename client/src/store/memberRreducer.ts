import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import IAddNewUserData from '../interfaces/IAddNewUserData'
// import { useAppSelector } from './redux'
// import IUser from '../interfaces/IUser'
import IMember from '../interfaces/IMember'
import IMembers from '../interfaces/IMembers'

// createAsyncThunk

const initialStateAppParameters = {
  members: [] as IMember[],
  observerMemebers: [] as IMember[],
  adminMember: {} as IMember,
}

// interface IQueryParameters {
//     data: string
//   }

// export const membersRecieved = createAsyncThunk<IMembers, IQueryParameters>(
//     'membersParameters/membersRecieved',
//     async (queryParameters) => {
// const {socket} = useAppSelector(state => state.appParameters)
// const { data } = queryParameters
// let result: IMembers = {members: []}
// if (socket) {
//   const dataRecieved = await socket?.membersRecieved(data)
//   result  = dataRecieved
//   return result
// }
// return result
//     }
// )

const membersParameters = createSlice({
  name: 'membersParameters',
  initialState: initialStateAppParameters,
  reducers: {
    setMembers(state, action: PayloadAction<IMembers>) {
      const basicMemebers = action.payload.members.filter((member) => member.isPlayer && !member.isObserver)
      const adminMember = action.payload.members.filter((member) => member.isAdmin)[0]
      const observerMemebers = action.payload.members.filter((member) => member.isObserver)
      state.members = basicMemebers
      state.adminMember = adminMember
      state.observerMemebers = observerMemebers
    },
    setNewMember(state, action: PayloadAction<IAddNewUserData>) {
      state.members = [...state.members, ...action.payload.user]
    },
  },
})

export const { setMembers, setNewMember } = membersParameters.actions

const membersParametersReducer = membersParameters.reducer
export default membersParametersReducer
