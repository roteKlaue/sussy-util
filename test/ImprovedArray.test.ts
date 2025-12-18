import ImprovedArray from '../src/Classes/ImprovedArray';

describe('ImprovedArray', () => {
	let arr: ImprovedArray<number>;

	beforeEach(() => {
		arr = new ImprovedArray(1, 2, 3, 4, 5);
	});

	it('should get a random index within bounds', () => {
		const randomIndex = arr.getRandomIndex();
		expect(randomIndex).toBeGreaterThanOrEqual(0);
		expect(randomIndex).toBeLessThan(arr.length);
	});

	it('should get a random element from the array', () => {
		const randomElement = arr.getRandomElement();
		expect(arr.includes(randomElement)).toBe(true);
	});

	it('should remove an element at a specified index', () => {
		const removed = arr.remove(2);
		expect(removed.isPresent()).toBe(true);
		expect(removed.get()).toBe(3);
		expect(arr).toEqual([1, 2, 4, 5]);
	});

	it('should not remove an element if the index is out of bounds', () => {
		const removed = arr.remove(10);
		expect(removed.isPresent()).toBe(false);
		expect(arr).toEqual([1, 2, 3, 4, 5]);
	});

	it('should insert elements at a specified index', () => {
		arr.insertAt(2, 6, 7);
		expect(arr).toEqual([1, 2, 6, 7, 3, 4, 5]);
	});

	it('should clear the array', () => {
		arr.clear();
		expect(arr.isEmpty()).toBe(true);
	});

	it('should clone the array', () => {
		const clone = arr.clone();
		expect(clone).toEqual(arr);
		expect(clone).not.toBe(arr);
	});

	it('should check if array is empty', () => {
		expect(arr.isEmpty()).toBe(false);
		arr.clear();
		expect(arr.isEmpty()).toBe(true);
	});

	it('should return elements that do not satisfy the predicate', () => {
		const rejected = arr.rejected(val => val > 3);
		expect(rejected).toEqual([1, 2, 3]);
	});

	it('should remove duplicate elements', () => {
		arr.push(1, 2, 3);
		arr.removeDuplicates();
		expect(arr).toEqual([1, 2, 3, 4, 5]);
	});

	it('should count occurrences of a value', () => {
		arr.push(2, 2);
		expect(arr.countOccurrences(2)).toBe(3);
	});

	it('should return JSON string representation', () => {
		const jsonString = arr.toJSONString();
		expect(jsonString).toBe('[1,2,3,4,5]');
	});

	it('should shuffle the array', () => {
		const original = arr.clone();
		arr.shuffle();
		expect(arr).not.toEqual(original);
		expect(arr.sort()).toEqual(original.sort());
	});

	it('should find common elements between arrays', () => {
		const common = arr.findCommonElements([3, 4, 5, 6, 7]);
		expect(common).toEqual([3, 4, 5]);
	});

	it('should deep clone the array', () => {
		const deepClone = arr.deepClone();
		expect(deepClone).toEqual(arr);
		expect(deepClone).not.toBe(arr);
	});
});
