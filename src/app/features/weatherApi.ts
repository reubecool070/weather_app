import { createAsyncThunk } from '@reduxjs/toolkit'
import useAxios, { SERVER_URL } from '../axios.config'
import { WeatherPayloadState } from './weather'

const getWeathers = createAsyncThunk(
    'weather',
    async (coordinates: WeatherPayloadState) => {
        const { latitude, longitude } = coordinates

        const weatherUrl = `api/v1/weather?lat=${latitude}&lon=${longitude}`

        const res = await useAxios().get(weatherUrl)
        return res.data
    }
)

export default getWeathers
