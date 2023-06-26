import { IndexOutOfBoundsError } from "../Error";
import { ImprovedArray } from ".";

export default class Stack<T> {
    // TODO: Documentation
    private items: ImprovedArray<T>;

    constructor(initElm: Array<T>) {
        this.items = new ImprovedArray<T>(...initElm);
    };

    push(...elm: T[]): void {
        this.items.push(...elm);
    }

    peek(): T {
        if (this.items.isEmpty()) throw new IndexOutOfBoundsError();
        return this.items[this.items.length - 1];
    }

    pop(): T {
        if (this.items.isEmpty()) throw new IndexOutOfBoundsError();
        const sus = this.items.pop();
        if (!sus) throw new IndexOutOfBoundsError();
        return sus;
    }

    empty(): boolean {
        return this.items.isEmpty();
    }

    toString(): string {
        return `Stack: ${this.items.toString()}`;
    }

    toArray(): T[] {
        return this.items;
    }

    toJSONString(): string {
        return JSON.stringify(this.items);
    }
}