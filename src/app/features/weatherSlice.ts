import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import getWeathers from './weatherApi'

const initialState: any = {
    loading: false,
    weather: {
        users: [],
    },
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
            state.weather = action.payload
        })
        builder.addCase(getWeathers.rejected, (state, action) => {
            state.loading = false
            state.weather = action.payload
        })
    },
})

export default weatherSlice.reducer
