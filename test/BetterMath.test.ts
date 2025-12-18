import { Point } from '../src/Classes';
import BetterMath from '../src/Classes/BetterMath';

describe('BetterMath', () => {
	test('round should round a number to the specified number of decimal places', () => {
		expect(BetterMath.round(1.2345, 2)).toBe(1.23);
		expect(BetterMath.round(1.2345, 0)).toBe(1);
		expect(BetterMath.round(1.2345, -1)).toBe(1);
	});

	test('square should return the square of a number', () => {
		expect(BetterMath.square(3)).toBe(9);
		expect(BetterMath.square(-4)).toBe(16);
	});

	test('cube should return the cube of a number', () => {
		expect(BetterMath.cube(2)).toBe(8);
		expect(BetterMath.cube(-3)).toBe(-27);
	});

	test('distance should calculate total distance between points in a path', () => {
		const path = [
			new Point(0, 0),
			new Point(3, 4),
			new Point(6, 8)
		];
		expect(BetterMath.distance(path)).toBeCloseTo(10);
	});

	test('gcd should return the greatest common divisor of two numbers', () => {
		expect(BetterMath.gcd(12, 15)).toBe(3);
		expect(BetterMath.gcd(100, 25)).toBe(25);
	});

	test('lcd should return the least common denominator of two numbers', () => {
		expect(BetterMath.lcd(4, 5)).toBe(20);
		expect(BetterMath.lcd(6, 8)).toBe(24);
	});

	test('calculateAverage should return the average of numbers in an array', () => {
		expect(BetterMath.calculateAverage([1, 2, 3, 4, 5])).toBe(3);
	});

	test('factorial should return the factorial of a number', () => {
		expect(BetterMath.factorial(5)).toBe(120);
		expect(BetterMath.factorial(0)).toBe(1);
	});

	test('median should return the median of an array', () => {
		expect(BetterMath.median([1, 2, 3])).toBe(2);
		expect(BetterMath.median([1, 2, 3, 4])).toBe(2.5);
	});

	test('nthRoot should calculate the nth root of a number', () => {
		expect(BetterMath.nthRoot(27, 3)).toBe(3);
		expect(() => BetterMath.nthRoot(-8, 2)).toThrow('Cannot calculate even root of a negative number.');
	});

	test('logarithm should calculate the log of a number with a specified base', () => {
		expect(BetterMath.logarithm(8, 2)).toBe(3);
	});

	test('permutations should calculate the number of permutations', () => {
		expect(BetterMath.permutations(5, 2)).toBe(20);
	});

	test('combinations should calculate the number of combinations', () => {
		expect(BetterMath.combinations(5, 2)).toBe(10);
	});

	test('degreesToRadians should convert degrees to radians', () => {
		expect(BetterMath.degreesToRadians(180)).toBeCloseTo(Math.PI);
	});

	test('radiansToDegrees should convert radians to degrees', () => {
		expect(BetterMath.radiansToDegrees(Math.PI)).toBeCloseTo(180);
	});

	test('factorialWithMemoization should return factorial using memoization', () => {
		const memo = new Map();
		expect(BetterMath.factorialWithMemoization(5, memo)).toBe(120);
		expect(memo.get(5)).toBe(120);
	});

	test('countDecimalDigits should count decimal digits in a number', () => {
		expect(BetterMath.countDecimalDigits(1.234)).toBe(3);
		expect(BetterMath.countDecimalDigits(100)).toBe(0);
	});
});
