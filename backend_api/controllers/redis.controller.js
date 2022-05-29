const redis = require('redis')

let clientInstance = ''

const connectToRedis = async () => {
    try {
        const client = redis.createClient()
        client.on('error', (err) => console.log('Redis Client Error', err))

        await client.connect()
        console.log('Connected to Redis')

        clientInstance = client
    } catch (error) {
        console.log(`Error connecting to Redis ${error}`)
    }
}

const setCache = async (key, value) => {
    await clientInstance.set(key, JSON.stringify(value))
}

const getCache = async (key) => {
    const cache = await clientInstance.get(key)
    return JSON.parse(cache)
}

module.exports = {
    connectToRedis,
    setCache,
    getCache,
}
