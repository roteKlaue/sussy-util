import { ImprovedArray, Optional } from '.';

type CheckFunction<T> = (a: T, b: T) => boolean;
type CallBack<T> = (a: T, index: number) => void;

/**
 * A custom Set implementation that ensures unique items with flexible equality checks.
 * @template T - The type of items stored in the Set.
 */
export default class Set<T> {
	private items = new ImprovedArray<T>();
	private checkFunction: CheckFunction<T> = (a: T, b: T) => a === b;

	/**
	 * Constructs a new Set instance.
	 * @param {T[]} items - The initial items to populate the set.
	 * @param {CheckFunction<T>} [checkFunction] - Optional equality check function.
	 */
	public constructor(items: T[], checkFunction?: CheckFunction<T>) {
		if (checkFunction) this.checkFunction = checkFunction;

		items.forEach((item) => {
			if (!this.has(item)) this.items.push(item);
		});
	}

	/**
	 * Adds an item to the set if it does not already exist.
	 * @param {T} item - The item to add.
	 */
	public push = (item: T): void => {
		if (this.has(item)) return;
		this.items.push(item);
	};

	/**
	 * Removes an item from the set.
	 * @param {T} item - The item to remove.
	 * @returns {boolean} - True if the item was removed, false otherwise.
	 */
	public delete = (item: T): boolean => {
		const index = this.items.indexOf(item);
		if (index < 0) return false;
		this.items.remove(index);
		return true;
	};

	/**
	 * Retrieves the item at a given index as an Optional.
	 * @param {number} index - The index of the item.
	 * @returns {Optional<T>} - The item wrapped in an Optional.
	 */
	public get = (index: number): Optional<T> => {
		if (index < 0 || index >= this.length()) return Optional.empty();
		return Optional.of(this.items[index]);
	};

	/**
	 * Checks if the set is empty.
	 * @returns {boolean} - True if the set is empty, false otherwise.
	 */
	public isEmpty = this.items.isEmpty.bind(this.items);

	/**
	 * Returns the number of items in the set.
	 * @returns {number} - The number of items in the set.
	 */
	public length = (): number => this.items.length;

	/**
	 * Clears all items from the set.
	 */
	public clear = this.items.clear.bind(this.items);

	/**
	 * Creates a new Set with the same items.
	 * @returns {Set<T>} - A clone of the current set.
	 */
	public clone = (): Set<T> => new Set<T>(this.items, this.checkFunction);

	/**
	 * Removes an item at a given index.
	 * @param {number} index - The index of the item to remove.
	 * @returns {boolean} - True if the item was removed, false otherwise.
	 */
	public remove = (index: number): boolean => {
		if (index < 0 || index >= this.length()) return false;
		this.items.remove(index);
		return true;
	};

	/**
	 * Converts the set to an array.
	 * @returns {T[]} - An array representation of the set.
	 */
	public toArray = this.items.clone.bind(this.items);

	/**
	 * Changes the equality check function.
	 * @param {CheckFunction<T>} predicate - The new equality check function.
	 */
	public changeCheckFunction = (predicate: CheckFunction<T>): void => {
		this.checkFunction = predicate;
	};

	/**
	 * Returns a string representation of the set.
	 * @returns {string} - The string representation of the set.
	 */
	public toString = (): string => `Set: ${this.items.toString()}`;

	/**
	 * Returns a JSON string representation of the set.
	 * @returns {string} - The JSON string representation of the set.
	 */
	public toJSONString = (): string => this.items.toJSONString();

	/**
	 * Checks if the set contains an item.
	 * @param {T} item - The item to check for.
	 * @returns {boolean} - True if the item is in the set, false otherwise.
	 */
	public has = (item: T): boolean => this.items.some(this.checkFunction.bind(this, item));

	/**
	 * Executes a callback function for each item in the set.
	 * @param {CallBack<T>} callback - The callback function.
	 */
	public forEach = (callback: CallBack<T>): void => this.items.forEach(callback);

	/**
	 * Executes a callback function for each item in the set (alias for `forEach`).
	 * @param {CallBack<T>} callback - The callback function.
	 */
	public each = (callback: CallBack<T>): void => this.forEach(callback);

	/**
	 * Merges another set with this set.
	 * @param {Set<T>} set - The set to merge.
	 * @returns {Set<T>} - A new set containing all items from both sets.
	 */
	public merge = (set: Set<T>): Set<T> => {
		return new Set<T>([...this.items, ...set.toArray()], this.checkFunction);
	};

	/**
	 * Returns a new set containing items present in this set but not in the provided set.
	 * @param {Set<T>} set - The set to subtract.
	 * @returns {Set<T>} - A new set with subtracted items.
	 */
	public subtract = (set: Set<T>): Set<T> => {
		const subtractedItems = this.items.filter(item => !set.has(item));
		return new Set<T>(subtractedItems, this.checkFunction);
	};

	/**
	 * Filters the set based on a predicate.
	 * @param {(item: T, index: number) => boolean} predicate - The predicate function.
	 * @returns {Set<T>} - A new set with items that satisfy the predicate.
	 */
	public filter = (predicate: (item: T, index: number) => boolean): Set<T> => {
		const filteredItems: T[] = [];
		this.forEach((item, i) => {
			if (!predicate(item, i)) return;
			filteredItems.push(item);
		});
		return new Set<T>(filteredItems, this.checkFunction);
	};

	/**
	 * Reduces the set to a single value using a reducer function.
	 * @template U
	 * @param {(accumulator: U, currentItem: T, index: number) => U} reducer - The reducer function.
	 * @param {U} initialValue - The initial value for the accumulator.
	 * @returns {U} - The final accumulated value.
	 */
	public reduce = <U>(reducer: (accumulator: U, currentItem: T, index: number) => U, initialValue: U): U => {
		let accumulator: U = initialValue;
		this.forEach((item, i) => {
			accumulator = reducer(accumulator, item, i);
		});
		return accumulator;
	};

	/**
	 * Maps each item in the set to a new value, ensuring uniqueness of mapped items.
	 * @template U
	 * @param {(item: T, index: number) => U} callback - The mapping function.
	 * @returns {Set<U>} - A new set with mapped items.
	 */
	public map = <U>(callback: (item: T, index: number) => U): Set<U> => {
		const mappedItems: U[] = [];
		this.forEach((item, i) => {
			const newItem = callback(item, i);
			mappedItems.push(newItem);
		});
		return new Set<U>(mappedItems, (a, b) => a === b);
	};

	/**
	 * Returns a new set containing items present in both this set and another set.
	 * @param {Set<T>} set - The set to intersect with.
	 * @returns {Set<T>} - A new set with intersected items.
	 */
	public intersection = (set: Set<T>): Set<T> => {
		const intersectionItems = this.items.filter(item => set.has(item));
		return new Set<T>(intersectionItems, this.checkFunction);
	};

	/**
	 * Returns a new set containing all unique items from both sets.
	 * @param {Set<T>} set - The set to unite with.
	 * @returns {Set<T>} - A new set with union items.
	 */
	public union = (set: Set<T>): Set<T> => {
		return new Set<T>([...this.items, ...set.toArray()], this.checkFunction);
	};

	/**
	 * Returns a new set containing items that are in either set, but not both.
	 * @param {Set<T>} set - The set to compare with.
	 * @returns {Set<T>} - A new set with symmetric difference items.
	 */
	public symmetricDifference = (set: Set<T>): Set<T> => {
		const itemsInThisNotInOther = this.items.filter(item => !set.has(item));
		const itemsInOtherNotInThis = set.toArray().filter(item => !this.has(item));
		return new Set<T>([...itemsInThisNotInOther, ...itemsInOtherNotInThis], this.checkFunction);
	};


	/**
	 * Enables iteration over the set using `for...of`.
	 * @returns {Iterator<T>} - An iterator for the set.
	 */
	public [Symbol.iterator](): Iterator<T> {
		let index = 0;
		const items = [...this.items]; 
		return {
			next(): IteratorResult<T> {
				if (index < items.length) {
					return { value: items[index++], done: false };
				}
				return { value: undefined, done: true };
			},
		};
	}

}
