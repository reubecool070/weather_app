import { configureStore } from '@reduxjs/toolkit'
import unitSlice from './features/unitSlice'
import weatherSlice from './features/weatherSlice'

export const store = configureStore({
    reducer: {
        weather: weatherSlice,
        units: unitSlice,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
