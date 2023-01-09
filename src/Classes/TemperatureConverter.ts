import { TemperatureUnits } from "../Types/";
import AbstractClass from "./AbstractClass";

export default class T extends AbstractClass {
    constructor() {
        super(T);
    }

    public static kelvinToCelsius(val: number) {
        return Number(val) + 273.15;
    }

    public static celsiusToKelvin(val: number) {
        return Number(val) - 273.15;
    }

    public static fahrenheitToCelsius = (val: number): number => (Number(val) - 32) * 5 / 9;

    public static convert(value: number, type: TemperatureUnits, to: TemperatureUnits): number {
        return 0;
    }
}