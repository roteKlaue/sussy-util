import { ArrayUtils, Point } from ".";

class BetterMath {
    private static instance: BetterMath = new BetterMath();
    private constructor() { }

    /**
     * Round a number to a specified number of decimal places.
     * @param {number} value - The number to round.
     * @param {number} digit - The number of digits to round to.
     * @returns The rounded value.
     */
    public round(value: number, digit: number): number {
        digit = Math.floor(digit);
        if (digit < 0) digit = 0;
        if (digit === 0) {
            return Math.round(value);
        }
        return Math.round(value * Math.pow(10, digit)) / Math.pow(10, digit);
    }

    /**
     * Calculate the square of a number.
     * @param {number} num - The number to calculate the square of.
     * @returns {number} The square of the number.
     */
    public square(num: number): number {
        return num * num;
    }

    public distance = (path: Point[], index: number = 0): number =>
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
    public greatestCommonDivisor(a: number, b: number): number {
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
    public gcd(a: number, b: number): number {
        return this.greatestCommonDivisor(a, b);
    }

    /**
     * It returns the lowest common denominator of two numbers.
     * @param {number} a - number, b: number
     * @param {number} b - number - The second number to find the lowest common denominator of.
     * @returns The lowest common denominator of two numbers.
     */
    public lowestCommonDenominator(a: number, b: number): number {
        const gcd = this.greatestCommonDivisor(a, b);
        return (a / gcd) * b;
    }

    /**
     * It returns the lowest common denominator of two numbers.
     * @param {number} a - number, b: number
     * @param {number} b - number - The second number to find the lowest common denominator of.
     * @returns The lowest common denominator of two numbers.
     */
    public lcm(a: number, b: number): number {
        return this.lowestCommonDenominator(a, b);
    }

    /**
     * It takes an array of numbers, adds them together, divides the sum by the number of elements in
     * the array, and returns the result
     * @param {number[]} numbers - number[] - An array of numbers to average.
     * @returns The average of the numbers in the array.
     */
    public average(numbers: number[]): number {
        return numbers.reduce((a, b) => a + b, 0) / numbers.length;
    }

    /**
     * It takes an array of numbers, adds them together, divides the sum by the number of elements in
     * the array, and returns the result
     * @param {number[]} numbers - number[] - An array of numbers to average.
     * @returns The average of the numbers in the array.
     */
    public avg(numbers: number[]): number {
        return this.average(numbers);
    }

    /**
     * If the number is less than or equal to 1, return 1, otherwise return the number multiplied by
     * the factorial of the number minus 1
     * @param {number} num - number - The number to calculate the factorial of.
     * @returns The factorial of the number passed in.
     */
    public factorial(num: number): number {
        return num <= 1 ? 1 : num * this.factorial(--num);
    }

    /**
     * @param {number[]} values - number[] - The array of numbers to get the median of.
     * @returns The median of the array.
     */
    public median(values: number[]): number {
        const length = values.length;
        const middle = Math.floor(length / 2);

        if (length % 2 === 0) {
            return (ArrayUtils.quickselect(values, middle - 1) + ArrayUtils.quickselect(values, middle)) / 2;
        }

        return ArrayUtils.quickselect(values, middle);
    }

    /**
     * Calculate the nth root of a number.
     * @param {number} number - The number.
     * @param {number} n - The root to calculate.
     * @returns {number} The nth root of the number.
     * @throws {Error} Cannot calculate even root of a negative number.
     */
    public nthRoot(number: number, n: number): number {
        if (number < 0 && n % 2 !== 1) {
            throw new Error("Cannot calculate even root of a negative number.");
        }
        return Math.pow(number, 1 / n);
    }

    /**
     * Calculate the logarithm of a number with a specified base.
     * @param {number} number - The number.
     * @param {number} base - The base of the logarithm.
     * @returns {number} The logarithm of the number with the specified base.
     */
    public logarithm(number: number, base: number): number {
        return Math.log(number) / Math.log(base);
    }

    /**
     * Calculate the number of permutations of r elements from a set of n elements.
     * @param {number} n - The total number of elements.
     * @param {number} r - The number of elements to select.
     * @returns {number} The number of permutations.
     * @throws {Error} n must be greater than or equal to r in permutations.
     */
    public permutations(n: number, r: number): number {
        if (n < r) {
            throw new Error("n must be greater than or equal to r in permutations.");
        }
        let result = 1;
        for (let i = n; i > n - r; i--) {
            result *= i;
        }
        return result;
    }

    /**
     * Calculate the number of combinations of r elements from a set of n elements.
     * @param {number} n - The total number of elements.
     * @param {number} r - The number of elements to select.
     * @returns {number} The number of combinations.
     * @throws {Error} n must be greater than or equal to r in combinations.
     */
    public combinations(n: number, r: number): number {
        if (n < r) {
            throw new Error("n must be greater than or equal to r in combinations.");
        }
        return this.permutations(n, r) / this.factorial(r);
    }

    /**
     * Convert degrees to radians.
     * @param {number} degrees - The value in degrees.
     * @returns {number} The value in radians.
     */
    public degreesToRadians(degrees: number): number {
        return (degrees * Math.PI) / 180;
    }
   
    /**
     * Convert radians to degrees.
     * @param {number} radians - The value in radians.
     * @returns {number} The value in degrees.
     */
    public radiansToDegrees(radians: number): number {
        return (radians * 180) / Math.PI;
    }

    /**
     * Get the instance of the BetterMath class (Singleton pattern).
     * @returns {BetterMath} The instance of the BetterMath class.
     */
    public static getInstance(): BetterMath {
        return this.instance;
    }
}

export default BetterMath.getInstance();