const types = {
    Fahrenheit: 'fahrenheit',
    Celsius: 'celsius',
    Kelvin: 'kelvin'
} as const;

declare type TemperatureUnit = keyof typeof types;

export default TemperatureUnit;