import React from 'react'

function CountryWise() {
    return (
        <div className="row d-flex justify-content-center">
            <div className="row card0">
                <div className="card1 col-lg-12 col-md-12">
                    <div className="row">
                        <div className="col-md-6">
                            <small>Other Location</small>
                            <div className="text-center">
                                <img
                                    className="image mt-5"
                                    alt=""
                                    src="https://i.imgur.com/M8VyA2h.png"
                                    // style={{ opacity: 0.5 }}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
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
