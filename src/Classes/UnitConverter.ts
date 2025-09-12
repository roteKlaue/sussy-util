import { MutableObject, LengthType, TemperatureType, SpeedType } from '../Types';

export default class UnitConverter {
  private static readonly KILOMETERS_PER_MILE = 1.60934;
  private static readonly FAHRENHEIT_TO_CELSIUS_OFFSET = 32;
  private static readonly KELVIN_TO_CELSIUS_OFFSET = 273.15;
  private static readonly FAHRENHEIT_TO_CELSIUS_FACTOR = 5 / 9;
  private static readonly POUNDS_TO_KILOGRAMS = 2.20462;

  private static readonly TEMPERATURE_MAP = {
    Celsius: {
      Kelvin: this.celsiusToKelvin,
      Fahrenheit: this.celsiusToFahrenheit,
      Rankine: this.celsiusToRankine,
      Delisle: this.celsiusToDelisle,
    } as const,
    Fahrenheit: {
      Celsius: this.fahrenheitToCelsius,
      Kelvin: this.fahrenheitToKelvin,
      Rankine: this.fahrenheitToRankine,
      Delisle: this.fahrenheitToDelisle,
    } as const,
    Kelvin: {
      Celsius: this.kelvinToCelsius,
      Fahrenheit: this.kelvinToFahrenheit,
      Rankine: this.kelvinToRankine,
      Delisle: this.kelvinToDelisle,
    } as const,
    Rankine: {
      Celsius: this.rankineToCelsius,
      Fahrenheit: this.rankineToFahrenheit,
      Kelvin: this.rankineToKelvin,
      Delisle: this.rankineToDelisle,
    } as const,
    Delisle: {
      Celsius: this.delisleToCelsius,
      Fahrenheit: this.delisleToFahrenheit,
      Kelvin: this.delisleToKelvin,
      Rankine: this.delisleToRankine,
    } as const,
  } as MutableObject<MutableObject<((arg0: number) => number) | undefined> | undefined>;

  private static readonly LENGTH_MAP = {
    Miles: {
      Kilometers: this.milesToKilometers,
      Yards: this.milesToYards,
      Feet: this.milesToFeet,
    },
    Kilometers: {
      Miles: this.kilometersToMiles,
      Yards: this.kilometersToYards,
      Feet: this.kilometersToFeet,
    } as const,
    Yards: {
      Miles: this.yardsToMiles,
      Kilometers: this.yardsToKilometers,
      Feet: this.yardsToFeet,
    } as const,
    Feet: {
      Miles: this.feetToMiles,
      Kilometers: this.feetToKilometers,
      Yards: this.feetToYards,
    } as const,
  } as MutableObject<MutableObject<((arg0: number) => number) | undefined> | undefined>;

  private static readonly SPEED_MAP = {
    KilometersPerHour: {
      MilesPerHour: this.kilometersPerHourToMilesPerHour,
    },
    MilesPerHour: {
      KilometersPerHour: this.milesPerHourToKilometersPerHour,
    } as const,
  } as MutableObject<MutableObject<((arg0: number) => number) | undefined> | undefined>;

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
   * Convert a temperature in Celsius to Rankine.
   * @param {number} val - The value to convert.
   * @returns The value of the argument multiplied by 9/5.
   */
  public static celsiusToRankine(val: number): number {
    return val * (9 / 5);
  }

  /**
   * Convert a temperature in Celsius to Delisle.
   * @param {number} val - The value to convert.
   * @returns The value of the argument multiplied by -3/2 and added to 100.
   */
  public static celsiusToDelisle(val: number): number {
    return (val * -3) / 2 + 100;
  }

  /**
   * Convert a temperature in Fahrenheit to Rankine.
   * @param {number} val - The value to convert.
   * @returns The value of the argument plus 459.67.
   */
  public static fahrenheitToRankine(val: number): number {
    return val + 459.67;
  }

  /**
   * Convert a temperature in Fahrenheit to Delisle.
   * @param {number} val - The value to convert.
   * @returns The value of the argument multiplied by -3/2 and added to 212.
   */
  public static fahrenheitToDelisle(val: number): number {
    return (val * -3) / 2 + 212;
  }

  /**
   * Convert a temperature in Kelvin to Rankine.
   * @param {number} val - The value to convert.
   * @returns The value of the argument multiplied by 9/5.
   */
  public static kelvinToRankine(val: number): number {
    return val * (9 / 5);
  }

  /**
   * Convert a temperature in Kelvin to Delisle.
   * @param {number} val - The value to convert.
   * @returns The value of the argument minus 273.15, multiplied by -3/2, and added to 373.15.
   */
  public static kelvinToDelisle(val: number): number {
    return ((val - 273.15) * -3) / 2 + 373.15;
  }

  /**
   * Convert a temperature in Rankine to Celsius.
   * @param {number} val - The value to convert.
   * @returns The value of the argument minus 459.67.
   */
  public static rankineToCelsius(val: number): number {
    return val - 459.67;
  }

  /**
   * Convert a temperature in Rankine to Fahrenheit.
   * @param {number} val - The value to convert.
   * @returns The value of the argument minus 459.67.
   */
  public static rankineToFahrenheit(val: number): number {
    return val - 459.67;
  }

  /**
   * Convert a temperature in Rankine to Kelvin.
   * @param {number} val - The value to convert.
   * @returns The value of the argument divided by 1.8.
   */
  public static rankineToKelvin(val: number): number {
    return val / 1.8;
  }

  /**
   * Convert a temperature in Rankine to Delisle.
   * @param {number} val - The value to convert.
   * @returns The value of the argument minus 491.67, multiplied by -3/2, and added to 100.
   */
  public static rankineToDelisle(val: number): number {
    return ((val - 491.67) * -3) / 2 + 100;
  }

  /**
   * Convert a temperature in Delisle to Celsius.
   * @param {number} val - The value to convert.
   * @returns The value of the argument minus 100, multiplied by -2/3.
   */
  public static delisleToCelsius(val: number): number {
    return ((val - 100) * -2) / 3;
  }

  /**
   * Convert a temperature in Delisle to Fahrenheit.
   * @param {number} val - The value to convert.
   * @returns The value of the argument minus 100, multiplied by -2/3, and added to 212.
   */
  public static delisleToFahrenheit(val: number): number {
    return ((val - 100) * -2) / 3 + 212;
  }

  /**
   * Convert a temperature in Delisle to Kelvin.
   * @param {number} val - The value to convert.
   * @returns The value of the argument minus 100, multiplied by -2/3, and added to 373.15.
   */
  public static delisleToKelvin(val: number): number {
    return ((val - 100) * -2) / 3 + 373.15;
  }

  /**
   * Convert a temperature in Delisle to Rankine.
   * @param {number} val - The value to convert.
   * @returns The value of the argument minus 100, multiplied by -2/3, and added to 491.67.
   */
  public static delisleToRankine(val: number): number {
    return ((val - 100) * -2) / 3 + 491.67;
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
    return (celsius * 9) / 5 + this.FAHRENHEIT_TO_CELSIUS_OFFSET;
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
   * Convert a length in Yards to Miles.
   * @param {number} val - The value to convert.
   * @returns The value of the argument divided by 1760.
   */
  public static yardsToMiles(val: number): number {
    return val / 1760;
  }

  /**
   * Convert a length in Yards to Kilometers.
   * @param {number} val - The value to convert.
   * @returns The value of the argument multiplied by 0.0009144.
   */
  public static yardsToKilometers(val: number): number {
    return val * 0.0009144;
  }

  /**
   * Convert a length in Yards to Feet.
   * @param {number} val - The value to convert.
   * @returns The value of the argument multiplied by 3.
   */
  public static yardsToFeet(val: number): number {
    return val * 3;
  }

  /**
   * Convert a length in Feet to Miles.
   * @param {number} val - The value to convert.
   * @returns The value of the argument divided by 5280.
   */
  public static feetToMiles(val: number): number {
    return val / 5280;
  }

  /**
   * Convert a length in Feet to Kilometers.
   * @param {number} val - The value to convert.
   * @returns The value of the argument multiplied by 0.0003048.
   */
  public static feetToKilometers(val: number): number {
    return val * 0.0003048;
  }

  /**
   * Convert a length in Feet to Yards.
   * @param {number} val - The value to convert.
   * @returns The value of the argument divided by 3.
   */
  public static feetToYards(val: number): number {
    return val / 3;
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
  public static convertLenght(value: number, from: LengthType, to: LengthType): number {
    if (!this.LENGTH_MAP[from] || !this.LENGTH_MAP[from][to]) {
      throw new TypeError('Unknown conversion type.');
    }
    return this.LENGTH_MAP[from][to](value);
  }

  /**
   * Convert a length in Kilometers to Yards.
   * @param {number} val - The value to convert.
   * @returns The value of the argument multiplied by 1094.
   */
  public static kilometersToYards(val: number): number {
    return val * 1094;
  }

  /**
   * Convert a length in Kilometers to Feet.
   * @param {number} val - The value to convert.
   * @returns The value of the argument multiplied by 3281.
   */
  public static kilometersToFeet(val: number): number {
    return val * 3281;
  }

  /**
   * Convert a length in Miles to Yards.
   * @param {number} val - The value to convert.
   * @returns The value of the argument multiplied by 1760.
   */
  public static milesToYards(val: number): number {
    return val * 1760;
  }

  /**
   * Convert a length in Miles to Feet.
   * @param {number} val - The value to convert.
   * @returns The value of the argument multiplied by 5280.
   */
  public static milesToFeet(val: number): number {
    return val * 5280;
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
  public static convertTemperature(
    value: number,
    from: TemperatureType,
    to: TemperatureType,
  ): number {
    if (!this.TEMPERATURE_MAP[from] || !this.TEMPERATURE_MAP[from][to]) {
      throw new TypeError('Unknown conversion type.');
    }
    return this.TEMPERATURE_MAP[from][to](value);
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
  public static convertSpeed(value: number, from: SpeedType, to: SpeedType): number {
    if (!this.SPEED_MAP[from] || !this.SPEED_MAP[from][to]) {
      throw new Error(`Conversion from ${from} to ${to} is not supported.`);
    }
    return this.SPEED_MAP[from][to](value);
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
    return kilograms * this.POUNDS_TO_KILOGRAMS;
  }

  /**
   * Converts a weight from pounds to kilograms.
   * @param {number} pounds - The weight in pounds.
   * @returns {number} The weight in kilograms.
   */
  public static poundsToKilograms(pounds: number): number {
    return pounds / this.POUNDS_TO_KILOGRAMS;
  }
}
