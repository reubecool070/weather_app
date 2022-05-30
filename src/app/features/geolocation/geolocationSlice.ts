import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import getLocation from './geolocationApi'
import { InitialStatePropsI, locationDataState } from './geolocation'

const initialState: InitialStatePropsI = {
    loading: false,
    geoLocation: null,
    message: '',
}

const geolocationSlice = createSlice({
    name: 'geoLocation',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // get weathers list api
        builder.addCase(getLocation.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getLocation.fulfilled, (state, action) => {
            state.loading = false
            state.geoLocation = action.payload.data
        })
        builder.addCase(getLocation.rejected, (state, action) => {
            state.loading = false
            // state.weather = action.payload
        })
    },
})

export default geolocationSlice.reducer
