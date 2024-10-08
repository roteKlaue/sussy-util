import { deepClone } from '../Functions';
import { MutableObject } from '../Types';
import Optional from './Optional';
import Random from './Random';

class ArrayUtils {
	private static readonly instance: ArrayUtils = new ArrayUtils();

	private constructor() { }

	/**
     * If the item is an array, then push the flattened array into the result array, otherwise push the
     * item into the result array.
     *
     * @template T - The type of the elements in the array.
     * @param {any[]} arr - any[] - The array to flatten.
     */
	public flat<T>(arr: Array<T | T[]>): T[] {
		const result: T[] = [];
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
     *
     * @template T - The type of the elements in the array.
     * @param {T[]} a - T[] - The first array to compare
     * @param {T[]} b - T[]
     * @returns An array of the elements that are in both a and b.
     */
	public intersection<T>(a: T[], b: T[]): T[] {
		return a.filter(x => b.includes(x));
	}

	/**
     * It takes two arrays, concatenates them, removes duplicates, and returns the result
     *
     * @template T - The type of the elements in the array.
     * @param {T[]} a - T[] - The first array to union
     * @param {T[]} b - T[]
     * @returns An array of unique values from both arrays.
     */
	public union<T>(a: T[], b: T[]): T[] {
		return [...new Set<T>([...a, ...b])];
	}

	/**
     * It takes two arrays, and returns an array of all the elements in the first array that are not in
     * the second array
     *
     * @template T - The type of the elements in the array.
     * @param {T[]} a - T[] - The first array
     * @param {T[]} b - T[] - The array to compare against
     * @returns The difference between two arrays.
     */
	public difference<T>(a: T[], b: T[]): T[] {
		return a.filter(x => !b.includes(x));
	}

	/**
     * This function takes an array of any type and shuffles it in place.
     *
     * @template T - The type of array to shuffle
     * @template X - The type of the elements in the array.
     * @param {T | X[]} array - T | X[]
     */
	public shuffle<X, T extends Array<X>>(array: T | X[]): void {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Random.randomInt(0, i + 1);
			[array[i], array[j]] = [array[j], array[i]];
		}
	}

	/**
     * It takes an array and a value, and returns the number of times the value occurs in the array.
     *
     * @template T - The type of the elements in the array.
     * @param {T[]} array - T[] - The array to search in
     * @param {T} value - T - The value to count occurrences of.
     * @returns The number of occurrences of the value in the array.
     */
	public countOccurrences<T>(array: T[], value: T): number {
		return array.reduce((a, v) => v === value ? a + 1 : a, 0);
	}

	/**
     * It clears an array by setting its length to zero
     *
     * @template T - The type of the elements in the array.
     * @param {any[]} array - any[]
     */
	public clear(array: unknown[]): void {
		array.length = 0;
	}

	/**
     * It takes an array of any type, and returns a new array of the same type
     *
     * @template T - The type of the elements in the array.
     * @param {T[]} array - T[] - The array to clone.
     * @returns A new array with the same elements as the original array.
     */
	public clone<T>(array: T[]): Array<T> {
		return [...array];
	}

	/**
     * It takes an array of any type, and returns a new array of the same type
     *
     * @template T - The type of the elements in the array.
     * @param {T[]} array - T[] - The array to clone.
     * @returns A new array with the same elements as the original array.
     */
	public deepClone<T>(array: T[]): Array<T> {
		return array.map(e => deepClone(e as MutableObject<unknown>) as T);
	}

	/**
     * It takes an array of any type, and returns an array of the same type, with all duplicates
     * removed
     *
     * @template T - The type of the elements in the array.
     * @param {T[]} arr - T[] - The array to remove duplicates from.
     * @returns A new array with the duplicates removed.
     */
	public removeDuplicates<T>(arr: T[]): T[] {
		return [...new Set<T>(arr)];
	}

	/**
     * Sort an array of objects by a key of your choice.
     *
     * @template T - The type of the elements in the array.
     * @param {T[]} arr - T[] - The array to sort
     * @param key - keyof T
     * @returns An array of objects.
     */
	public sortByKey<T extends object>(arr: T[], key: keyof T): T[] {
		return arr.sort((a, b) => a[key] > b[key] ? 1 : -1);
	}

	/**
     * It takes an array and an item, and returns a new array with the item removed
    *
     * @template T - The type of the elements in the array.
     * @param {T[]} arr - T[] - The array to remove the item from
     * @param {T} item - The item to remove from the array.
     * @returns A new array with all the items that are not equal to the item passed in.
     */
	public remove<T>(arr: T[], item: T): T[] {
		return arr.filter(val => val !== item);
	}

	/**
     * It takes two arrays of different types and returns an array of tuples
     *
     * @template T - The type of the elements in the first array.
     * @template U - The type of the elements in the second array.
     * @param {T[]} arr1 - T[]
     * @param {U[]} arr2 - U[]
     * @returns An array of tuples.
     */
	public zip<T, U>(arr1: T[], arr2: U[]): [T, U][] {
		return arr1.map((val, i) => [val, arr2[i]]);
	}

	/**
     * It takes an array, an index, and any number of items, and returns a new array with the items
     * inserted at the index.
     *
     * @template T - The type of the elements in the array.
     * @param {T[]} arr - T[] - The array to insert into
     * @param {number} index - The index where you want to insert the items.
     * @param {T[]} items - T[] - The items to insert into the array.
     * @returns a new array with the items inserted at the specified index.
     */
	public insert<T>(arr: T[], index: number, ...items: T[]): T[] {
		return [...arr.slice(0, index), ...items, ...arr.slice(index)];
	}

	/**
     * It takes an array and returns a new array with all the unique sub-arrays.
     * @param {any[][]} arr - any[][] - The array to get the unique sub-arrays from.
     * @returns A new array with all the unique sub-arrays.
     */
	public uniqueSubArrays(arr: unknown[][]): unknown[][] {
		const map = new Map(arr.map(v => [JSON.stringify(v), v]));
		return [...map.values()];
	}


	/**
     * Finds the k-th smallest element in an array using the QuickSelect algorithm.
     *
     * @param {number[]} arr - The input array.
     * @param {number} k - The index of the desired smallest element (1-based).
     * @returns {number} The k-th smallest element in the array.
     */
	public quickSelect(arr: number[], k: number): number {
		if (arr.length === 1) {
			return arr[0];
		}

		const pivot = arr[Random.randomInt(0, arr.length)];
		const lows = arr.filter(x => x < pivot);
		const highs = arr.filter(x => x > pivot);
		const pivots = arr.filter(x => x === pivot);

		if (k < lows.length) {
			return this.quickSelect(lows, k);
		} else if (k < lows.length + pivots.length) {
			return pivots[0];
		}
		return this.quickSelect(highs, k - lows.length - pivots.length);
	}

	/**
     * Sorts an array in ascending order using the Quick Sort algorithm.
     *
     * @template T - The type of the elements in the array.
     * @param {T[]} arr - The input array to be sorted.
     * @param {Function} compareFn - A function to compare two elements.
     * @returns {T[]} The sorted array.
     */
	public quickSort<T>(arr: T[], compareFn: (a: T, b: T) => number): T[] {
		if (arr.length <= 1) {
			return arr;
		}

		const pivot = arr[arr.length - 1];

		const smaller = [];
		const greater = [];
		const equal = [];

		for (let i = 0; i < arr.length; i++) {
			const compareResult = compareFn(arr[i], pivot);
			if (compareResult < 0) {
				smaller.push(arr[i]);
			} else if (compareResult > 0) {
				greater.push(arr[i]);
			} else {
				equal.push(arr[i]);
			}
		}

		const sortedSmaller = this.quickSort(smaller, compareFn);
		const sortedGreater = this.quickSort(greater, compareFn);

		return sortedSmaller.concat(equal, sortedGreater);
	}

	/**
     * Splits an array into smaller arrays of a specified size.
     *
     * @template T - The type of the elements in the array.
     * @param {T[]} array - The array to be chunked.
     * @param {number} chunkSize - The size of each chunk.
     * @returns {T[][]} - An array of smaller arrays (chunks).
     */
	public chunks<T>(array: T[], chunkSize: number): T[][] {
		if (chunkSize <= 0) {
			throw new Error('Chunk size must be greater than 0.');
		}

		const chunkedArray: T[][] = [];
		for (let i = 0; i < array.length; i += chunkSize) {
			const chunk = array.slice(i, i + chunkSize);
			chunkedArray.push(chunk);
		}

		return chunkedArray;
	}

	/**
     * Returns the found element or undefined in an Optional
     *
     * @template T - The type of the elements in the array.
     * @param array the array to be searched
     * @param property the property to be searched in
     * @param value the value to be searched for
     * @returns Optional object of the value
     */
	public findByPropertyValue<T>(array: T[], property: keyof T, value: unknown): Optional<T> {
		return Optional.of(array.find(x => x[property] === value));
	}

	/**
     * Returns the index of the first occurrence of a given value in an array.
     *
     * @template T - The type of the elements in the array.
     * @param array the array to search in
     * @param property the property to search on
     * @param value the value to search for
     * @returns the index of the value in the array, or -1 if not found
     */
	public findIndexByPropertyValue<T>(array: T[], property: keyof T, value: unknown): number {
		return array.findIndex(x => x[property] === value);
	}

	/**
     * @template T - The type of the elements in the array.
     * @param array the array to search
     * @param condition the condition to search for
     * @returns the indicies found in the array
     */
	public findAllIndices<T>(array: T[], condition: (element: T) => boolean): number[] {
		const indices: number[] = [];
		for (let i = 0; i < array.length; i++) {
			if (condition(array[i])) {
				indices.push(i);
			}
		}
		return indices;
	}

	public static getInstance(): ArrayUtils {
		return this.instance;
	}
}

export default ArrayUtils.getInstance();