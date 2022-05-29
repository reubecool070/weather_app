const express = require('express')
const {
    historyWeather,
    weatherByCoordinates,
} = require('../controllers/weather')

const router = express.Router()

router.route('/weather').get(weatherByCoordinates)
router.route('/historyWeather').get(historyWeather)

module.exports = router
