export interface historyState {
    lat: number
    lon: number
    timezone: string
    timezone_offset: number
    current: {
        dt: number
        sunrise: number
        sunset: number
        temp: number
        feels_like: number
        pressure: number
        humidity: number
        dew_point: number
        uvi: number
        clouds: number
        visibility: number
        wind_speed: number
        wind_deg: number
        weather: [
            {
                id: number
                main: string
                description: string
                icon: string
            }
        ]
    }
}

export interface historyPayloadState {
    lat: number
    lon: number
    units: string
    dt: number
}

export interface InitialStatePropsI {
    loading: boolean
    history: historyState | null
    message: string
}
