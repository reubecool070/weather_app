import { createAsyncThunk } from '@reduxjs/toolkit'
import useAxios from '../../axios.config'
import { forecastPayload } from './forecast'

const getHourlyForecast = createAsyncThunk(
    'forecast',
    async (coordinates: forecastPayload) => {
        const { lat, lon, cnt } = coordinates

        const weatherUrl = `api/v1/forecast?lat=${lat}&lon=${lon}&cnt=${cnt}`

        const res = await useAxios().get(weatherUrl)
        return res.data
    }
)

export default getHourlyForecast
