import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialStateKickMemberParameters = {
  isKick: false as boolean,
  kickMember: '' as string,
  kickMemberSocketId: '' as string,
}

const kickMemberParameters = createSlice({
  name: 'appParameters',
  initialState: initialStateKickMemberParameters,
  reducers: {
    setIsKick(state, action: PayloadAction<boolean>) {
      state.isKick = action.payload
    },
    setKickMember(state, action: PayloadAction<string>) {
      state.kickMember = action.payload
    },
    setKickMemberSocketId(state, action: PayloadAction<string>) {
      state.kickMemberSocketId = action.payload
    },
    setInitialStateKickMemberParameters(state) {
      state.isKick = initialStateKickMemberParameters.isKick
      state.kickMember = initialStateKickMemberParameters.kickMember
      state.kickMemberSocketId = initialStateKickMemberParameters.kickMemberSocketId
    },
  },
})

export const { setIsKick, setKickMember, setKickMemberSocketId, setInitialStateKickMemberParameters } =
  kickMemberParameters.actions

const kickMemberReducer = kickMemberParameters.reducer
export default kickMemberReducer
