import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialStateAppParameters = {
  isKick: false as boolean,
  kickMember: '' as string,
  modalConnectLobby: false as boolean,
  socket: null as any | null,
}

const appParameters = createSlice({
  name: 'appParameters',
  initialState: initialStateAppParameters,
  reducers: {
    isKick(state, action: PayloadAction<boolean>) {
      state.isKick = action.payload
    },
    kickMember(state, action: PayloadAction<string>) {
      state.kickMember = action.payload
    },
    modalConnectToLobby(state, action: PayloadAction<boolean>) {
      state.modalConnectLobby = action.payload
    },
    setSocket(state, action: PayloadAction<any | null>) {
      state.socket = action.payload
    },
  },
})

export const { isKick, kickMember, modalConnectToLobby, setSocket } = appParameters.actions

const appParametersReducer = appParameters.reducer
export default appParametersReducer
