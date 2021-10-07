import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import IAddNewUserData from '../interfaces/IAddNewUserData'
// import { useAppSelector } from './redux'
// import IUser from '../interfaces/IUser'
import IMember from '../interfaces/IMember'
import IMembers from '../interfaces/IMembers'
import IDataRounds from '../interfaces/IDataRounds'
// createAsyncThunk

const initialStateMembersParameters = {
  members: [] as IMember[],
  observerMemebers: [] as IMember[],
  adminMember: {} as IMember,
  rounds: [] as IDataRounds[],
}

const membersParameters = createSlice({
  name: 'membersParameters',
  initialState: initialStateMembersParameters,
  reducers: {
    setInitialMembersState(state) {
      state.adminMember = initialStateMembersParameters.adminMember
      state.members = initialStateMembersParameters.members
      state.observerMemebers = initialStateMembersParameters.observerMemebers
      state.rounds = initialStateMembersParameters.rounds
    },
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
    setRounds(state, action: PayloadAction<IDataRounds[]>) {
      state.rounds = action.payload
    },
  },
})

export const { setMembers, setNewMember, setInitialMembersState, setRounds } = membersParameters.actions

const membersParametersReducer = membersParameters.reducer
export default membersParametersReducer
