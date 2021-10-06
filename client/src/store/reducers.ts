import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialStateAppParameters = {
  modalConnectLobby: false as boolean,
  finishVoiting: false as boolean,
  startGame: false as boolean,
  exitGame: false as boolean,
  stopGame: false as boolean,
  runRound: false as boolean,
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
    setStopGame(state, action: PayloadAction<boolean>) {
      state.stopGame = action.payload
    },
    setRunRound(state, action: PayloadAction<boolean>) {
      state.runRound = action.payload
    },
    setFinishVoiting(state, action: PayloadAction<boolean>) {
      state.finishVoiting = action.payload
    },
    setInitialStateAppParameters(state) {
      state.modalConnectLobby = initialStateAppParameters.modalConnectLobby
      state.finishVoiting = initialStateAppParameters.finishVoiting
      state.startGame = initialStateAppParameters.startGame
      state.exitGame = initialStateAppParameters.exitGame
      state.stopGame = initialStateAppParameters.stopGame
      state.runRound = initialStateAppParameters.runRound
    },
  },
})

export const {
  modalConnectToLobby,
  setStartGame,
  setExitGame,
  setInitialStateAppParameters,
  setStopGame,
  setRunRound,
  setFinishVoiting,
} = appParameters.actions

const appParametersReducer = appParameters.reducer
export default appParametersReducer
