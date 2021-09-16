import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// createAsyncThunk

const initialStateAppParameters = {
  isKick: <boolean>false,
  kickMember: <string>'',
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
  },
})

export const { isKick, kickMember } = appParameters.actions

const appParametersReducer = appParameters.reducer
export default appParametersReducer
