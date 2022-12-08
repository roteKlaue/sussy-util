import { AbstractClass } from "../allClasses";
import Point from "../Types/Point";

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

    static square(num:number):number {
        return num * num;
    }

    static distane(args:[Point], i:number = 0) {
        return (i - 1 >= args.length)? 0:Math.sqrt(this.square(args[i].x - args[i + 1].x) + this.square(args[i].y - args[i].y));
    }
}