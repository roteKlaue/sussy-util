import { ImprovedArray } from ".";

export default class Queue<T> {
    private items: ImprovedArray<T> = new ImprovedArray<T>();

    constructor(initElm: T[]) {
        this.items.push(...initElm);
    };

    /**
     * The function takes a variable number of arguments of type T and pushes them into the items array
     * @param {T[]} elm - T[]
     */
    public push(...elm: T[]): void {
        this.items.push(...elm);
    }

    /**
     * It returns the first element of the array
     * @returns The first item in the array.
     */
    public peek(): T | undefined {
        return this.items[0];
    }

    /**
     * It removes the first element from an array and returns that element
     * @returns The first element of the array.
     */
    public shift(): T | undefined {
        return this.items.shift();
    }

    /**
     * Returns true if the queue is empty, false otherwise
     * @returns The method returns a boolean value.
     */
    public empty(): boolean {
        return this.items.isEmpty();
    }

    public toString(): string {
        return `Queue: ${this.items.toString()}`;
    }

    /**
     * This function returns a copy of the items array.
     * @returns The clone of the items array.
     */
    public toArray(): T[] {
        return this.items.clone();
    }

    /**
     * It takes the items array and converts it to a JSON string.
     * @returns The JSON string representation of the items array.
     */
    public toJSONString(): string {
        return JSON.stringify(this.items);
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