import IndexOutOfBoundsError from '../Error/IndexOutOfBoundsError';
import { deepClone } from '../Functions';
import { MutableObject } from '../Types';
import ArrayUtils from './ArrayUtil';
import Random from './Random';

export default class ImprovedArray<T> extends Array<T> {
	public constructor(..._elements: T[]) {
		super(_elements.length);
		_elements.forEach((_e, i) => this[i] = _e);
	}

	/**
     * It returns a random number between 0 and the length of the array.
     * @returns The random index of the array.
     */
	public getRandomIndex(): number {
		return Random.randomInt(0, this.length);
	}

	/**
     * It returns a random element from the array
     * @returns The random element from the array.
     */
	public getRandomElement(): T {
		return this[this.getRandomIndex()];
	}

	/**
     * It removes the element at the specified index and returns it.
     * @param {number} index - number - The index of the item to remove.
     * @returns The splice method returns an array containing the deleted elements. If only one element
     * is removed, an array of one element is returned.
     */
	public remove(index: number): T {
		if (index >= this.length || index < 0) throw new IndexOutOfBoundsError(`${index} is out of bounds for length: ${this.length}`);
		return this.splice(Math.floor(index), 1)[0];
	}

	/**
     * It takes an index and an array of items, and inserts the items into the array at the given
     * index.
     * @param {number} index - The index to insert the items at.
     * @param {T[]} items - T[]
     */
	public insertAt(index: number, ...items: T[]): void {
		if (index >= this.length || index < 0) throw new IndexOutOfBoundsError(`${index} is out of bounds for length: ${this.length}`);
		this.push(...items, ...this.splice(index, this.length - index - 1));
	}

	/**
     * The clear() function removes all elements from an array
     */
	public clear(): void {
		this.length = 0;
	}

	/**
     * It creates a new instance of the ImprovedArray class, and passes the current array as the
     * argument
     * @returns A new instance of ImprovedArray with the same elements as the original.
     */
	public clone(): ImprovedArray<T> {
		return new ImprovedArray<T>(...this);
	}

	/**
     * If the length of the array is equal to zero, return true, otherwise return false.
     * @returns The length of the array.
     */
	public isEmpty(): boolean {
		return this.length === 0;
	}

	/**
     * If the predicate returns true for any of the elements in the array, return false, otherwise
     * return true.
     * @param predicate - (value: T) => boolean
     * @returns The reduce method is being called on the array. The reduce method takes two parameters,
     * a callback function and an initial value. The callback function takes two parameters, an
     * accumulator and a value. The accumulator is the value returned by the previous call to the
     * callback function. The value is the current value in the array. The initial value is the value
     * that the accumulator is set to before the
     */
	public none(predicate: (value: T) => boolean): boolean {
		return this.reduce((acc, value) => !acc && !predicate(value), false);
	}

	/**
     * It returns a new array with all the elements that do not satisfy the predicate.
     * @param predicate - (val: T, ind: number, arr: T[]) => boolean
	 * @param thisArg — An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.
     * @returns A new instance of ImprovedArray with the filtered values.
     */
	public rejected(predicate: (val: T, ind: number, arr: T[]) => boolean, thisArg?: unknown): ImprovedArray<T> {
		return new ImprovedArray<T>(...this.filter((val, ind, arr) => !predicate(val, ind, arr), thisArg));
	}

	/**
     * The function `sum` returns the sum of all the elements in the array
     * @returns The return type is T | string.
	 * @deprecated
     */
	public sum(): T | string {
		return this.reduce((acc: any, value): any => {
			return acc + value;
		});
	}

	/**
     * removes all duplicates from the array
     */
	public removeDuplicates(): void {
		const newArray = new Set<T>([...this]);
		this.clear();
		this.push(...newArray);
	}

	/**
     * The reduce function takes a function as an argument, and that function takes two arguments, the
     * first being the accumulator, and the second being the current value. The accumulator is
     * initialized to 0, and the function returns the accumulator plus 1 if the current value is equal
     * to the value we're looking for, or the accumulator plus 0 if it's not.
     * @param {T} value - T - The value to count occurrences of.
     * @returns The number of times the value is found in the array.
     */
	public countOccurrences(value: T): number {
		return this.reduce((a: number, v: T) => v === value ? a + 1 : a, 0);
	}

	/**
     * It takes an array of arrays and flattens it into a single array.
     */
	public flatten(): void {
		const newARR = ArrayUtils.flat<T>(this);
		this.clear();
		this.push(...newARR);
	}

	/**
     * This function takes an object and returns a string that represents the object in JSON format.
     * @returns The JSON string representation of the object.
     */
	public toJSONString(): string {
		return JSON.stringify(this);
	}

	/**
     * For each element in the array, swap it with a random element in the array.
     */
	public shuffle(): void {
		for (let i = this.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[this[i], this[j]] = [this[j], this[i]];
		}
	}

	/* shorthand for `forEach` */
	public each(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void {
		this.forEach(callbackfn, thisArg);
	}

	/**
     * It takes an array of any type and returns an array of the same type.
     * @param {X | any[]} arr - X | any[]
     * @returns An array of common elements.
     */
	public findCommonElements<X extends Array<unknown>>(arr: X | unknown[]): ImprovedArray<T> {
		const commonElements: T[] = [];
		for (let i = 0; i < this.length; i++) {
			if (arr.indexOf(this[i]) !== -1) {
				commonElements.push(this[i]);
			}
		}
		return new ImprovedArray<T>(...commonElements);
	}

	/**
     * Returns a copy of the array. 
     * Each element will be copied into each and every property.
     * 
     * Does NOT make a new instance a class, just takes the properties of the old object and recreates them.
     */
	public deepClone(): ImprovedArray<T> {
		return new ImprovedArray<T>(...this.map(e => (deepClone(e as MutableObject<unknown>) as T)));
	}
}