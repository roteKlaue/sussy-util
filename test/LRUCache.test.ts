import { LRUCache } from '../src';

describe('LRUCache', () => {
    let cache: LRUCache<string, number>;

    beforeEach(() => {
        cache = new LRUCache<string, number>(3);
    });

    test('throws error for non-positive capacity', () => {
        expect(() => new LRUCache<string, number>(0)).toThrow();
        expect(() => new LRUCache<string, number>(-1)).toThrow();
    });

    test('put and get store and retrieve values', () => {
        cache.put('a', 1);
        cache.put('b', 2);
        expect(cache.get('a')).toBe(1);
        expect(cache.get('b')).toBe(2);
        expect(cache.get('c')).toBeUndefined();
    });

    test('updates existing key and moves it to front', () => {
        cache.put('a', 1);
        cache.put('b', 2);
        cache.put('a', 3);
        expect(cache.get('a')).toBe(3);
        expect(cache.get('b')).toBe(2);
    });

    test('evicts least recently used item when over capacity', () => {
        cache.put('a', 1);
        cache.put('b', 2);
        cache.put('c', 3);
        cache.get('a');
        cache.put('d', 4);
        expect(cache.get('b')).toBeUndefined();
        expect(cache.get('a')).toBe(1);
        expect(cache.get('c')).toBe(3);
        expect(cache.get('d')).toBe(4);
    });

    test('eviction callback is called', () => {
        const evicted: [string, number][] = [];
        cache.setEvictionCallback((k, v) => evicted.push([k, v]));

        cache.put('a', 1);
        cache.put('b', 2);
        cache.put('c', 3);
        cache.put('d', 4);
        expect(evicted).toEqual([['a', 1]]);
    });

    test('remove deletes key', () => {
        cache.put('a', 1);
        cache.put('b', 2);
        expect(cache.remove('a')).toBe(true);
        expect(cache.get('a')).toBeUndefined();
        expect(cache.remove('c')).toBe(false);
    });

    test('clear removes all entries', () => {
        cache.put('a', 1);
        cache.put('b', 2);
        cache.clear();
        expect(cache.get('a')).toBeUndefined();
        expect(cache.get('b')).toBeUndefined();
        expect(cache.getAllKeys()).toEqual([]);
    });

    test('getAllKeys and getAllValues return arrays', () => {
        cache.put('a', 1);
        cache.put('b', 2);
        const keys = cache.getAllKeys();
        const values = cache.getAllValues();
        expect(keys.sort()).toEqual(['a', 'b']);
        expect(values.sort()).toEqual([1, 2]);
    });

    test('entries generator yields all entries', () => {
        cache.put('a', 1);
        cache.put('b', 2);
        const entries = Array.from(cache.entries());
        expect(entries).toEqual(expect.arrayContaining([['a', 1], ['b', 2]]));
    });

    test('access updates LRU order', () => {
        cache.put('a', 1);
        cache.put('b', 2);
        cache.put('c', 3);
        cache.get('a');
        cache.put('d', 4);
        expect(cache.get('b')).toBeUndefined();
        expect(cache.get('a')).toBe(1);
    });
});
