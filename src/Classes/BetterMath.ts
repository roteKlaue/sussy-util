import { AbstractClass, ArrayUtils } from ".";
import { Point } from ".";

export default abstract class BetterMath extends AbstractClass {
    constructor() {
        super(BetterMath);
    }

    /**
     * Round a number to a specified number of decimal places.
     * @param {number} value - The number to round.
     * @param {number} digit - The number of digits to round to.
     * @returns The rounded value.
     */
    public static round(value: number, digit: number): number {
        digit = Math.floor(digit);
        if (digit < 0) digit = 0;
        if (digit === 0) {
            return Math.round(value);
        }
        return Math.round(value * Math.pow(10, digit)) / Math.pow(10, digit);
    }

    /**
     * @deprecated
    */
    public static random(): number {
        return Math.random();
    }

    /**
     * @param {number} num number to be squared
     * @returns {number} num²
     */
    public static square(num: number): number {
        return num * num;
    }

    public static distance = (path: Point[], index: number = 0): number =>
        path.length === index ?
            0 :
            Math.sqrt(this.square(path[index].x - path[index + 1].x) + this.square(path[index].y - path[index + 1].y)) + this.distance(path, ++index);

    /**
     * If b is 0, return a, otherwise return the greatest common divisor of b and the remainder of a
     * divided by b.
     * @param {number} a - The first number to find the greatest common divisor of.
     * @param {number} b - number = 0
     * @returns The greatest common divisor of a and b.
     */
    public static greatestCommonDivisor(a: number, b: number): number {
        if (b === 0) {
            return a;
        }
        return this.greatestCommonDivisor(b, a % b);
    }

    /**
     * If b is 0, return a, otherwise return the greatest common divisor of b and the remainder of a
     * divided by b.
     * @param {number} a - The first number to find the greatest common divisor of.
     * @param {number} b - number = 0
     * @returns The greatest common divisor of a and b.
     */
    public static gcd(a: number, b: number): number {
        return this.greatestCommonDivisor(a, b);
    }

    /**
     * It returns the lowest common denominator of two numbers.
     * @param {number} a - number, b: number
     * @param {number} b - number - The second number to find the lowest common denominator of.
     * @returns The lowest common denominator of two numbers.
     */
    public static lowestCommonDenominator(a: number, b: number): number {
        const gcd = this.greatestCommonDivisor(a, b);
        return (a / gcd) * b;
    }

    /**
     * It returns the lowest common denominator of two numbers.
     * @param {number} a - number, b: number
     * @param {number} b - number - The second number to find the lowest common denominator of.
     * @returns The lowest common denominator of two numbers.
     */
    public static lcm(a: number, b: number): number {
        return this.lowestCommonDenominator(a, b);
    }

    /**
     * It takes an array of numbers, adds them together, divides the sum by the number of elements in
     * the array, and returns the result
     * @param {number[]} numbers - number[] - An array of numbers to average.
     * @returns The average of the numbers in the array.
     */
    public static average(numbers: number[]): number {
        return numbers.reduce((a, b) => a + b, 0) / numbers.length;
    }

    /**
     * It takes an array of numbers, adds them together, divides the sum by the number of elements in
     * the array, and returns the result
     * @param {number[]} numbers - number[] - An array of numbers to average.
     * @returns The average of the numbers in the array.
     */
    public static avg(numbers: number[]): number {
        return this.average(numbers);
    }

    /**
     * If the number is less than or equal to 1, return 1, otherwise return the number multiplied by
     * the factorial of the number minus 1
     * @param {number} num - number - The number to calculate the factorial of.
     * @returns The factorial of the number passed in.
     */
    public static factorial(num: number): number {
        return num <= 1 ? 1 : num * this.factorial(--num);
    }

    /**
     * @param {number[]} values - number[] - The array of numbers to get the median of.
     * @returns The median of the array.
     */
    public static median(values: number[]): number {
        const length = values.length;
        const middle = Math.floor(length / 2);

        if (length % 2 === 0) {
            return (ArrayUtils.quickselect(values, middle - 1) + ArrayUtils.quickselect(values, middle)) / 2;
        }

        return ArrayUtils.quickselect(values, middle);
    }
}