import IndexOutOfBoundsError from "../Error/IndexOutOfBoundsError";
import Set from "./Set";

export default class ImprovedArray<T> extends Array<T> {
    // TODO: Documentation
    constructor(..._elements: T[]) {
        super(_elements.length);
        _elements.forEach((_e, i) => this[i] = _e);
    }

    getRandomIndex(): number {
        return Math.floor(Math.random() * this.length);
    }

    getRandomElement(): T {
        return this[this.getRandomIndex()];
    }

    remove(index: number): T {
        if (typeof index !== 'number') throw new TypeError('index must be a number');
        if (index >= this.length || index < 0) throw new IndexOutOfBoundsError(`${index} is out of bounds for length: ${this.length}`);
        return this.splice(Math.floor(index), 1)[0];
    }

    insertAt(index: number, ...items: T[]): void {
        if (typeof index !== 'number') throw new TypeError('index must be a number');
        if (index >= this.length || index < 0) throw new IndexOutOfBoundsError(`${index} is out of bounds for length: ${this.length}`);
        this.push(...items, ...this.splice(index, this.length - index - 1));
    }

    clear(): void {
        this.splice(0, this.length);
    }

    clone(): ImprovedArray<T> {
        return new ImprovedArray<T>(...this);
    }

    isEmpty(): boolean {
        return this.length === 0;
    }

    none(predicate: (value: T) => boolean): boolean {
        return this.reduce((acc, value) => !acc && !predicate(value), false);
    }

    rejected(predicate: (val: T, ind: number, arr: T[]) => boolean): ImprovedArray<T> {
        return new ImprovedArray<T>(...this.filter((val, ind, arr) => !predicate(val, ind, arr)));
    }

    sum(): T | string {
        return this.reduce((acc: any, value): any => {
            return acc + value;
        });
    }

    removeDuplicates(): void {
        const newArray = new Set<T>(...this).toArray();
        this.clear();
        this.push(...newArray);
    }

    scramble(): void {
        let lengthArr = this.length;
        while (lengthArr) {
            lengthArr -= 1;
            const randomIndex = Math.floor(Math.random() * lengthArr);
            const temp = this[lengthArr];
            this[lengthArr] = this[randomIndex];
            this[randomIndex] = temp;
        }
    }

    countOccurrences(value: T): number {
        return this.reduce((a: number, v: T) => v === value ? a + 1 : a + 0, 0);
    }

    static flat(arr: any[]): any[] {
        const result: any[] = [];
        for (const item of arr) {
            if (Array.isArray(item)) {
                result.push(...this.flat(item));
            } else {
                result.push(item);
            }
        }
        return result;
    }

    flatten(): void {
        const newARR = ImprovedArray.flat(this);
        this.clear();
        this.push(...newARR);
    }

    toJSONString(): string {
        return JSON.stringify(this);
    }

    shuffle(): void {
        let array = this;
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    each(callbackfn: (elm: T, i: number, arr: T[]) => void): void {
        this.forEach(callbackfn);
    }
}