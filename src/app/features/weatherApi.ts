import { createAsyncThunk } from '@reduxjs/toolkit'
import useAxios from '../axios.config'
import { WeatherPayloadState } from './weather'

const getWeathers = createAsyncThunk(
    'weather',
    async (coordinates: WeatherPayloadState) => {
        const { lat, lon, units } = coordinates

        const weatherUrl = `api/v1/weather?lat=${lat}&lon=${lon}&units=${units}`

        const res = await useAxios().get(weatherUrl)
        return res.data
    }
)

export default getWeathers
