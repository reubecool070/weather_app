const { validationResult } = require('express-validator')
const asyncHandler = require('../middleware/asyncHandler')
const ErrorResponse = require('../utils/ErrorResponse')
const axios = require('axios')

exports.weather = asyncHandler(async (req, res, next) => {
    const errors = validationResult(req.params)
    let url = ''
    if (!errors.isEmpty()) {
        const errorMessages = errors
            .array()
            .map((error) => error.msg)
            .join(', ')

        return next(new ErrorResponse(errorMessages, 400))
    }

    const { city, lat, lon } = req.query
    if (city) {
        url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.WEATHER_API_KEY}`
    } else if (lat && lon) {
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&units=metric&lon=${lon}&appid=${process.env.WEATHER_API_KEY}`
    }

    const response = await axios.get(url)
    const weather = response.data
    return res.status(200).json({
        data: weather,
        message: 'Weather fetched successfully',
        status: true,
    })
})
