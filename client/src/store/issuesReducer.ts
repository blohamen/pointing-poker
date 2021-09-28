import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import IIssue from '../interfaces/IIssue'

const initialStateIssuesParameters = {
  modalCreateIssues: false as boolean,
  modalModifiedIssue: false as boolean,
  issues: [] as IIssue[],
}

const issuesParameters = createSlice({
  name: 'issuesParameters',
  initialState: initialStateIssuesParameters,
  reducers: {
    setModalCreateIssues(state, action: PayloadAction<boolean>) {
      state.modalCreateIssues = action.payload
    },
    setIssues(state, action: PayloadAction<IIssue[]>) {
      state.issues = action.payload
    },
    setModalModifiedIssue(state, action: PayloadAction<boolean>) {
      state.modalModifiedIssue = action.payload
    },
    setInitialStateIssuesParameters(state) {
      state.issues = initialStateIssuesParameters.issues
      state.modalCreateIssues = initialStateIssuesParameters.modalCreateIssues
      state.modalModifiedIssue = initialStateIssuesParameters.modalModifiedIssue
    },
  },
})

export const { setModalCreateIssues, setIssues, setModalModifiedIssue, setInitialStateIssuesParameters } =
  issuesParameters.actions

const issuesReducer = issuesParameters.reducer
export default issuesReducer
