import { IsSomething, AbstractClass } from ".";
import crypto from "crypto";

export default abstract class Random extends AbstractClass {
    constructor() {
        super(Random);
    }

    /**
     * It returns a random integer between the lower and upper bounds, inclusive.
     * @param [lower=0] - The lowest number that can be returned.
     * @param [upper=10] - The upper bound of the random number.
     * @returns A random integer between the lower and upper bounds.
     */
    public static randomInt(lower = 0, upper = 10) {
        lower = Math.floor(lower);
        upper = Math.ceil(upper) - lower;
        return crypto.randomInt(lower, upper);
    }

    /**
     * It returns a random character from a given string, or a random character from the default string
     * if no string is given.
     * 
     * The default string is: 
     * 
     * abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789
     * @param {string} [charset] - The character set to use. If not provided, it will default to "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
     * @returns A random character from the charset.
     */
    public static randomChar(charset?: string): string {
        charset = ((IsSomething.isString(charset)) ? charset : "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789") || "";
        return charset.charAt(this.randomInt(0, charset.length));
    }

    /**
     * @param [length=10] - The length of the string to be generated.
     * @param {string} [charset] - The characters to use when generating the string. Defaults to
     * "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".
     * @returns A string of random characters.
     */
    public static randomString(length = 10, charset?: string): string {
        return length === 0 ? "" : this.randomChar(charset) + this.randomString(--length, charset);
    }

    /**
     * It returns a random element from an array.
     * @param {T[]} arr - T[] - The array to get a random element from.
     * @returns The return type is T.
     */
    public static randomElement<T>(arr: T[]): T {
        return IsSomething.isArray(arr) ? arr[crypto.randomInt(arr.length)] : arr as T;
    }

    /**
     * It returns a random element from an array.
     * @param {T[]} arr - The array to choose a random element from.
     * @param {number} start - The start index of the range.
     * @param {number} end - The index of the last element in the range.
     * @returns The random element in the array.
     */
    public static randomElementInRange<T>(arr: T[], start: number, end: number): T {
        return arr[this.randomInt(start, end)];
    }
}