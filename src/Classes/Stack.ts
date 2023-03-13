import { IndexOutOfBoundsError } from "../Error";
import { ImprovedArray } from ".";

export default class Stack<T> {
    private items: ImprovedArray<T> = new ImprovedArray<T>();

    constructor(initElm: Array<T>) {
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
     * If the stack is empty, throw an error, otherwise return the last item in the stack.
     * @returns The last item in the array.
     */
    public peek(): T {
        if (this.items.length < 0) throw new IndexOutOfBoundsError();
        return this.items[this.items.length - 1];
    }

    /**
     * If the stack is empty, throw an error. Otherwise, remove the last item from the stack and return
     * it.
     * @returns The last item in the array.
     */
    public pop(): T {
        if (this.items.length < 0) throw new IndexOutOfBoundsError();
        const sus = this.items.pop();
        if (!sus) throw new IndexOutOfBoundsError();
        return sus;
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
}