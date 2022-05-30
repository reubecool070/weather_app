export interface CoordinatesTypes {
    lat: number | undefined
    lon: number | undefined
}

export interface AsyncPropsI {
    options: any
    onChange: (value: any) => void
    placeholder: string
}

export interface SelectPropsI {
    onChange: (value: any) => void
    options: OptionsOrGroups<any, GroupBase<any>> | undefined
    value: any
}
