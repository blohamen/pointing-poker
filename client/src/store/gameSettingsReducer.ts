import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialStateGameSettingsParameters = {
  masterAsPlayer: true as boolean,
  changingCard: false as boolean,
  isTimerNeeded: true as boolean,
  automaticallyAdmitNewMember: true as boolean,
  automaticallyFlipCards: false as boolean,
  scoreType: 'story point' as string,
  scoreTypeShort: 'SP' as string,
  timerMinutes: 0 as number,
  timerSeconds: 0 as number,
  currentShirtCards: '/static/media/shirt1.cfc195e1.jpg' as string,
  cardSetName: 'fibonacci' as string,
  currentCardSet: ['0', '1', '2', '3', '5', '8', '13', '21', '34', '55', '89', 'unknow', 'coffee break'] as string[],
}

const gameSettingsParameters = createSlice({
  name: 'gameSettingsParameters',
  initialState: initialStateGameSettingsParameters,
  reducers: {
    setMasterAsPlayer(state, action: PayloadAction<boolean>) {
      state.masterAsPlayer = action.payload
    },
    setIsTimerNeeded(state, action: PayloadAction<boolean>) {
      state.isTimerNeeded = action.payload
    },
    setScoreType(state, action: PayloadAction<string>) {
      state.scoreType = action.payload
    },
    setScoreTypeShort(state, action: PayloadAction<string>) {
      state.scoreTypeShort = action.payload
    },
    setAutomaticallyAdmitNewMember(state, action: PayloadAction<boolean>) {
      state.automaticallyAdmitNewMember = action.payload
    },
    setAutomaticallyFlipCards(state, action: PayloadAction<boolean>) {
      state.automaticallyFlipCards = action.payload
    },
    setCurrentCardSet(state, action: PayloadAction<string[]>) {
      state.currentCardSet = action.payload
    },
    setCardSetName(state, action: PayloadAction<string>) {
      state.cardSetName = action.payload
    },
    setCurrentShirtCards(state, action: PayloadAction<string>) {
      state.currentShirtCards = action.payload
    },
    setChangingCard(state, action: PayloadAction<boolean>) {
      state.changingCard = action.payload
    },
    setTimerMinutes(state, action: PayloadAction<number>) {
      state.timerMinutes = action.payload
    },
    setTimerSeconds(state, action: PayloadAction<number>) {
      state.timerSeconds = action.payload
    },
  },
})

export const {
  setMasterAsPlayer,
  setIsTimerNeeded,
  setScoreType,
  setScoreTypeShort,
  setAutomaticallyAdmitNewMember,
  setAutomaticallyFlipCards,
  setCurrentCardSet,
  setCardSetName,
  setCurrentShirtCards,
  setChangingCard,
  setTimerMinutes,
  setTimerSeconds,
} = gameSettingsParameters.actions

const gameSettingsParametersReducer = gameSettingsParameters.reducer
export default gameSettingsParametersReducer
