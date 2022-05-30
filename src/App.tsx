import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from './Component/Sidebar'
import './assets/css/styles.css'
import CountryWise from './Component/CountryWise'
import HourlyChart from './Component/HourlyChart'
import './assets/css/custom.css'
import Header from './Component/Header'

interface CoordinatesTypes {
    lat: number
    lon: number
}

function App() {
    const [coordinates, setCoordinates] = useState<CoordinatesTypes | null>(
        null
    )

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setCoordinates({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude,
                })
            })
        }
    }, [])

    return (
        <div id="main-wrapper">
            <Sidebar lat={coordinates?.lat} lon={coordinates?.lon} />
            <div className="right-bar">
                <Header />
                <CountryWise lat={coordinates?.lat} lon={coordinates?.lon} />
                <HourlyChart lat={coordinates?.lat} lon={coordinates?.lon} />
            </div>
        </div>
    )
}

export default App
