import BetterMath from '../src/Classes/BetterMath';

describe('BetterMath', () => {
	test('round', () => {
		expect(BetterMath.round(3.14159, 2)).toBe(3.14);
	});

	test('square', () => {
		expect(BetterMath.square(5)).toBe(25);
	});
});