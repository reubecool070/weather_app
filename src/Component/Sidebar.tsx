import React, { useEffect } from 'react'
import moment from 'moment'
import { weatherBackground } from './weatherImages'
import ToggleSwitch from './toggle'
import { useAppDispatch, useAppSelector } from '../app/hook'
import getWeathers from '../app/features/weatherApi'
import { Wind } from '../assets/icons'

interface SidebarPropsI {
    coordinates: {
        latitude: number
        longitude: number
    } | null
}

function Sidebar(props: SidebarPropsI) {
    const { coordinates } = props
    const dispatch = useAppDispatch()
    const { weather } = useAppSelector((state) => state.weather)
    console.log(weather)

    useEffect(() => {
        if (coordinates) {
            dispatch(getWeathers(coordinates))
        }
    }, [coordinates])

    const todayDate = moment().format('dddd, LL | h:m')

    const toggleActivityEnabled = (value: boolean) => {
        console.log(value)
    }
    return (
        <aside
            className="left-sidebar ishovered justify-content-center"
            style={{
                background: `url(${
                    weatherBackground.find(
                        (item) =>
                            weather &&
                            item.name.includes(weather?.weather[0]?.main)
                    )?.image
                })`,
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
                                        {coordinates ? (
                                            <div className="card-body p-4">
                                                <div className="d-flex justify-content-center">
                                                    <h6>{todayDate}</h6>
                                                </div>
                                                <div className="d-flex flex-column text-center mt-2 mb-4">
                                                    <span className="display-6">
                                                        {weather?.name}
                                                    </span>
                                                    <h6
                                                        className="display-4 mb-0 font-weight-bold"
                                                        style={{
                                                            color: '#1C2331',
                                                        }}
                                                    >
                                                        {weather?.main.temp}{' '}
                                                        &deg;C
                                                        <br />
                                                    </h6>
                                                    <span
                                                        className="small"
                                                        style={{
                                                            color: '#868B94',
                                                        }}
                                                    >
                                                        {
                                                            weather?.weather[0]
                                                                ?.main
                                                        }
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
                                                                <Wind />
                                                                {
                                                                    weather
                                                                        ?.wind
                                                                        .speed
                                                                }
                                                                m/s
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
                                                                {
                                                                    weather
                                                                        ?.main
                                                                        .humidity
                                                                }
                                                                %
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
                                                                {`${
                                                                    Number(
                                                                        weather?.visibility
                                                                    ) / 1000
                                                                } km`}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <img
                                                            src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
                                                            alt=""
                                                            width="100px"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="card-body p-4">
                                                <span className="text-danger">
                                                    Failed to fetch address
                                                    information for your
                                                    geolocation. Please search
                                                    for any city to get weather
                                                    forecast!!
                                                </span>
                                            </div>
                                        )}
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
