import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { CartesianGrid, XAxis, YAxis, Tooltip, AreaChart, Area } from 'recharts'
import getHourlyForecast from '../app/features/forecast/forecastApi'
import { useAppDispatch, useAppSelector } from '../app/hook'
import { hour } from '../data'
import { unitConversion } from '../utils'
import { CustomSelect } from './Common/CustomSelect'
import { CoordinatesTypes } from './types'

function HourlyChart(props: CoordinatesTypes) {
    const { lat, lon } = props
    const dispatch = useAppDispatch()
    const { forecast } = useAppSelector((state) => state.forecast)
    const { units } = useAppSelector((state) => state.units)
    const [castHour, setCastHour] = useState(hour[2])

    useEffect(() => {
        if (lat && lon) {
            dispatch(
                getHourlyForecast({
                    lat,
                    lon,
                    cnt: 24,
                })
            )
        }
    }, [lat, lon])

    const chart = forecast?.list.map((item) => {
        return {
            weather: item.weather[0].main,
            temp: unitConversion(item.main.temp, units),
            time: `${moment(item.dt * 1000).format('h:m')}pm`,
        }
    })

    const handleHourChange = (inputValue: any) => {
        setCastHour(inputValue)
        if (lat && lon) {
            dispatch(
                getHourlyForecast({
                    lat,
                    lon,
                    cnt: inputValue.value,
                })
            )
        }
    }

    return (
        // Graph Card Section
        <div className="d-flex  align-items-center mt-15 mb-15">
            <div className="card-0 col-lg-12 col-md-12 graph-card">
                <div className="p-3 gap-3 d-flex justify-content-end align-items-center">
                    <span> In hours</span>
                    <CustomSelect
                        options={hour}
                        value={castHour}
                        onChange={handleHourChange}
                    />
                </div>
                <div className="p-3">
                    <AreaChart
                        width={1400}
                        height={300}
                        maxBarSize={1400}
                        data={chart}
                        margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
                        style={{ margin: 'auto' }}
                    >
                        <defs>
                            <linearGradient
                                id="colorUv"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="5%"
                                    stopColor="#8884d8"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="#8884d8"
                                    stopOpacity={0}
                                />
                            </linearGradient>
                            <linearGradient
                                id="colorPv"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="5%"
                                    stopColor="#82ca9d"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="#82ca9d"
                                    stopOpacity={0}
                                />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="time" />
                        <YAxis
                            dataKey="temp"
                            label={{
                                value: `Temp in ${
                                    units === 'metric' ? '°C' : '°F'
                                }`,
                                angle: -90,
                                position: 'insideLeft',
                                offset: 7,
                            }}
                        ></YAxis>
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area
                            type="monotone"
                            dataKey="temp"
                            stroke="#8884d8"
                            fillOpacity={1}
                            fill="url(#colorUv)"
                        />
                        <Area
                            type="monotone"
                            dataKey="weather"
                            stroke="#82ca9d"
                            fillOpacity={1}
                            fill="url(#colorPv)"
                        />
                    </AreaChart>
                </div>
            </div>
        </div>
    )
}

export default HourlyChart
