const { validationResult } = require('express-validator')
const asyncHandler = require('../middleware/asyncHandler')
const ErrorResponse = require('../utils/ErrorResponse')
const axios = require('axios')
const { getCache, setCache, flushAll } = require('./redis.controller')

exports.weatherByCoordinates = asyncHandler(async (req, res, next) => {
    let cacheWeather

    const errors = validationResult(req.params)
    const { lat, lon, units } = req.query
    try {
        if (!errors.isEmpty()) {
            const errorMessages = errors
                .array()
                .map((error) => error.msg)
                .join(', ')

            return next(new ErrorResponse(errorMessages, 400))
        }
        // await flushAll()

        if (units === 'metric') {
            cacheWeather = await getCache('coordinates')
        } else {
            cacheWeather = await getCache('coordinates_imperial')
        }

        if (cacheWeather) {
            return res.status(200).json({
                data: cacheWeather,
                message: 'Weather fetched successfully',
                status: true,
            })
        }

        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}&units=${units}`
        const response = await axios.get(url)

        if (!cacheWeather && units === 'metric') {
            await setCache('coordinates', response.data)
        }

        if (!cacheWeather && units === 'imperial') {
            await setCache('coordinates_imperial', response.data)
        }

        return res.status(200).json({
            data: response.data,
            message: 'Weather fetched successfully',
            status: true,
        })
    } catch (error) {
        return res.status(401).json({ mmessage: error.message })
    }
})

exports.historyWeather = asyncHandler(async (req, res, next) => {
    // let cacheWeather
    const errors = validationResult(req.params)
    const { lat, lon, units, dt } = req.query
    try {
        if (!errors.isEmpty()) {
            const errorMessages = errors
                .array()
                .map((error) => error.msg)
                .join(', ')

            return next(new ErrorResponse(errorMessages, 400))
        }

        // if (units === 'metric') {
        //     cacheWeather = await getCache('history')
        // } else {
        //     cacheWeather = await getCache('history_imperial')
        // }

        // if (cacheWeather) {
        //     return res.status(200).json({
        //         data: cacheWeather,
        //         message: 'Weather fetched successfully',
        //         status: true,
        //     })
        // }
        const url = `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${dt}&appid=${process.env.WEATHER_API_KEY}&units=${units}&only_current={true}`

        const response = await axios.get(url)

        // if (!cacheWeather && units === 'metric') {
        //     await setCache('history', response.data)
        // }

        // if (!cacheWeather && units === 'imperial') {
        //     await setCache('history_imperial', response.data)
        // }

        return res.status(200).json({
            data: response.data,
            message: 'Weather fetched successfully',
            status: true,
        })
    } catch (error) {
        return res.status(401).json({ message: error.message })
    }
})

exports.geoLocating = asyncHandler(async (req, res, next) => {
    const errors = validationResult(req.params)
    const { city } = req.query

    try {
        if (!errors.isEmpty()) {
            const errorMessages = errors
                .array()
                .map((error) => error.msg)
                .join(', ')

            return next(new ErrorResponse(errorMessages, 400))
        }

        const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${process.env.WEATHER_API_KEY}`
        const response = await axios.get(url)

        return res.status(200).json({
            data: response.data,
            message: 'Location fetched successfully',
            status: true,
        })
    } catch (error) {
        return res.status(401).json({ message: error.message })
    }
})

exports.hourlyWeather = asyncHandler(async (req, res, next) => {
    const errors = validationResult(req.params)
    const { lat, lon, cnt } = req.query
    console.log(req.query)
    try {
        if (!errors.isEmpty()) {
            const errorMessages = errors
                .array()
                .map((error) => error.msg)
                .join(', ')

            return next(new ErrorResponse(errorMessages, 400))
        }
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}&units=metric&cnt=${cnt}`
        const response = await axios.get(url)

        return res.status(200).json({
            data: response.data,
            message: 'Location fetched successfully',
            status: true,
        })
    } catch (error) {
        return res.status(401).json({ message: error.message })
    }
})
