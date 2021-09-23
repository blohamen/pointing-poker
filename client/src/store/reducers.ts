import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialStateAppParameters = {
  isKick: false as boolean,
  kickMember: '' as string,
  modalConnectLobby: false as boolean,
  kickMemberSocketId: '' as string,
}

const appParameters = createSlice({
  name: 'appParameters',
  initialState: initialStateAppParameters,
  reducers: {
    setIsKick(state, action: PayloadAction<boolean>) {
      state.isKick = action.payload
    },
    setKickMember(state, action: PayloadAction<string>) {
      state.kickMember = action.payload
    },
    modalConnectToLobby(state, action: PayloadAction<boolean>) {
      state.modalConnectLobby = action.payload
    },
    setKickMemberSocketId(state, action: PayloadAction<string>) {
      state.kickMemberSocketId = action.payload
    },
  },
})

export const { setIsKick, setKickMember, modalConnectToLobby, setKickMemberSocketId } = appParameters.actions

const appParametersReducer = appParameters.reducer
export default appParametersReducer
