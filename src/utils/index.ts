export const unitChecker = (value: number, unit: string) => {
    switch (unit) {
        case 'imperial':
            return `${((value * 9) / 5 + 32).toFixed(1)}°F`

        default:
            return `${value}°C`
    }
}
