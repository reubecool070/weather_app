const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const dotenv = require('dotenv')
const path = require('path')
const errorHandler = require('./middleware/error')
const useRedis = require('./controllers/redis.controller')
require('colors')

useRedis.connectToRedis()
// Load enviroment variables
dotenv.config({ path: './config/config.env' })

// Body parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Static files
app.use(express.static(path.join(__dirname, 'public')))

//Morgan for logging
app.use(morgan('dev'))
app.use(cors('*'))

// Routes
app.use('/api/v1', require('./routes/api.routes'))

// Error handling
app.use(errorHandler)

// Server configuration
const NODE_ENV = process.env.NODE_ENV || 'development'
const PORT = process.env.PORT || 8080

const server = app.listen(PORT, (err, res) => {
    console.log(
        `Server is running in ${NODE_ENV} mode on port ${PORT}`.inverse.green
    )
})

process.on('unhandledRejection', async (err) => {
    console.log(`Server closed due to unhandled rejection ${err}`.red)
    await server.close()
    process.exit()
})
