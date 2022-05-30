import { createAsyncThunk } from '@reduxjs/toolkit'
import useAxios from '../../axios.config'
import { locationPayload } from './geolocation'

const getLocation = createAsyncThunk(
    'geoLocation',
    async (coordinates: locationPayload) => {
        const { city } = coordinates

        const weatherUrl = `api/v1/geolocating?city=${city}`

        const res = await useAxios().get(weatherUrl)
        return res.data
    }
)

export default getLocation
