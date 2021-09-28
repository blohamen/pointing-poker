import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import IChat from '../interfaces/IChat'

const initialStateChatParameters = {
  chatMessages: [] as IChat[],
}

const chatParameters = createSlice({
  name: 'chatParameters',
  initialState: initialStateChatParameters,
  reducers: {
    setChatMessages(state, action: PayloadAction<IChat[]>) {
      state.chatMessages = action.payload
    },
    setInitialStateKickMemberParameters(state) {
      state.chatMessages = initialStateChatParameters.chatMessages
    },
  },
})

export const { setChatMessages, setInitialStateKickMemberParameters } = chatParameters.actions

const chatReducer = chatParameters.reducer
export default chatReducer
