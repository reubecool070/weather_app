import sky from '../assets/images/clear_sky.jpg'
import rainy from '../assets/images/rainy.jpg'
import sunny from '../assets/images/sunny.jpg'
import cloud from '../assets/images/cloud.jpg'
import mist from '../assets/images/mist.jpg'
import snow from '../assets/images/snow.jpg'

export const weatherBackground = [
    { id: 1, name: ['Clear'], image: sky },
    { id: 2, name: ['Rain', 'Thunderstorm', 'Drizzle'], image: rainy },
    { id: 3, name: ['Sunny'], image: sunny },
    { id: 4, name: ['Clouds'], image: cloud },
    {
        id: 5,
        name: ['Mist', 'Smoke', 'Haze', 'Dust', 'Fog', 'Sand'],
        image: mist,
    },
    { id: 5, name: ['Snow'], image: snow },
]
