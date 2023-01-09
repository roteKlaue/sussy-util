import { MutableObject, TemperatureUnits } from "../Types/";
import AbstractClass from "./AbstractClass";

export default class T extends AbstractClass {
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
        }
    } as MutableObject<MutableObject<Function>>;

    constructor() {
        super(T);
    }

    public static kelvinToCelsius(val: number) {
        return Number(val) + 273.15;
    }

    public static celsiusToKelvin(val: number) {
        return Number(val) - 273.15;
    }

    public static fahrenheitToCelsius(val: number): number {
        return (Number(val) - 32) * 5 / 9;
    }

    public static fahrenheitToKelvin(val: number): number {
        return this.celsiusToKelvin(this.fahrenheitToCelsius(val));
    }

    public static celsiusToFahrenheit(val: number): number {
        return (Number(val) * 9 / 5) + 32;
    }

    public static kelvinToFahrenheit(val: number): number {
        return this.celsiusToFahrenheit(this.kelvinToCelsius(val));
    }

    public static convert(value: number, type: TemperatureUnits, to: TemperatureUnits): number {
        return this.map[type][to](value);
    }
}