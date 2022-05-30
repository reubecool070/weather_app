import { createSlice } from '@reduxjs/toolkit'

export const initialState: { units: string } = {
    units: 'metric',
}
const unitSlice = createSlice({
    name: 'unit',
    initialState,
    reducers: {
        changemetric: (state) => {
            state.units = state.units === 'metric' ? 'imperial' : 'metric'
        },
    },
})
export const { changemetric } = unitSlice.actions
export default unitSlice.reducer
