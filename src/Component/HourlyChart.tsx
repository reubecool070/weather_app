import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts'

function HourlyChart() {
    const data = [
        { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
        { name: 'Page B', uv: 300, pv: 2000, amt: 2000 },
    ]
    return (
        // Graph Card Section
        <div className="d-flex  align-items-center mt-15 mb-15">
            <div className="card-0 col-lg-12 col-md-12 graph-card">
                <div className="p-3">
                    <LineChart width={600} height={300} data={data}>
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="name" />
                        <YAxis />
                    </LineChart>
                </div>
            </div>
        </div>
    )
}

export default HourlyChart
