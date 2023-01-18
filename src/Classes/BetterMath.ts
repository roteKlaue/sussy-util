import { AbstractClass } from ".";
import { Point } from ".";

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
        if (b === 0) {
            return a;
        }
        return this.greatestCommonDivisor(b, a % b);
    }

    public static gcd(a: number, b: number): number {
        return this.greatestCommonDivisor(a, b);
    }

    public static lowestCommonDenominator(a: number, b: number): number {
        const gcd = this.greatestCommonDivisor(a, b);
        return (a / gcd) * b;
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

    public static factorial(num: number): number {
        return num <= 1 ? 1 : num * this.factorial(--num);
    }
}