import { IndexOutOfBoundsError } from "../Error";
import { ImprovedArray } from ".";

export default class Set<T> {
    private items = new ImprovedArray<T>();
    private checkFunction: (a: T, b: T) => boolean = (arrayParam: T, newItem: T) => arrayParam === newItem;

    public constructor(...items: T[]) {
        for (let index = 0; index < items.length; index++) {
            const item = items.shift();
            if (item && !items.includes(item)) {
                this.items.push(item);
            }
        }
    }

    /**
     * If the item is not already in the array, add it
     * @param {T} item - T - The item to be pushed into the array.
     */
    public push(item: T): void {
        if (!this.items.some((item2) => this.checkFunction(item2, item))) {
            this.items.push(item);
        }
    }

    /**
     * finds and removes the item from the Set
     * @param {T} item - T - The item to delete
     */
    public delete(item: T): void {
        this.items.find((v, i) => {
            if (v === item) {
                this.items.remove(i);
            }
        });
    }

    /**
     * @param {number} index - number - The index of the item to get
     * @returns The item at the index.
     */
    public get(index: number): T {
        if (index < 0 || index >= this.length()) {
            throw new IndexOutOfBoundsError(`Index: ${index} is out of bounds for length ${this.length()}`);
        }
        return this.items[index];
    }

    /**
     * Returns true if the set is empty, false otherwise
     * @returns The return type is boolean.
     */
    public isEmpty(): boolean {
        return this.items.isEmpty();
    }

    /**
     * The length function returns the length of the items array
     * @returns The length of the items array.
     */
    public length(): number {
        return this.items.length;
    }

    /**
     * The clear() function clears the items in the Set
     */
    public clear(): void {
        this.items.clear();
    }

    /**
     * The clone function creates a new Set object and passes the items of the current Set object to
     * the new Set object
     * @returns A new Set object with the same items as the original Set object.
     */
    public clone() {
        return new Set<T>(...this.items);
    }

    /**
     * The remove function removes an item from the list at the specified index.
     * @param {number} index - number - The index of the item to remove.
     */
    public remove(index: number): void {
        if (index < 0 || index >= this.length()) {
            throw new IndexOutOfBoundsError(`Index: ${index} is out of bounds for length ${this.length()}`);
        }
        this.items.remove(index);
    }

    /**
     * The spread operator (...) is used to convert the Set to an array
     * @returns An array of the items in the set.
     */
    public toArray(): T[] {
        return [...this.items];
    }

    /**
     * This function changes the check function to the one passed in as a parameter.
     * @param predicate - (a: T, b: T) => boolean
     */
    public changeCheckFunction(predicate: (a: T, b: T) => boolean): void {
        this.checkFunction = predicate;
    }

    public toString(): string {
        return `Set: ${this.items.toString()}`;
    }

    /**
     * It takes the items array and converts it to a JSON string.
     * @returns The JSON string representation of the items array.
     */
    public toJSONString(): string {
        return JSON.stringify(this.items);
    }

    /**
     * Returns true if the Set contains the specified item, false otherwise.
     * @param item - The item to search for in the Set.
     * @returns A boolean indicating whether the item exists in the Set.
     */
    public has(item: T): boolean {
        return this.items.some((item2) => this.checkFunction(item2, item));
    }

    /**
     * Executes a provided callback function once for each item in the Set.
     * @param callback - A function to execute for each item in the Set.
     */
    public forEach(callback: (item: T) => void): void {
        this.items.forEach(callback);
    }

    /* shorthand for `forEach` */
    public each(callbackfn: (item: T) => void): void {
        this.forEach(callbackfn);
    };

    /**
     * Returns a new Set that contains the items from both the current Set and another Set.
     * @param set - The Set to merge with the current Set.
     * @returns A new Set that contains items from both Sets.
     */
    public merge(set: Set<T>): Set<T> {
        const mergedSet = new Set<T>(...this.items);
        set.each((item) => mergedSet.push(item));
        return mergedSet;
    }

    /**
     * Returns a new Set that contains items from the current Set that are not present in another Set.
     * @param set - The Set to subtract from the current Set.
     * @returns A new Set that contains items from the current Set excluding those present in the other Set.
     */
    public subtract(set: Set<T>): Set<T> {
        const subtractedSet = new Set<T>();
        this.each((item) => {
            if (!set.has(item)) {
                subtractedSet.push(item);
            }
        });
        return subtractedSet;
    }

    public [Symbol.iterator](): Iterator<T> {
        let index = 0;

        return {
            next: (): IteratorResult<T> => {
                if (index < this.items.length) {
                    return {
                        value: this.items[index++],
                        done: false,
                    };
                } else {
                    return {
                        value: undefined!,
                        done: true,
                    };
                }
            }
        };
    }
}