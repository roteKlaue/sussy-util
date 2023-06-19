import { IsSomething } from ".";
import crypto from "crypto";
import { MutableObject } from "../Types";

class Random {
    private static instance: Random = new Random();
    private constructor() {};

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
    public randomChar(charset?: string): string {
        charset = ((IsSomething.isString(charset)) ? charset : "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789") || "";
        return charset.charAt(this.randomInt(0, charset.length));
    }

    /**
     * @param [length=10] - The length of the string to be generated.
     * @param {string} [charset] - The characters to use when generating the string. Defaults to
     * "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".
     * @returns A string of random characters.
     */
    public randomString(length = 10, charset?: string): string {
        return length === 0 ? "" : this.randomChar(charset) + this.randomString(--length, charset);
    }

    /**
     * It returns a random element from an array.
     * @param {T[]} arr - T[] - The array to get a random element from.
     * @returns The return type is T.
     */
    public randomElement<T>(arr: T[]): T {
        return IsSomething.isArray(arr) ? arr[crypto.randomInt(arr.length)] : arr as T;
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
    public randomProperty<T extends Object>(obj: T): T[keyof T] {
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

    public static getInstance(): Random {
        return this.instance;
    }
}

export default Random.getInstance();