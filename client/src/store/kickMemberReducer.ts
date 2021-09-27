import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialStateKickMemberParameters = {
  isKick: false as boolean,
  kickMember: '' as string,
  kickMemberSocketId: '' as string,
  kickMemberResolution: null as null | boolean,
  openModalKickPlayer: false as boolean,
  youAreKickFromRoom: '' as string,
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
      state.kickMemberResolution = initialStateKickMemberParameters.kickMemberResolution
      state.openModalKickPlayer = initialStateKickMemberParameters.openModalKickPlayer
    },
    setKickMemberResolution(state, action: PayloadAction<boolean>) {
      state.kickMemberResolution = action.payload
    },
    setOpenModalKickPlayer(state, action: PayloadAction<boolean>) {
      state.openModalKickPlayer = action.payload
    },
    setYouAreKickFromRoom(state, action: PayloadAction<string>) {
      state.youAreKickFromRoom = action.payload
    },
  },
})

export const {
  setIsKick,
  setKickMember,
  setKickMemberSocketId,
  setInitialStateKickMemberParameters,
  setKickMemberResolution,
  setOpenModalKickPlayer,
  setYouAreKickFromRoom,
} = kickMemberParameters.actions

const kickMemberReducer = kickMemberParameters.reducer
export default kickMemberReducer
