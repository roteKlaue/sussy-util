export const TEMPERATURE_TYPES = {
    Fahrenheit: 'fahrenheit',
    Celsius: 'celsius',
    Kelvin: 'kelvin',
    Rankine: 'rankine',
    Delisle: 'delisle'
} as const;

export const LENGTH_TYPES = {
    Miles: "miles",
    Kilometers: "kilometers",
    Yards: "yards",
    Feet: "feet"
} as const;

export const SPEED_TYPES = {
    KilometersPerHour: 'kilometersPerHour',
    MilesPerHour: 'milesPerHour'
} as const;

export declare type SpeedType = keyof typeof SPEED_TYPES;
export declare type LengthType = keyof typeof LENGTH_TYPES;
export declare type TemperatureType = keyof typeof TEMPERATURE_TYPES;