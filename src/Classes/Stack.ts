import { IndexOutOfBoundsError } from "../Error";
import { ImprovedArray } from ".";

export default class Stack<T> {
    private items: ImprovedArray<T>;

    public constructor(initElm: T[] = []) {
        this.items = new ImprovedArray<T>(...initElm);
    }

    /**
     * The function takes a variable number of arguments of type T and pushes them into the items array
     * @param {T[]} elm - T[]
     */
    public push(...elm: T[]): void {
        this.items.push(...elm);
    }

    /**
     * If the stack is empty, throw an error, otherwise return the last item in the stack.
     * @returns The last item in the array.
     */
    public peek(): T {
        if (this.items.isEmpty()) throw new IndexOutOfBoundsError("Stack is empty.");
        return this.items[this.items.length - 1];
    }

    /**
     * If the stack is empty, throw an error. Otherwise, remove the last item from the stack and return
     * it.
     * @returns The last item in the array.
     */
    public pop(): T {
        if (this.items.isEmpty()) throw new IndexOutOfBoundsError("Stack is empty.");
        return this.items.pop()!;
    }

    /**
     * The function returns true if the stack is empty, false otherwise
     * @returns The method returns a boolean value.
     */
    public empty(): boolean {
        return this.items.isEmpty();
    }

    public toString(): string {
        return `Stack: ${this.items.toString()}`;
    }

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

    /**
     * Returns the number of elements in the stack.
     * @returns The number of elements in the stack.
     */
    public size(): number {
        return this.items.length;
    }

    /**
     * Returns a new stack that is a copy of the current stack.
     * @returns A new stack with the same elements as the current stack.
     */
    public clone(): Stack<T> {
        return new Stack<T>(this.items.clone());
    }

    public clear(): void {
        this.items.clear();
    }

    /**
     * Returns a new stack that contains the reversed order of the elements in the current stack.
     * @returns {Stack<T>} A new stack with reversed elements.
     */
    public reverse(): Stack<T> {
        const reversedArray = this.items.clone().reverse();
        return new Stack<T>(reversedArray);
    }

    /**
     * Removes all occurrences of a specific element from the stack.
     * @param {T} element - The element to be removed.
     * @returns {number} The number of elements removed from the stack.
     */
    public removeAll(element: T): number {
        const originalSize = this.size();
        this.items = new ImprovedArray<T>(...this.items.filter((item) => item !== element));
        return originalSize - this.size();
    }

    /**
     * Returns a new stack that contains the unique elements from the current stack.
     * @returns {Stack<T>} A new stack with unique elements.
     */
    public distinct(): Stack<T> {
        const uniqueSet = new Set(this.items);
        return new Stack<T>([...uniqueSet]);
    }

    public [Symbol.iterator](): Iterator<T> {
        let index = this.items.length - 1;

        return {
            next: (): IteratorResult<T> => {
                if (index >= 0) {
                    return {
                        value: this.items[index--],
                        done: false,
                    };
                } else {
                    return {
                        value: undefined!,
                        done: true,
                    };
                }
            },
        };
    }
}