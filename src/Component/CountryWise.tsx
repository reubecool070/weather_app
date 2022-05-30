import React from 'react'
import Datetime from 'react-datetime'
import { IconCalendar } from '../assets/icons'
import CustomSelect from './Common/CustomSelect'

function CountryWise() {
    return (
        <div className="d-flex mt-15 align-items-center mb-15">
            <div className="card-1 col-lg-12 col-md-12">
                <div className="location-text">Other Location</div>
                <div className="d-flex flex-row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="flex-column px-3 py-3">
                            <div className="px-3">
                                <CustomSelect />
                            </div>
                            <div className="px-3 py-5">
                                <div className="date-time">
                                    {/* Select Date */}
                                    <div className="input-wrapper">
                                        <Datetime
                                            inputProps={{
                                                placeholder: 'Select date..',
                                            }}
                                            // onChange={(value) =>
                                            //     handleDateChange(value)
                                            // }
                                            // closeOnSelect
                                            // value={date}
                                        />
                                        <div className="input-icon">
                                            <IconCalendar />
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        className="btn btn-primary btn-sm"
                                    >
                                        Small button
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="d-flex justify-content-center">
                            <div className="flex-column px-3 mt-3 mb-3">
                                <h1 className="large-font mr-3">26&#176;</h1>
                                <div className="d-flex flex-column mr-3">
                                    <h2 className="mt-3 mb-0">London</h2>
                                    <small>10:36 - Tuesday, 22 Oct 19</small>
                                </div>
                                <div className="d-flex flex-column">
                                    <h3 className="fa fa-sun-o mt-4">
                                        Weather
                                    </h3>
                                    <small>Sunny</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountryWise
