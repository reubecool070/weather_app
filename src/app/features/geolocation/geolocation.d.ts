export interface locationPayload {
    city: string
}

export interface InitialStatePropsI {
    loading: boolean
    geoLocation: locationDataState | null
    message: string
}

export interface locationDataState {
    name: string
    local_names: any
    lat: number
    lon: number
    country: string
    state: string
}
