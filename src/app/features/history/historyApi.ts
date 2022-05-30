import { createAsyncThunk } from '@reduxjs/toolkit'
import useAxios from '../../axios.config'
import { historyPayloadState } from './history'

const getWeathers = createAsyncThunk(
    'weather',
    async (coordinates: historyPayloadState) => {
        const { lat, lon, units, dt } = coordinates

        const weatherUrl = `api/v1/historyWeather?lat=${lat}&lon=${lon}&units=${units}&dt=${dt}`

        const res = await useAxios().get(weatherUrl)
        return res.data
    }
)

export default getWeathers
