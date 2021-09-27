import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialStateAppParameters = {
  modalConnectLobby: false as boolean,
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
