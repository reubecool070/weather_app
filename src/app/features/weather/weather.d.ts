export interface WeatherPayloadState {
    lat: number
    lon: number
    units: string
}

export interface InitialStatePropsI {
    loading: boolean
    weather: WeatherDataState | null
    message: string
}

export interface WeatherDataState {
    coord: {
        lon: number
        lat: number
    }
    weather: [
        {
            id: number
            main: string
            description: string
            icon: string
        }
    ]
    base: string
    main: {
        temp: number
        feels_like: number
        temp_min: number
        temp_max: number
        pressure: number
        humidity: number
    }
    visibility: number
    wind: {
        speed: number
        deg: number
    }
    clouds: {
        all: number
    }
    dt: number
    sys: {
        type: number
        id: number
        country: 'NP'
        sunrise: number
        sunset: number
    }
    timezone: number
    id: number
    name: string
    cod: number
}
