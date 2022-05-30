const express = require('express')
const {
    historyWeather,
    weatherByCoordinates,
    geoLocating,
    hourlyWeather,
} = require('../controllers/weather')

const router = express.Router()

router.route('/weather').get(weatherByCoordinates)
router.route('/historyWeather').get(historyWeather)
router.route('/geolocating').get(geoLocating)
router.route('/forecast').get(hourlyWeather)

module.exports = router
