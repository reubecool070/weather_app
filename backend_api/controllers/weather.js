const { validationResult } = require('express-validator')
const asyncHandler = require('../middleware/asyncHandler')
const ErrorResponse = require('../utils/ErrorResponse')
const axios = require('axios')
const { getCache, setCache } = require('./redis.controller')

exports.weather = asyncHandler(async (req, res, next) => {
    let url = ''
    let weather
    let cacheWeather
    const errors = validationResult(req.params)
    const { city, lat, lon, units } = req.query
    try {
        if (!errors.isEmpty()) {
            const errorMessages = errors
                .array()
                .map((error) => error.msg)
                .join(', ')

            return next(new ErrorResponse(errorMessages, 400))
        }

        if (city) {
            cacheWeather = await getCache('city')
            url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=${units}`
        } else if (lat && lon) {
            cacheWeather = await getCache('coordinates')
            url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}&units=${units}`
        }

        if (cacheWeather) {
            return res.status(200).json({
                data: cacheWeather,
                message: 'Weather fetched successfully',
                status: true,
            })
        }
        const response = await axios.get(url)
        if (!cacheWeather && city) await setCache('city', response.data)
        if (!cacheWeather && lat) await setCache('coordinates', response.data)

        return res.status(200).json({
            data: response.data,
            message: 'Weather fetched successfully',
            status: true,
        })
    } catch (error) {
        return res.status(401).json({ mmessage: error.message })
    }
})
