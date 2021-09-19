import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import roleReducer from '../features/role/roleSlice'
import membersReducer from '../features/members/membersSLice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    role: roleReducer,
    members: membersReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
