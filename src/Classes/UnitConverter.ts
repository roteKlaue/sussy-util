import { MutableObject, UnitType } from "../Types";

export default class UnitConverter {
    private static readonly KILOMETERS_PER_MILE = 1.60934;
    private static readonly FAHRENHEIT_TO_CELSIUS_OFFSET = 32;
    private static readonly KELVIN_TO_CELSIUS_OFFSET = 273.15;
    private static readonly FAHRENHEIT_TO_CELSIUS_FACTOR = 5 / 9;

    private static readonly map = {
        Celsius: {
            Kelvin: this.celsiusToKelvin,
            Fahrenheit: this.celsiusToFahrenheit,
        } as const,
        Fahrenheit: {
            Celsius: this.fahrenheitToCelsius,
            Kelvin: this.fahrenheitToKelvin
        } as const,
        Kelvin: {
            Celsius: this.kelvinToCelsius,
            Fahrenheit: this.kelvinToFahrenheit
        } as const,
        Miles: {
            Kilometers: this.milesToKilometers,
        },
        Kilometers: {
            Miles: this.kilometersToMiles,
        } as const
    } as MutableObject<MutableObject<(arg0: number) => number | undefined> | undefined>;

    /**
     * This function takes a number and adds 273.15 to it.
     * @param {number} val - number - The value to convert
     * @returns The value of the variable val plus the value of the constant KELVIN_TO_CELSIUS_OFFSET.
     */
    public static kelvinToCelsius(val: number) {
        return Number(val) + this.KELVIN_TO_CELSIUS_OFFSET;
    }

    /**
     * Convert a temperature in Celsius to Kelvin.
     * @param {number} val - number - The value to convert.
     * @returns The value of the argument minus 273.15
     */
    public static celsiusToKelvin(val: number) {
        return Number(val) - this.KELVIN_TO_CELSIUS_OFFSET;
    }

    /**
     * Convert a temperature in Fahrenheit to Kelvin by first converting it to Celsius and then to
     * Kelvin.
     * @param {number} val - number - The value to convert
     * @returns The value of the function call.
     */
    public static fahrenheitToKelvin(val: number): number {
        return this.celsiusToKelvin(this.fahrenheitToCelsius(val));
    }

    /**
     * Convert a temperature in Kelvin to Fahrenheit by first converting it to Celsius and then to
     * Fahrenheit.
     * @param {number} val - number - The value to convert
     * @returns The value of the function call.
     */
    public static kelvinToFahrenheit(val: number): number {
        return this.celsiusToFahrenheit(this.kelvinToCelsius(val));
    }

    /**
     * Convert kilometers to miles.
     * @param {number} kilometers - number
     * @returns The number of miles in the given number of kilometers.
     */
    public static kilometersToMiles(kilometers: number): number {
        return kilometers / this.KILOMETERS_PER_MILE;
    }

    /**
     * Converts miles to kilometers.
     * @param {number} miles - number - The number of miles to convert to kilometers.
     * @returns The number of kilometers per mile.
     */
    public static milesToKilometers(miles: number): number {
        return miles * this.KILOMETERS_PER_MILE;
    }

    /**
     * Convert a temperature in Celsius to Fahrenheit.
     * @param {number} celsius - number - The temperature in celsius
     * @returns The temperature in Fahrenheit.
     */
    public static celsiusToFahrenheit(celsius: number): number {
        return (celsius * 9 / 5) + this.FAHRENHEIT_TO_CELSIUS_OFFSET;
    }

    /**
     * Convert a temperature in Fahrenheit to Celsius.
     * @param {number} fahrenheit - number - The temperature in Fahrenheit
     * @returns The return value is the result of the calculation.
     */
    public static fahrenheitToCelsius(fahrenheit: number): number {
        return (fahrenheit - this.FAHRENHEIT_TO_CELSIUS_OFFSET) * this.FAHRENHEIT_TO_CELSIUS_FACTOR;
    }

    /**
     * If the conversion is not possible, throws an error, otherwise, returns the result of the
     * conversion.
     * 
     * @param {number} value - number - The value to convert
     * @param {UnitType} from - UnitType
     * @param {UnitType} to - UnitType - The unit type to convert to
     * @returns The return value is the result of the conversion
     */
    public static convert(value: number, from: UnitType, to: UnitType): number {
        // @ts-ignore this can not happen because the first check already checked for that case
        if (!this.map[from] || !this.map[from][to]) {
            throw new TypeError("Unknown conversion type.");
        }
        // @ts-ignore can not happen because the if statement before checks for it
        return this.map[from][to](value);
    }

    /**
     * Converts a speed from kilometers per hour to miles per hour.
     * @param {number} kmPerHour - The speed in kilometers per hour.
     * @returns {number} The speed in miles per hour.
     */
    public static kilometersPerHourToMilesPerHour(kmPerHour: number): number {
        return kmPerHour / this.KILOMETERS_PER_MILE;
    }

    /**
     * Converts a speed from miles per hour to kilometers per hour.
     * @param {number} mph - The speed in miles per hour.
     * @returns {number} The speed in kilometers per hour.
     */
    public static milesPerHourToKilometersPerHour(mph: number): number {
        return mph * this.KILOMETERS_PER_MILE;
    }

    /**
     * Converts a weight from kilograms to pounds.
     * @param {number} kilograms - The weight in kilograms.
     * @returns {number} The weight in pounds.
     */
    public static kilogramsToPounds(kilograms: number): number {
        return kilograms * 2.20462;
    }

    /**
     * Converts a weight from pounds to kilograms.
     * @param {number} pounds - The weight in pounds.
     * @returns {number} The weight in kilograms.
     */
    public static poundsToKilograms(pounds: number): number {
        return pounds / 2.20462;
    }
}