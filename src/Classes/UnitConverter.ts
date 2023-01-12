import { MutableObject, UnitType } from "../Types";
import AbstractClass from "./AbstractClass";

export default class UnitConverter extends AbstractClass {
    private static readonly KILOMETERS_PER_MILE = 1.60934;
    private static readonly FAHRENHEIT_TO_CELSIUS_OFFSET = 32;
    private static readonly KELVIN_TO_CELSIUS_OFFSET = 273.15;
    private static readonly FAHRENHEIT_TO_CELSIUS_FACTOR = 5 / 9;

    private static readonly map = {
        Celsius: {
            Kelvin: this.celsiusToKelvin,
            Fahrenheit: this.celsiusToFahrenheit,
        },
        Fahrenheit: {
            Celsius: this.fahrenheitToCelsius,
            Kelvin: this.fahrenheitToKelvin
        },
        Kelvin: {
            Celsius: this.kelvinToCelsius,
            Fahrenheit: this.kelvinToFahrenheit
        },
        Miles: {
            Kilometers: this.milesToKilometers,
        },
        Kilometers: {
            Miles: this.kilometersToMiles,
        }
    } as MutableObject<MutableObject<Function | undefined> | undefined>;

    constructor() {
        super(UnitConverter);
    }

    public static kelvinToCelsius(val: number) {
        return Number(val) + this.KELVIN_TO_CELSIUS_OFFSET;
    }

    public static celsiusToKelvin(val: number) {
        return Number(val) - this.KELVIN_TO_CELSIUS_OFFSET;
    }

    public static fahrenheitToKelvin(val: number): number {
        return this.celsiusToKelvin(this.fahrenheitToCelsius(val));
    }

    public static kelvinToFahrenheit(val: number): number {
        return this.celsiusToFahrenheit(this.kelvinToCelsius(val));
    }

    public static kilometersToMiles(kilometers: number): number {
        return kilometers / this.KILOMETERS_PER_MILE;
    }

    public static milesToKilometers(miles: number): number {
        return miles * this.KILOMETERS_PER_MILE;
    }

    public static celsiusToFahrenheit(celsius: number): number {
        return (celsius * 9 / 5) + this.FAHRENHEIT_TO_CELSIUS_OFFSET;
    }

    public static fahrenheitToCelsius(fahrenheit: number): number {
        return (fahrenheit - this.FAHRENHEIT_TO_CELSIUS_OFFSET) * this.FAHRENHEIT_TO_CELSIUS_FACTOR;
    }

    public static convert(value: number, from: UnitType, to: UnitType): number {
        // @ts-ignore this can not happen because the first check already checked for that case
        if(!this.map[from] || !this.map[from][to]) {
            throw new TypeError("Known conversion type.");
        }
        // @ts-ignore can not happen because the if statement before checks for it
        return this.map[from][to](value);
    }
}