import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Component/Header'
import Sidebar from './Component/Sidebar'
import './assets/css/styles.css'
import Search from './Component/Search'
import CountryWise from './Component/CountryWise'
import HourlyChart from './Component/HourlyChart'
import './assets/css/custom.css'

function App() {
    return (
        <div id="main-wrapper">
            <Sidebar />
            <div className="right-bar">
                <Search />
                <CountryWise />
                <HourlyChart />
            </div>
        </div>
    )
}

export default App
