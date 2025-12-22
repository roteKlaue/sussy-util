import { BetterMath, IsSomething } from '.';
import { MutableObject } from '../Types';
import crypto from 'node:crypto';

class Random {
  readonly defaultCharset: string =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  private static instance: Random = new Random();
  private constructor() {}

  /**
   * It returns a random integer between the lower and upper bounds, inclusive.
   *
   * min <= n < max
   * @param [lower=0] - The lowest number that can be returned.
   * @param [upper=10] - The upper bound of the random number.
   * @returns A random integer between the lower and upper bounds.
   */
  public randomInt(lower = 0, upper = 10) {
    lower = Math.floor(lower);
    upper = Math.ceil(upper);
    return crypto.randomInt(lower, upper);
  }

  /**
   * Generates a random double (floating-point) number within a specified range.
   * @param {number} lower - The lower bound of the random number.
   * @param {number} upper - The upper bound of the random number.
   * @returns {number} A random double within the specified range.
   */
  public randomDouble(lower: number, upper: number): number {
    const digits = Math.max(
      BetterMath.countDecimalDigits(lower),
      BetterMath.countDecimalDigits(upper),
    );
    const multiplier = Math.pow(10, digits);
    return this.randomInt(lower * multiplier, upper * multiplier) / multiplier;
  }

  /**
   * Returns a random character from a given string or the default charset.
   *
   * @param {string} [charset] - The character set to use. Defaults to the default charset.
   * @returns {string} A random character from the charset.
   */
  public randomChar(charset: string = this.defaultCharset): string {
    return charset.charAt(this.randomInt(0, charset.length));
  }

  /**
   * Generates a random string of specified length from a given charset or the default charset.
   *
   * @param {number} [length=10] - The length of the string to be generated.
   * @param {string} [charset] - The characters to use when generating the string. Defaults to the default charset.
   * @returns {string} A string of random characters.
   */
  public randomString(length: number = 10, charset: string = this.defaultCharset): string {
    let result = '';
    for (let i = 0; i < length; i++) {
      result += this.randomChar(charset);
    }
    return result;
  }

  /**
   * It returns a random element from an array.
   * @param {T[]} arr - T[] - The array to get a random element from.
   * @returns The return type is T.
   */
  public randomElement<T>(arr: T[]): T {
    return IsSomething.isArray(arr) ? arr[this.randomInt(0, arr.length)] : (arr as T);
  }

  /**
   * It returns a random element from an array.
   * @param {T[]} arr - The array to choose a random element from.
   * @param {number} start - The start index of the range.
   * @param {number} end - The index of the last element in the range.
   * @returns The random element in the array.
   */
  public randomElementInRange<T>(arr: T[], start: number, end: number): T {
    return arr[this.randomInt(start, end)];
  }

  /**
   * Generates a random element from an object by selecting a random property.
   * @param {T} obj - The object to choose a random property from.
   * @returns The value of a random property in the object.
   */
  public randomProperty<T extends object>(obj: T): T[keyof T] {
    const keys = Object.keys(obj);
    const randomKey = keys[this.randomInt(0, keys.length)];
    return (obj as MutableObject<any>)[randomKey];
  }

  /**
   * Generates a random boolean value.
   * @returns A random boolean value.
   */
  public randomBoolean(): boolean {
    return this.randomInt(0, 2) == 0;
  }

  /**
   * Generates a random color in hexadecimal format (#RRGGBB).
   *
   * @returns {string} A random color in hexadecimal format.
   */
  public randomColor(): string {
    const r = this.randomInt(0, 256).toString(16).padStart(2, '0');
    const g = this.randomInt(0, 256).toString(16).padStart(2, '0');
    const b = this.randomInt(0, 256).toString(16).padStart(2, '0');
    return `#${r}${g}${b}`;
  }

  /**
   * Generates a random RGB color array [r, g, b].
   *
   * @returns {number[]} A random RGB color array.
   */
  public randomRgbColor(): number[] {
    return [this.randomInt(0, 256), this.randomInt(0, 256), this.randomInt(0, 256)];
  }

  /**
   * Generates a random UUID (Universally Unique Identifier).
   *
   * @returns {string} A random UUID.
   */
  public randomUUID(): string {
    const segments: string[] = [];
    for (let i = 0; i < 8; i++) {
      segments.push(this.randomString(4, '0123456789abcdef'));
    }
    return segments.join('-');
  }

  /**
   * Generates a random date within a specified range.
   *
   * @param {Date} startDate - The start date of the range.
   * @param {Date} endDate - The end date of the range.
   * @returns {Date} A random date within the specified range.
   */
  public randomDate(startDate: Date, endDate: Date): Date {
    const startMillis = startDate.getTime();
    const endMillis = endDate.getTime();
    const randomMillis = this.randomInt(startMillis, endMillis + 1);
    return new Date(randomMillis);
  }

  public static getInstance(): Random {
    return this.instance;
  }
}

export default Random.getInstance();
