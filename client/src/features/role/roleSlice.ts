import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface RoleState {
  roleValue: string
  roomId: string
}

const initialState: RoleState = {
  roleValue: '',
  roomId: '',
}

export const roleSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {
    diller: (state) => {
      state.roleValue = 'diller'
      state.roomId = ''
    },
    // player: (state) => {
    //   state.roleValue = 'player'
    //   state.roomId = ''
    // },
    observer: (state, action: PayloadAction<string>) => {
      state.roleValue = 'observer'
      state.roomId = action.payload
    },
    player: (state, action: PayloadAction<string>) => {
      state.roleValue = 'player'
      state.roomId = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { diller, player, observer } = roleSlice.actions

export default roleSlice.reducer
