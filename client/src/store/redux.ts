import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import userParametersReducer from './authReducer'
import gameSettingsParametersReducer from './gameSettingsReducer'
import issuesReducer from './issuesReducer'
import kickMemberReducer from './kickMemberReducer'
import membersParametersReducer from './memberRreducer'
import appParametersReducer from './reducers'

const store = configureStore({
  reducer: {
    appParameters: appParametersReducer,
    userParameters: userParametersReducer,
    membersParameters: membersParametersReducer,
    gameSettingsParameters: gameSettingsParametersReducer,
    kickMemberParameters: kickMemberReducer,
    issuesParameters: issuesReducer,
  },
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default store
