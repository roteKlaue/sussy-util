import AbstractClass from "./AbstractClass";

export default class ArrayUtils extends AbstractClass {
    constructor() { super(ArrayUtils); }

    public static flat(arr: any[]): any[] {
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

    public static intersection<T>(a: T[], b: T[]): T[] {
        return a.filter(x => b.includes(x));
    }

    public static union<T>(a: T[], b: T[]): T[] {
        return Array.from(new Set([...a, ...b]));
    }

    public static difference<T>(a: T[], b: T[]): T[] {
        return a.filter(x => !b.includes(x));
    }

    public static shuffle<X, T extends Array<X>>(array: T | X[]): void {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    public static countOccurrences<T>(array: T[], value: T): number {
        return array.reduce((a: number, v: T) => v === value ? a + 1 : a + 0, 0);
    }

    public static clear(array: any[]): void {
        array.splice(0, array.length);
    }

    public static clone<T>(array: T[]): Array<T> {
        return [...array];
    }

    public static removeDuplicates<T>(arr: T[]): T[] {
        return [...new Set(arr)];
    }

    public static sortByKey<T extends Object>(arr: T[], key: keyof T): T[] {
        return arr.sort((a, b) => a[key] > b[key] ? 1 : -1);
    }

    public static remove<T>(arr: T[], item: T): T[] {
        return arr.filter(val => val !== item);
    }
    
    public static zip<T, U>(arr1: T[], arr2: U[]): [T, U][] {
        return arr1.map((val, i) => [val, arr2[i]]);
    }

    public static insert<T>(arr: T[], index: number, ...items: T[]): T[] {
        return [...arr.slice(0, index), ...items, ...arr.slice(index)];
    }
}