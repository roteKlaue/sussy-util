import { AbstractClass } from ".";
import { Point } from "../Types/";

export default abstract class BetterMath extends AbstractClass {
    constructor() {
        super(BetterMath);
    }

    public static round(value: number, digit: number): number {
        digit = Math.floor(digit);
        if (digit < 0) digit = 0;
        if (digit === 0) {
            return Math.round(value);
        }
        return Math.round(value * Math.pow(10, digit)) / Math.pow(10, digit);
    }

    public static random(): number {
        return Math.random();
    }

    public static square(num: number): number {
        return num * num;
    }

    public static distance = (path: Point[], index: number = 0): number =>
        path.length === index ?
            0 :
            Math.sqrt(this.square(path[index].x - path[index + 1].x) + this.square(path[index].y - path[index + 1].y)) + this.distance(path, ++index);

    public static greatestCommonDivisor(a: number, b: number): number {
        let gcd = 1;
        for (let i = 1; i <= a && i <= b; i++) {
            if (a % i == 0 && b % i == 0) {
                gcd = i;
            }
        }
        return gcd;
    }

    public static gcd(a: number, b: number): number {
        return this.greatestCommonDivisor(a, b);
    }

    public static lowestCommonDenominator(a: number, b: number): number {
        if (a === 0 || b === 0) {
            return 0;
        }

        const abs = { a: Math.abs(a), b: Math.abs(b) };
        const absHigherNumber = Math.max(abs.a, abs.b);
        const absLowerNumber = Math.min(abs.a, abs.b);

        let lcm = absHigherNumber;
        while (lcm % absLowerNumber !== 0) {
            lcm += absHigherNumber;
        }
        return lcm;
    }

    public static lcm(a: number, b: number): number {
        return this.lowestCommonDenominator(a, b);
    }

    public static average(numbers: number[]): number {
        return numbers.reduce((a, b) => a + b, 0) / numbers.length;
    }

    public static avg(numbers: number[]): number {
        return this.average(numbers);
    }

    public static median(values: number[]): number {
        values.sort((a, b) => a - b);

        const length = values.length;

        if (length % 2 === 0) {
            return (values[length / 2 - 1] + values[length / 2]) / 2;
        }

        return values[Math.floor(length / 2)];
    }
}