import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialStateAppParameters = {
  isKick: false as boolean,
  kickMember: '' as string,
  modalConnectLobby: false as boolean,
  kickMemberSocketId: '' as string,
  finishVoiting: false as boolean,
}

const appParameters = createSlice({
  name: 'appParameters',
  initialState: initialStateAppParameters,
  reducers: {
    modalConnectToLobby(state, action: PayloadAction<boolean>) {
      state.modalConnectLobby = action.payload
    },
  },
})

export const { modalConnectToLobby } = appParameters.actions

const appParametersReducer = appParameters.reducer
export default appParametersReducer
