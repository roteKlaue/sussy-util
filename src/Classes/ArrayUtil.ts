import AbstractClass from "./AbstractClass";

export default class ArrayUtils extends AbstractClass {
    constructor() { super(ArrayUtils); }

    /**
     * If the item is an array, then push the flattened array into the result array, otherwise push the
     * item into the result array.
     * @param {any[]} arr - any[] - The array to flatten.
     */
    public static flat(arr: any[]): any[] {
        const result: any[] = [];
        for (const item of arr) {
            if (Array.isArray(item)) {
                result.push(...this.flat(item));
            } else {
                result.push(item);
            }
        }
        return result;
    }

    /**
     * It takes two arrays of the same type and returns an array of that type containing the elements
     * that are common to both arrays
     * @param {T[]} a - T[] - The first array to compare
     * @param {T[]} b - T[]
     * @returns An array of the elements that are in both a and b.
     */
    public static intersection<T>(a: T[], b: T[]): T[] {
        return a.filter(x => b.includes(x));
    }

    /**
     * It takes two arrays, concatenates them, removes duplicates, and returns the result
     * @param {T[]} a - T[] - The first array to union
     * @param {T[]} b - T[]
     * @returns An array of unique values from both arrays.
     */
    public static union<T>(a: T[], b: T[]): T[] {
        return Array.from(new Set([...a, ...b]));
    }

    /**
     * It takes two arrays, and returns an array of all the elements in the first array that are not in
     * the second array
     * @param {T[]} a - T[] - The first array
     * @param {T[]} b - T[] - The array to compare against
     * @returns The difference between two arrays.
     */
    public static difference<T>(a: T[], b: T[]): T[] {
        return a.filter(x => !b.includes(x));
    }

    /**
     * This function takes an array of any type and shuffles it in place.
     * @param {T | X[]} array - T | X[]
     */
    public static shuffle<X, T extends Array<X>>(array: T | X[]): void {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    /**
     * It takes an array and a value, and returns the number of times the value occurs in the array.
     * @param {T[]} array - T[] - The array to search in
     * @param {T} value - T - The value to count occurrences of.
     * @returns The number of occurrences of the value in the array.
     */
    public static countOccurrences<T>(array: T[], value: T): number {
        return array.reduce((a: number, v: T) => v === value ? a + 1 : a + 0, 0);
    }

    /**
     * It clears an array by setting its length to zero
     * @param {any[]} array - any[]
     */
    public static clear(array: any[]): void {
        array.splice(0, array.length);
    }

    /**
     * It takes an array of any type, and returns a new array of the same type
     * @param {T[]} array - T[] - The array to clone.
     * @returns A new array with the same elements as the original array.
     */
    public static clone<T>(array: T[]): Array<T> {
        return [...array];
    }

    /**
     * It takes an array of any type, and returns an array of the same type, with all duplicates
     * removed
     * @param {T[]} arr - T[] - The array to remove duplicates from.
     * @returns A new array with the duplicates removed.
     */
    public static removeDuplicates<T>(arr: T[]): T[] {
        return [...new Set(arr)];
    }

    /**
     * Sort an array of objects by a key of your choice.
     * @param {T[]} arr - T[] - The array to sort
     * @param key - keyof T
     * @returns An array of objects.
     */
    public static sortByKey<T extends Object>(arr: T[], key: keyof T): T[] {
        return arr.sort((a, b) => a[key] > b[key] ? 1 : -1);
    }

    /**
     * It takes an array and an item, and returns a new array with the item removed
     * @param {T[]} arr - T[] - The array to remove the item from
     * @param {T} item - The item to remove from the array.
     * @returns A new array with all the items that are not equal to the item passed in.
     */
    public static remove<T>(arr: T[], item: T): T[] {
        return arr.filter(val => val !== item);
    }
    
    /**
     * It takes two arrays of different types and returns an array of tuples
     * @param {T[]} arr1 - T[]
     * @param {U[]} arr2 - U[]
     * @returns An array of tuples.
     */
    public static zip<T, U>(arr1: T[], arr2: U[]): [T, U][] {
        return arr1.map((val, i) => [val, arr2[i]]);
    }

    /**
     * It takes an array, an index, and any number of items, and returns a new array with the items
     * inserted at the index.
     * @param {T[]} arr - T[] - The array to insert into
     * @param {number} index - The index where you want to insert the items.
     * @param {T[]} items - T[] - The items to insert into the array.
     * @returns a new array with the items inserted at the specified index.
     */
    public static insert<T>(arr: T[], index: number, ...items: T[]): T[] {
        return [...arr.slice(0, index), ...items, ...arr.slice(index)];
    }
}