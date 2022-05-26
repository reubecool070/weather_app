import { createAsyncThunk } from '@reduxjs/toolkit'
import useAxios, { SERVER_URL } from '../axios.config'

const getWeathers = createAsyncThunk('weather', async () => {
    const res = await useAxios().get(`${SERVER_URL}/}`)
    return res.data
})

export default getWeathers
