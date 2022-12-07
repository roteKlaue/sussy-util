import { AbstractClass } from "../allClasses";

export default class BetterMath extends AbstractClass {
    constructor() {
        super(BetterMath);
    }

    static round(value: number, digit: number):number {
        digit = Math.floor(digit);
        if(digit < 0) digit = 0;
        if (digit === 0) {
            return Math.round(value);
        }
        return Math.round(value * Math.pow(10, digit)) / Math.pow(10, digit);
    }

    static random():number {
        return Math.random();
    }
}