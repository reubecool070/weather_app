import { configureStore } from '@reduxjs/toolkit'
import foreCastSlice from './features/forecast/foreCastSlice'
import geolocationSlice from './features/geolocation/geolocationSlice'
import historySlice from './features/history/historySlice'
import unitSlice from './features/unit/unitSlice'
import weatherSlice from './features/weather/weatherSlice'

export const store = configureStore({
    reducer: {
        weather: weatherSlice,
        units: unitSlice,
        geoLocation: geolocationSlice,
        history: historySlice,
        forecast: foreCastSlice,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
