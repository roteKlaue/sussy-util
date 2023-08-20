import { ImprovedArray } from ".";

export default class Queue<T> {
    // TODO: Documentation
    private items: ImprovedArray<T> = new ImprovedArray<T>();

    constructor(initElm: Array<T>) {
        this.items.push(...initElm);
    };

    push(...elm: T[]): void {
        this.items.push(...elm);
    }

    peek(): T | undefined {
        return this.items[0];
    }

    shift(): T | undefined {
        return this.items.shift();
    }

    empty(): boolean {
        return this.items.isEmpty();
    }

    toString(): string {
        return `Queue: ${this.items.toString()}`;
    }

    toArray(): T[] {
        return this.items;
    }

    toJSONString(): string {
        return JSON.stringify(this.items);
    }
}