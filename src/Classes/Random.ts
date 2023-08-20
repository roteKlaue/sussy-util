import { IsSomething, AbstractClass } from ".";
import crypto from "node:crypto";

export default abstract class Random extends AbstractClass {
    // TODO: Documentation
    constructor() {
        super(Random);
    }

    public static randomInt(lower = 0, upper = 10) {
        lower = Math.floor(lower);
        upper = Math.ceil(upper);
        return crypto.randomInt(lower, upper);
    }

    public static randomDouble(lower = 0, upper = 10) {
        return this.randomInt(lower, upper) + Math.random();
    }

    public static randomChar(charset?: string): string {
        charset = ((IsSomething.isString(charset)) ? charset : "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789") || "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        return charset.charAt(this.randomInt(0, charset.length - 1));
    }

    public static randomString(length = 10, charset?: string): string {
        return length === 0 ? "" : this.randomChar(charset) + this.randomString(--length, charset);
    }

    public static randomElement<T>(arr: T[]): T {
        return arr[Random.randomInt(0, arr.length)];
    }

    public static randomElementInRange<T>(arr: T[], start: number, end: number): T {
        return arr[Random.randomInt(start, end - start + 1)];
    }
}