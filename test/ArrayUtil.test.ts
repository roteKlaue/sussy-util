import { ArrayUtils } from '../src/Classes';

describe('ArrayUtils', () => {

	it('should flatten a nested array', () => {
		const nestedArray = [1, [2, 3], [4, [5, 6]]];
		const flattenedArray = ArrayUtils.flat(nestedArray);
		expect(flattenedArray).toEqual([1, 2, 3, 4, 5, 6]);
	});

	it('should return the intersection of two arrays', () => {
		const array1 = [1, 2, 3, 4];
		const array2 = [3, 4, 5, 6];
		const intersection = ArrayUtils.intersection(array1, array2);
		expect(intersection).toEqual([3, 4]);
	});

	it('should return the union of two arrays', () => {
		const array1 = [1, 2, 3];
		const array2 = [3, 4, 5];
		const union = ArrayUtils.union(array1, array2);
		expect(union).toEqual([1, 2, 3, 4, 5]);
	});

	it('should return the difference of two arrays', () => {
		const array1 = [1, 2, 3, 4];
		const array2 = [3, 4, 5, 6];
		const difference = ArrayUtils.difference(array1, array2);
		expect(difference).toEqual([1, 2]);
	});

	it('should shuffle an array in place', () => {
		const array = [1, 2, 3, 4, 5];
		const originalArray = [...array];
		ArrayUtils.shuffle(array);
		expect(array).not.toEqual(originalArray); // The array should be shuffled
		expect(array.sort()).toEqual(originalArray.sort()); // But it should still contain the same elements
	});

	it('should count occurrences of a value in an array', () => {
		const array = [1, 2, 2, 3, 3, 3];
		const count = ArrayUtils.countOccurrences(array, 2);
		expect(count).toBe(2);
	});

	it('should clear an array', () => {
		const array = [1, 2, 3];
		ArrayUtils.clear(array);
		expect(array).toEqual([]);
	});

	it('should clone an array', () => {
		const array = [1, 2, 3];
		const clonedArray = ArrayUtils.clone(array);
		expect(clonedArray).toEqual(array);
		expect(clonedArray).not.toBe(array); // Ensure it's a different reference
	});

	it('should deep clone an array', () => {
		const array = [{ a: 1 }, { b: 2 }];
		const deepClonedArray = ArrayUtils.deepClone(array);
		expect(deepClonedArray).toEqual(array);
		expect(deepClonedArray).not.toBe(array); // Ensure it's a different reference
		expect(deepClonedArray[0]).not.toBe(array[0]); // Ensure deep cloning
	});

	it('should remove duplicates from an array', () => {
		const array = [1, 2, 2, 3, 4, 4];
		const uniqueArray = ArrayUtils.removeDuplicates(array);
		expect(uniqueArray).toEqual([1, 2, 3, 4]);
	});

	it('should sort an array by a key', () => {
		const array = [{ a: 3 }, { a: 1 }, { a: 2 }];
		const sortedArray = ArrayUtils.sortByKey(array, 'a');
		expect(sortedArray).toEqual([{ a: 1 }, { a: 2 }, { a: 3 }]);
	});

	it('should remove an item from an array', () => {
		const array = [1, 2, 3, 4];
		const newArray = ArrayUtils.remove(array, 3);
		expect(newArray).toEqual([1, 2, 4]);
	});

	it('should zip two arrays', () => {
		const array1 = [1, 2, 3];
		const array2 = ['a', 'b', 'c'];
		const zipped = ArrayUtils.zip(array1, array2);
		expect(zipped).toEqual([[1, 'a'], [2, 'b'], [3, 'c']]);
	});

	it('should insert items into an array at a specific index', () => {
		const array = [1, 2, 4, 5];
		const newArray = ArrayUtils.insert(array, 2, 3);
		expect(newArray).toEqual([1, 2, 3, 4, 5]);
	});

	it('should return unique sub-arrays', () => {
		const array = [[1, 2], [1, 2], [3, 4]];
		const uniqueSubArrays = ArrayUtils.uniqueSubArrays(array);
		expect(uniqueSubArrays).toEqual([[1, 2], [3, 4]]);
	});

	it('should return the k-th smallest element using quickSelect', () => {
		const array = [3, 1, 2, 4, 5];
		const kthSmallest = ArrayUtils.quickSelect(array, 2);
		expect(kthSmallest).toBe(2);
	});

	it('should sort an array using quickSort', () => {
		const array = [3, 1, 4, 1, 5];
		const sortedArray = ArrayUtils.quickSort(array, (a, b) => a - b);
		expect(sortedArray).toEqual([1, 1, 3, 4, 5]);
	});

	it('should chunk an array into smaller arrays', () => {
		const array = [1, 2, 3, 4, 5];
		const chunks = ArrayUtils.chunks(array, 2);
		expect(chunks).toEqual([[1, 2], [3, 4], [5]]);
	});

	it('should find an element by property value using findByPropertyValue', () => {
		const array = [{ a: 1 }, { a: 2 }, { a: 3 }];
		const found = ArrayUtils.findByPropertyValue(array, 'a', 2);
		expect(found.isPresent()).toBe(true);
		expect(found.get()).toEqual({ a: 2 });
	});

	it('should return undefined if the property value is not found using findByPropertyValue', () => {
		const array = [{ a: 1 }, { a: 2 }, { a: 3 }];
		const found = ArrayUtils.findByPropertyValue(array, 'a', 4);
		expect(found.isPresent()).toBe(false);
	});

	it('should return the index of the first occurrence by property value using findIndexByPropertyValue', () => {
		const array = [{ a: 1 }, { a: 2 }, { a: 3 }];
		const index = ArrayUtils.findIndexByPropertyValue(array, 'a', 2);
		expect(index).toBe(1);
	});

	it('should return -1 if the property value is not found using findIndexByPropertyValue', () => {
		const array = [{ a: 1 }, { a: 2 }, { a: 3 }];
		const index = ArrayUtils.findIndexByPropertyValue(array, 'a', 4);
		expect(index).toBe(-1);
	});

	it('should find all indices that match a condition using findAllIndices', () => {
		const array = [1, 2, 3, 2, 4];
		const indices = ArrayUtils.findAllIndices(array, x => x === 2);
		expect(indices).toEqual([1, 3]);
	});

});

