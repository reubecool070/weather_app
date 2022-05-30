import React from 'react'
import { EyeIcon, IconHumidity, Wind } from '../../assets/icons'
import { unitChecker } from '../../utils'

function TodayCard(props: any) {
    const { weather, todayDate, units } = props

    return (
        <div className="card-body p-4">
            <div className="d-flex justify-content-center">
                <h6>{todayDate}</h6>
            </div>
            <div className="d-flex flex-column text-center mt-2 mb-4">
                <span className="display-6">{weather?.name}</span>
                <h6 className="display-4 mb-0 font-weight-bold">
                    {unitChecker(weather?.main?.temp, units)}
                    <br />
                </h6>
                <span className="small">{weather?.weather[0]?.main}</span>
            </div>

            <div className="d-flex align-items-center">
                <div
                    className="flex-grow-1"
                    style={{
                        fontSize: '1rem',
                    }}
                >
                    <div>
                        <Wind />
                        <span className="ms-1">
                            {weather?.wind?.speed}
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
                        <IconHumidity />
                        <span className="ms-1">{weather?.main?.humidity}%</span>
                    </div>
                    <div>
                        <EyeIcon />
                        <span className="ms-1">
                            {`${Number(weather?.visibility) / 1000} km`}
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
    )
}

export default TodayCard
