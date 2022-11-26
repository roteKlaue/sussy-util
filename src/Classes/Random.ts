import { IsSomething } from "../allClasses";
import { AbstractClass } from "../allClasses";

export default abstract class Random extends AbstractClass {
    // TODO: Documentation
    constructor() {
        super(Random);
    }

    public static randomInt(lower = 0, upper = 10) {
        lower = Math.floor(lower);
        upper = Math.ceil(upper);
        return Math.floor(Math.random() * (upper - lower + 1)) + lower;
    }

    public static randomDouble(lower = 0, upper = 10) {
        return this.randomInt(lower, upper) + Math.random();
    }

    public static randomChar(charset?: string):string {
        charset = ((IsSomething.isString(charset))? charset: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789") || "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        return charset.charAt(this.randomInt(0, charset.length - 1));    
    }

    public static randomString(length = 10, charset?: string):string {
        return length === 0? "": this.randomChar(charset) + this.randomString(--length, charset);
    }

    public static randomElement<T>(arr:T[]):T {
        return IsSomething.isArray(arr)? arr[Math.floor(Math.random() * arr.length)]:arr as T;
    }
}