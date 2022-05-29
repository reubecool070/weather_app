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

const delCache = async (key) => {
    const del = await clientInstance.del(key)
    if (del) {
        console.log(`${key} deleted from cache`)
    }
}

const flushAll = async () => {
    const flushed = await clientInstance.flushAll()
    if (flushed) {
        console.log('cache cleared')
    }
}

module.exports = {
    connectToRedis,
    setCache,
    getCache,
    flushAll,
    delCache,
}
