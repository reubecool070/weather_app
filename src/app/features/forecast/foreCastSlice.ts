import { createSlice } from '@reduxjs/toolkit'
import { InitialStatePropsI } from './forecast'
import getHourlyForecast from './forecastApi'

const initialState: InitialStatePropsI = {
    loading: false,
    forecast: null,
    message: '',
}

const geolocationSlice = createSlice({
    name: 'forecast',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // get weathers list api
        builder.addCase(getHourlyForecast.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getHourlyForecast.fulfilled, (state, action) => {
            state.loading = false
            state.forecast = action.payload.data
        })
        builder.addCase(getHourlyForecast.rejected, (state) => {
            state.loading = false
            state.forecast = null
        })
    },
})

export default geolocationSlice.reducer
