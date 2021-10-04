import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialStateAppParameters = {
  modalConnectLobby: false as boolean,
  finishVoiting: false as boolean,
  startGame: false as boolean,
  exitGame: false as boolean,
  statisticGame: false as boolean,
}

const appParameters = createSlice({
  name: 'appParameters',
  initialState: initialStateAppParameters,
  reducers: {
    modalConnectToLobby(state, action: PayloadAction<boolean>) {
      state.modalConnectLobby = action.payload
    },
    setStartGame(state, action: PayloadAction<boolean>) {
      state.startGame = action.payload
    },
    setExitGame(state, action: PayloadAction<boolean>) {
      state.exitGame = action.payload
    },
    setStatisticGame(state, action: PayloadAction<boolean>) {
      state.statisticGame = action.payload
    },
    setFinishVoiting(state, action: PayloadAction<boolean>) {
      state.finishVoiting = action.payload
    },
    setInitialStateAppParameters(state) {
      state.modalConnectLobby = initialStateAppParameters.modalConnectLobby
      state.finishVoiting = initialStateAppParameters.finishVoiting
      state.startGame = initialStateAppParameters.startGame
      state.exitGame = initialStateAppParameters.exitGame
      state.statisticGame = initialStateAppParameters.statisticGame
    },
  },
})

export const {
  modalConnectToLobby,
  setStartGame,
  setExitGame,
  setInitialStateAppParameters,
  setStatisticGame,
  setFinishVoiting,
} = appParameters.actions

const appParametersReducer = appParameters.reducer
export default appParametersReducer
