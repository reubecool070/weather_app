import React, { useEffect } from 'react'
import moment from 'moment'
import { weatherBackground } from './weatherImages'
import ToggleSwitch from './toggle'
import { useAppDispatch, useAppSelector } from '../app/hook'
import getWeathers from '../app/features/weather/weatherApi'
import { Wind } from '../assets/icons'
import { changemetric } from '../app/features/unit/unitSlice'
import { CoordinatesTypes } from './types'
import TodayCard from './Common/TodayCard'

function Sidebar(props: CoordinatesTypes) {
    const { lat, lon } = props
    const dispatch = useAppDispatch()
    const { weather } = useAppSelector((state) => state.weather)
    const { units } = useAppSelector((state) => state.units)
    useEffect(() => {
        if (lat && lon) {
            dispatch(getWeathers({ lat, lon, units }))
        }
    }, [lat, lon])

    const todayDate = moment().format('dddd, LL | h:m')

    const toggleActivityEnabled = () => {
        dispatch(changemetric())
    }

    return (
        <aside
            className="left-sidebar ishovered justify-content-center"
            style={{
                backgroundImage: weather?.weather?.length
                    ? `url(${
                          weatherBackground.find((item) =>
                              item.name.includes(weather?.weather[0]?.main)
                          )?.image
                      })`
                    : '',
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
                                    <div className="card text-white custom-card  shadow-5">
                                        {lat && lon ? (
                                            <TodayCard
                                                weather={weather}
                                                todayDate={todayDate}
                                                units={units}
                                            />
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
                                <div className="card custom-card text-white text-center">
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
                                                onStateChanged={() =>
                                                    toggleActivityEnabled()
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
