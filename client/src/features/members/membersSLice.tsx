import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface MembersState {
  membersArray: Array<string>
}

const initialState: MembersState = {
  membersArray: [],
}

export const roleSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {
    // player: (state) => {
    //   state.roleValue = 'player'
    //   state.roomId = ''
    // },
    membersAction: (state, action: PayloadAction<string>) => {
      state.membersArray.push(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { membersAction } = roleSlice.actions

export default roleSlice.reducer
