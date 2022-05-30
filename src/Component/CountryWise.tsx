import { debounce } from 'lodash'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import Datetime from 'react-datetime'
import { locationDataState } from '../app/features/geolocation/geolocation'
import getLocation from '../app/features/geolocation/geolocationApi'
import getHistoryWeather from '../app/features/history/historyApi'
import { useAppDispatch, useAppSelector } from '../app/hook'
import { IconCalendar } from '../assets/icons'
import Loader from '../assets/icons/loader'
import { unitChecker } from '../utils'
import { CustomAsyncSelect } from './Common/CustomSelect'
import { CoordinatesTypes } from './types'
import { weatherBackground } from './weatherImages'

function CountryWise(props: CoordinatesTypes) {
    const dispatch = useAppDispatch()
    const { lat, lon } = props
    const { history, loading } = useAppSelector((state) => state.history)
    const { units } = useAppSelector((state) => state.units)

    const [coordinates, setCoordinates] = useState<{
        lat: number
        lon: number
    }>()
    const [errorMessage, setErrorMessage] = useState('')

    const [date, setDate] = useState(moment())

    useEffect(() => {
        if (lat && lon) {
            const payload = {
                dt: Math.floor(new Date().getTime() / 1000),
                lat,
                lon,
                units,
            }
            dispatch(getHistoryWeather(payload))
        }
    }, [lat, lon])

    const promiseOptions = async (inputValue: string, callback: any) => {
        const res = await new Promise<any>((resolve) => {
            const response = getLocation({ city: inputValue })
            resolve(dispatch(response))
        })
        const {
            payload: { data },
        } = res
        const response = data.map((item: locationDataState) => ({
            value: { lat: item.lat, lon: item.lon },
            label: item.name,
        }))
        callback(response)
    }

    const getData = (inputValue: string, callback: any) => {
        loadSuggestions(inputValue, callback)
    }
    const loadSuggestions = debounce(promiseOptions, 1000)

    const handleCityChange = (e: any) => {
        setCoordinates(e.value)
        setErrorMessage('')
    }

    const handleDateChange = (value: any) => {
        setDate(value)
    }

    const handleSubmit = () => {
        const formattedDate = moment(date).format()
        if (formattedDate && coordinates) {
            const payload = {
                dt: Math.floor(new Date(formattedDate).getTime() / 1000),
                lat: coordinates.lat,
                lon: coordinates.lon,
                units,
            }

            dispatch(getHistoryWeather(payload))
        } else {
            setErrorMessage('Location cannot be blank')
        }
    }

    return (
        <div className="d-flex mt-15 align-items-center mb-15">
            <div
                className="card-1 col-lg-12 col-md-12"
                style={{
                    backgroundImage: history?.current?.weather?.length
                        ? `url(${
                              weatherBackground.find((item) =>
                                  item.name.includes(
                                      history.current?.weather[0]?.main
                                  )
                              )?.image
                          })`
                        : '',
                    backgroundSize: 'cover',
                }}
            >
                <div className="d-flex flex-row align-items-center justify-content-center">
                    <div className="col-lg-6 col-md-6 ">
                        <div className="d-grid flex-column gap-4 px-4 py-4">
                            <CustomAsyncSelect
                                placeholder="Search Location..."
                                options={getData}
                                onChange={handleCityChange}
                            />

                            <div className="date-time">
                                {/* Select Date */}
                                <div className="input-wrapper">
                                    <Datetime
                                        inputProps={{
                                            placeholder: 'Select date..',
                                        }}
                                        onChange={(value) =>
                                            handleDateChange(value)
                                        }
                                        closeOnSelect
                                        value={date}
                                    />
                                    <div className="input-icon">
                                        <IconCalendar />
                                    </div>
                                </div>
                            </div>
                            <div className="d-grid">
                                <button
                                    className="btn btn-primary"
                                    type="button"
                                    onClick={() => handleSubmit()}
                                >
                                    Search
                                </button>
                            </div>

                            <span className="text-danger">{errorMessage}</span>
                        </div>
                    </div>
                    {history ? (
                        <div className="col-lg-6 col-md-6 card custom-card  text-white">
                            <div className="d-flex justify-content-center">
                                <div className="flex-column px-3 mt-3 mb-3">
                                    <h1 className="large-font mr-3">
                                        {history &&
                                            unitChecker(
                                                history?.current.temp,
                                                units
                                            )}
                                    </h1>
                                    <div className="d-flex flex-column mr-3">
                                        <h2 className="mt-3 mb-0">
                                            {history?.timezone}
                                        </h2>
                                        <small>
                                            {history?.current.dt
                                                ? moment(
                                                      Number(
                                                          history?.current.dt
                                                      ) * 1000
                                                  ).format('LLLL')
                                                : ''}
                                        </small>
                                    </div>

                                    <div className="d-flex flex-row  mt-4 align-items-center gap-3">
                                        <h3 className="fa fa-sun-o">
                                            Weather :
                                        </h3>
                                        <span>
                                            {history?.current.weather[0]?.main}
                                        </span>
                                        <div>
                                            <img
                                                src={`http://openweathermap.org/img/wn/${history?.current.weather[0].icon}@2x.png`}
                                                alt=""
                                                width="100px"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : loading ? (
                        <Loader />
                    ) : null}
                </div>
            </div>
        </div>
    )
}

export default CountryWise
