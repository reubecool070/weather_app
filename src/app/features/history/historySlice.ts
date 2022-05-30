import { createSlice } from '@reduxjs/toolkit'
import { InitialStatePropsI } from './history'

import getHistoryWeather from './historyApi'

const initialState: InitialStatePropsI = {
    loading: false,
    history: null,
    message: '',
}

const geolocationSlice = createSlice({
    name: 'history',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // get weathers list api
        builder.addCase(getHistoryWeather.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getHistoryWeather.fulfilled, (state, action) => {
            state.loading = false
            state.history = action.payload.data
        })
        builder.addCase(getHistoryWeather.rejected, (state) => {
            state.loading = false
            // state.weather = action.payload
        })
    },
})

export default geolocationSlice.reducer
