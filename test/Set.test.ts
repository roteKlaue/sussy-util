import { Optional, Set } from '../src';

describe('Custom Set', () => {
    let set: Set<number>;

    beforeEach(() => {
        set = new Set([1, 2, 3]);
    });

    test('initializes with unique items', () => {
        const s = new Set([1, 2, 2, 3]);
        expect(s.length()).toBe(3);
    });

    test('push adds items if not already present', () => {
        set.push(4);
        expect(set.has(4)).toBe(true);
        expect(set.length()).toBe(4);

        set.push(4); // duplicate
        expect(set.length()).toBe(4);
    });

    test('delete removes items', () => {
        expect(set.delete(2)).toBe(true);
        expect(set.has(2)).toBe(false);
        expect(set.delete(5)).toBe(false);
    });

    test('get returns Optional', () => {
        expect(set.get(1).orElse(-1)).toBe(2);
        expect(!set.get(-1).isPresent()).toBe(true);
        expect(!set.get(100).isPresent()).toBe(true);
    });

    test('isEmpty works correctly', () => {
        expect(set.isEmpty()).toBe(false);
        set.clear();
        expect(set.isEmpty()).toBe(true);
    });

    test('length returns correct size', () => {
        expect(set.length()).toBe(3);
        set.push(4);
        expect(set.length()).toBe(4);
    });

    test('clear removes all items', () => {
        set.clear();
        expect(set.length()).toBe(0);
    });

    test('clone creates a copy', () => {
        const clone = set.clone();
        expect(clone.toArray()).toEqual(set.toArray());
        clone.push(5);
        expect(clone.has(5)).toBe(true);
        expect(set.has(5)).toBe(false);
    });

    test('remove by index', () => {
        expect(set.remove(1)).toBe(true);
        expect(set.length()).toBe(2);
        expect(set.remove(100)).toBe(false);
        expect(set.remove(-1)).toBe(false);
    });

    test('toArray returns array', () => {
        expect(set.toArray()).toEqual([1, 2, 3]);
    });

    test('changeCheckFunction changes equality logic', () => {
        set.changeCheckFunction((a, b) => Math.abs(a) === Math.abs(b));
        expect(set.has(-2)).toBe(true);
    });

    test('toString and toJSONString', () => {
        expect(set.toString()).toContain('Set:');
        expect(typeof set.toJSONString()).toBe('string');
    });

    test('forEach and each', () => {
        const spy = jest.fn();
        set.forEach(spy);
        expect(spy).toHaveBeenCalledTimes(set.length());

        const spy2 = jest.fn();
        set.each(spy2);
        expect(spy2).toHaveBeenCalledTimes(set.length());
    });

    test('merge combines two sets', () => {
        const other = new Set([3, 4, 5]);
        const merged = set.merge(other);
        expect(merged.toArray()).toEqual([1, 2, 3, 4, 5]);
    });

    test('subtract removes items from another set', () => {
        const other = new Set([2, 3]);
        const subtracted = set.subtract(other);
        expect(subtracted.toArray()).toEqual([1]);
    });

    test('filter works correctly', () => {
        const filtered = set.filter((item) => item > 1);
        expect(filtered.toArray()).toEqual([2, 3]);
    });

    test('reduce works correctly', () => {
        const sum = set.reduce((acc, curr) => acc + curr, 0);
        expect(sum).toBe(6);
    });

    test('map returns new set with transformed items', () => {
        const mapped = set.map((item) => item * 2);
        expect(mapped.toArray()).toEqual([2, 4, 6]);
    });

    test('intersection returns common items', () => {
        const other = new Set([2, 3, 4]);
        const intersection = set.intersection(other);
        expect(intersection.toArray()).toEqual([2, 3]);
    });

    test('union combines items', () => {
        const other = new Set([3, 4]);
        const union = set.union(other);
        expect(union.toArray()).toEqual([1, 2, 3, 4]);
    });

    test('symmetricDifference returns non-common items', () => {
        const other = new Set([2, 3, 4]);
        const symDiff = set.symmetricDifference(other);
        expect(symDiff.toArray()).toEqual([1, 4]);
    });

    test('Symbol.iterator allows iteration', () => {
        const iterated: number[] = [];
        for (const val of set) {
            iterated.push(val);
        }
        expect(iterated).toEqual([1, 2, 3]);
    });
});
