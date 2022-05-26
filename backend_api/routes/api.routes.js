const express = require('express')
const { weather } = require('../controllers/weather')

const router = express.Router()

router.route('/weather').get(weather)

module.exports = router
