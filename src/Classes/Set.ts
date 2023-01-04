import IndexOutOfBoundsError from "../Error/IndexOutOfBoundsError";
import ImprovedArray from "./ImprovedArray";

export default class Set<T> {
    // TODO: Documentation
    private items = new ImprovedArray<T>();
    private checkFunction: (a: T, b: T) => boolean = (arrayParam: T, newItem: T) => arrayParam === newItem;

    constructor(...items: T[]) {
        for (let index = 0; index < items.length; index++) {
            const item = items.shift();
            if (item && !items.includes(item)) {
                this.items.push(item);
            }
        }
    }

    push(item: T): void {
        if (!this.items.some((item2) => this.checkFunction(item2, item))) {
            this.items.push(item);
        }
    }

    delete(item: T): void {
        this.items.find((v, i) => {
            if (v === item) {
                this.items.remove(i);
            }
        });
    }

    get(index: number): T {
        if (typeof index !== 'number') throw new TypeError('index must be a number');
        if (index < 0 || index >= this.length()) {
            throw new IndexOutOfBoundsError(`Index: ${index} is out of bounds for length ${this.length()}`);
        }
        return this.items[index];
    }

    isEmpty(): boolean {
        return this.items.isEmpty();
    }

    length(): number {
        return this.items.length;
    }

    clear(): void {
        this.items.clear();
    }

    clone() {
        return new Set<T>(...this.items);
    }

    remove(index: number): void {
        if (typeof index !== 'number') throw new TypeError('index must be a number');
        if (index < 0 || index >= this.length()) {
            throw new IndexOutOfBoundsError(`Index: ${index} is out of bounds for length ${this.length()}`);
        }
        this.items.remove(index);
    }

    toArray(): T[] {
        return [...this.items];
    }

    changeCheckFunction(fun: (a: T, b: T) => boolean): void {
        this.checkFunction = fun;
    }

    toString(): string {
        return `Set: ${this.items.toString()}`;
    }

    toJSONString(): string {
        return JSON.stringify(this.items);
    }
}