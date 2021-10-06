import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import IIssue from '../interfaces/IIssue'

const initialStateIssuesParameters = {
  modalCreateIssues: false as boolean,
  modalModifiedIssue: false as boolean,
  issues: [] as IIssue[],
  modifiedIssueId: '' as string,
  currentIssue: 0 as number,
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
    setModifiedIssueId(state, action: PayloadAction<string>) {
      state.modifiedIssueId = action.payload
    },
    setCurrentIssue(state, action: PayloadAction<number>) {
      state.currentIssue = action.payload
    },
    setInitialStateIssuesParameters(state) {
      state.issues = initialStateIssuesParameters.issues
      state.modalCreateIssues = initialStateIssuesParameters.modalCreateIssues
      state.modalModifiedIssue = initialStateIssuesParameters.modalModifiedIssue
      state.modifiedIssueId = initialStateIssuesParameters.modifiedIssueId
    },
  },
})

export const {
  setModalCreateIssues,
  setIssues,
  setModalModifiedIssue,
  setInitialStateIssuesParameters,
  setModifiedIssueId,
  setCurrentIssue,
} = issuesParameters.actions

const issuesReducer = issuesParameters.reducer
export default issuesReducer
