import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialStateIssuesParameters = {
  isKick: false as boolean,
}

const issuesParameters = createSlice({
  name: 'issuesParameters',
  initialState: initialStateIssuesParameters,
  reducers: {
    setIsKick(state, action: PayloadAction<boolean>) {
      state.isKick = action.payload
    },
  },
})

export const {
  
} = issuesParameters.actions

const issuesReducer = issuesParameters.reducer
export default issuesReducer
