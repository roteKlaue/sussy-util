import { Tuple } from "../src";

describe('Tuple', () => {
    test('constructs and exposes first/second', () => {
        const t = new Tuple(1, 'a');
        expect(t.first).toBe(1);
        expect(t.second).toBe('a');
    });

    test('is frozen (immutable) at runtime: cannot change properties or add new ones', () => {
        const t: any = new Tuple(2, 3);
        expect(Object.isFrozen(t)).toBe(true);

        try {
            t.first = 999;
        } catch {
        }
        expect(t.first).toBe(2);

        expect(() => {
            (t as any).extra = 'nope';
        }).toThrow();
        expect((t as any).extra).toBeUndefined();
    });

    test('swap returns a new Tuple with elements swapped', () => {
        const t = new Tuple('left', 'right');
        const s = t.swap();
        expect(s).toBeInstanceOf(Tuple);
        expect(s.first).toBe('right');
        expect(s.second).toBe('left');

        expect(t.first).toBe('left');
        expect(t.second).toBe('right');

        expect(s).not.toBe(t);
    });

    test('contains finds values in first or second', () => {
        const t = new Tuple(10, 20);
        expect(t.contains(10)).toBe(true);
        expect(t.contains(20)).toBe(true);
        expect(t.contains(30)).toBe(false);
    });

    test('toString returns expected format', () => {
        expect(new Tuple(1, 2).toString()).toBe('(1, 2)');
        expect(new Tuple('x', 'y').toString()).toBe('(x, y)');
    });

    describe('equals', () => {
        test('equals returns true for tuple with same primitive elements', () => {
            const a = new Tuple(1, 2);
            const b = new Tuple(1, 2);
            expect(a.equals(b)).toBe(true);
        });

        test('equals returns false for different values', () => {
            const a = new Tuple(1, 2);
            const b = new Tuple(2, 1);
            expect(a.equals(b)).toBe(false);
        });

        test('equals uses strict equality for objects (identity)', () => {
            const obj = { foo: 'bar' };
            const a = new Tuple(obj, 5);
            const b = new Tuple(obj, 5);
            const c = new Tuple({ foo: 'bar' }, 5);

            expect(a.equals(b)).toBe(true);
            expect(a.equals(c)).toBe(false);
        });

        test('equals returns false when comparing to non-Tuple or null/undefined', () => {
            const t = new Tuple(1, 2);
            const notTuple: any = { first: 1, second: 2 };
            expect(t.equals(notTuple)).toBe(false);
            expect(t.equals(null)).toBe(false);
            expect(t.equals(undefined)).toBe(false);
            expect(t.equals(42)).toBe(false);
        });

        test('equals is symmetric for tuples with same values', () => {
            const a = new Tuple('a', 'b');
            const b = new Tuple('a', 'b');
            expect(a.equals(b)).toBe(true);
            expect(b.equals(a)).toBe(true);
        });
    });
});
