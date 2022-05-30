import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { WeatherDataState } from './weather'
import getWeathers from './weatherApi'

export interface InitialStatePropsI {
    loading: boolean
    weather: WeatherDataState | null
    message: string
}
const initialState: InitialStatePropsI = {
    loading: false,
    weather: null,
    message: '',
}

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // get weathers list api
        builder.addCase(getWeathers.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getWeathers.fulfilled, (state, action) => {
            state.loading = false
            state.weather = action.payload.data
        })
        builder.addCase(getWeathers.rejected, (state, action) => {
            state.loading = false
            // state.weather = action.payload
        })
    },
})

export default weatherSlice.reducer