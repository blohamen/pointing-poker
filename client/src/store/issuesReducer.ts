import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import IIssue from '../interfaces/IIssue'

const initialStateIssuesParameters = {
  modalCreateIssues: false as boolean,
  issues: [] as IIssue[],
}

const issuesParameters = createSlice({
  name: 'issuesParameters',
  initialState: initialStateIssuesParameters,
  reducers: {
    setModalCreateIssues(state, action: PayloadAction<boolean>) {
      state.modalCreateIssues = action.payload
    },
  },
})

export const { setModalCreateIssues } = issuesParameters.actions

const issuesReducer = issuesParameters.reducer
export default issuesReducer
