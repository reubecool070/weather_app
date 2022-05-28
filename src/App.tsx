import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Component/Header'
import Sidebar from './Component/Sidebar'
import './assets/css/styles.css'

function App() {
    return (
        <div id="main-wrapper">
            <Header />
            <Sidebar />
            Weather page
        </div>
    )
}

export default App
