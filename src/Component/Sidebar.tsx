import React from 'react'
import moment from 'moment'
import sky from '../assets/images/clear_sky.jpg'
import rainy from '../assets/images/rainy.jpg'
import sunny from '../assets/images/sunny.jpg'
import ToggleSwitch from './toggle'

function Sidebar() {
    const todayDate = moment().format('dddd, LL | h:m')
    const weatherBackground = [
        { id: 1, name: 'Clear Sky', image: sky },
        { id: 1, name: 'Rainy Sky', image: rainy },
        { id: 1, name: 'Sunny Sky', image: sunny },
    ]

    const toggleActivityEnabled = (value: boolean) => {
        console.log(value)
    }
    return (
        <aside
            className="left-sidebar ishovered justify-content-center"
            style={{
                background: `url(${weatherBackground[1].image})`,
                backgroundSize: 'cover',
            }}
        >
            <nav className="sidebar-nav ">
                <div className="d-flex text-center text-white align-items-center ">
                    <h2 className="mt-3 display-4" style={{ fontWeight: 600 }}>
                        Today Weather
                    </h2>
                </div>
                <div
                    id="sidebarnav"
                    className="sidebar-content align-items-center justify-content-center"
                >
                    <section className="">
                        <div className="container py-5 h-100">
                            <div className="row d-flex h-100">
                                <div className="col-md-12 col-lg-12 col-xl-12">
                                    <div
                                        className="card shadow-5"
                                        style={{
                                            color: '#4B515D',
                                            borderRadius: '35px',
                                        }}
                                    >
                                        <div className="card-body p-4">
                                            <div className="d-flex justify-content-center">
                                                <h6>{todayDate}</h6>
                                            </div>
                                            <div className="d-flex flex-column text-center mt-2 mb-4">
                                                <span className="display-6">
                                                    Kathmandu
                                                </span>
                                                <h6
                                                    className="display-4 mb-0 font-weight-bold"
                                                    style={{
                                                        color: '#1C2331',
                                                    }}
                                                >
                                                    13°C
                                                    <br />
                                                </h6>
                                                <span
                                                    className="small"
                                                    style={{
                                                        color: '#868B94',
                                                    }}
                                                >
                                                    Stormy
                                                </span>
                                            </div>

                                            <div className="d-flex align-items-center">
                                                <div
                                                    className="flex-grow-1"
                                                    style={{
                                                        fontSize: '1rem',
                                                    }}
                                                >
                                                    <div>
                                                        <i
                                                            className="fas fa-wind fa-fw"
                                                            style={{
                                                                color: '#868B94',
                                                            }}
                                                        />
                                                        <span className="ms-1">
                                                            40 km/h
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <i
                                                            className="fas fa-tint fa-fw"
                                                            style={{
                                                                color: '#868B94',
                                                            }}
                                                        />
                                                        <span className="ms-1">
                                                            84%
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <i
                                                            className="fas fa-sun fa-fw"
                                                            style={{
                                                                color: '#868B94',
                                                            }}
                                                        />
                                                        <span className="ms-1">
                                                            0.2h
                                                        </span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <img
                                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp"
                                                        alt=""
                                                        width="100px"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3">
                                <div
                                    className="card text-center"
                                    style={{
                                        color: '#4B515D',
                                        borderRadius: '35px',
                                    }}
                                >
                                    <div
                                        className="card-body d-flex flex-row 
                                            justify-content-center align-items-center"
                                    >
                                        <span className="display-5 px-2">
                                            °C
                                        </span>
                                        <div className="px-2">
                                            <ToggleSwitch
                                                theme="graphite-small"
                                                className="d-flex"
                                                value={false}
                                                onStateChanged={(key) =>
                                                    toggleActivityEnabled(key)
                                                }
                                            />
                                        </div>

                                        <span className="display-5 px-2">
                                            °F
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </nav>
        </aside>
    )
}

export default Sidebar
