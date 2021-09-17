import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import userApi from '../api/getUserData'
import IUser from '../interfaces/IUser'

const initialInitialAythPerson: IUser = {
  firstName: '',
  lastName: '',
  jobPossition: '',
  image: '',
  isAdmin: false,
  isObserver: false,
  isPlayer: false,
  userId: '',
  roomId: '',
  authentification: false,
}

interface IQueryParameters {
  data: FormData
}

export const sendPersonData = createAsyncThunk<IUser, IQueryParameters>(
  'userParameters/recievedParameters',
  async (queryParameters) => {
    const { data } = queryParameters
    const result: IUser | string = await userApi.sendUserData(data)
    return result
  }
)

const userParameters = createSlice({
  name: 'userParameters',
  initialState: initialInitialAythPerson,
  reducers: {
    firstName(state, action: PayloadAction<string>) {
      state.firstName = action.payload
    },
    lastName(state, action: PayloadAction<string>) {
      state.lastName = action.payload
    },
    jobPossition(state, action: PayloadAction<string>) {
      state.jobPossition = action.payload
    },
    image(state, action: PayloadAction<string>) {
      state.image = action.payload
    },
    setIsAdmin(state, action: PayloadAction<boolean>) {
      state.isAdmin = action.payload
    },
    setIsObserver(state, action: PayloadAction<boolean>) {
      state.isObserver = action.payload
    },
    setIsPlayer(state, action: PayloadAction<boolean>) {
      state.isPlayer = action.payload
    },
    setUserId(state, action: PayloadAction<string>) {
      state.userId = action.payload
    },
    setRoomId(state, action: PayloadAction<string>) {
      state.roomId = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sendPersonData.fulfilled, (state, action) => {
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
      state.jobPossition = action.payload.jobPossition
      state.image = action.payload.image
      state.isAdmin = action.payload.isAdmin
      state.isObserver = action.payload.isObserver
      state.isPlayer = action.payload.isPlayer
      state.roomId = action.payload.roomId
      state.userId = action.payload.userId
      state.authentification = action.payload.authentification
    })
  },
})

export const {
  firstName,
  lastName,
  jobPossition,
  image,
  setIsAdmin,
  setIsObserver,
  setIsPlayer,
  setUserId,
  setRoomId,
} = userParameters.actions

const userParametersReducer = userParameters.reducer
export default userParametersReducer
