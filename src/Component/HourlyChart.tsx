import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts'

function HourlyChart() {
    const data = [
        { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
        { name: 'Page B', uv: 300, pv: 2000, amt: 2000 },
    ]
    return (
        <div className="row d-flex justify-content-center align-items-center">
            <div className="row card h-100">
                <div className="py-5">
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
