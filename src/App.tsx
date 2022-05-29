import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Component/Header'
import Sidebar from './Component/Sidebar'
import './assets/css/styles.css'
import Search from './Component/Search'
import CountryWise from './Component/CountryWise'
import HourlyChart from './Component/HourlyChart'
import './assets/css/custom.css'
import { useAppDispatch } from './app/hook'
import getWeathers from './app/features/weatherApi'
import { WeatherPayloadState } from './app/features/weather'

function App() {
    const [coordinates, setCoordinates] = useState<WeatherPayloadState | null>(
        null
    )
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (navigator.geolocation) {
            console.log('called')
            navigator.geolocation.getCurrentPosition((position) => {
                setCoordinates({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                })
            })
        }
    }, [])

    return (
        <div id="main-wrapper">
            <Sidebar coordinates={coordinates} />
            <div className="right-bar">
                <Search />
                <CountryWise />
                <HourlyChart />
            </div>
        </div>
    )
}

export default App
