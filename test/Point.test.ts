import { Point, Vector2d } from "../src";

describe('Point', () => {
    describe('distanceTo', () => {
        test('computes Euclidean distance between two points', () => {
            const a = new Point(0, 0);
            const b = new Point(3, 4);
            expect(a.distanceTo(b)).toBeCloseTo(5, 6);
            expect(b.distanceTo(a)).toBeCloseTo(5, 6);
        });

        test('zero distance for identical points', () => {
            const p = new Point(1.2, -3.4);
            expect(p.distanceTo(p)).toBeCloseTo(0, 6);
        });
    });

    describe('slopeTo', () => {
        test('slope between (0,0) and (1,1) is 1', () => {
            const a = new Point(0, 0);
            const b = new Point(1, 1);
            expect(a.slopeTo(b)).toBeCloseTo(1, 12);
        });

        test('horizontal segment returns positive zero', () => {
            const a = new Point(0, 0);
            const b = new Point(1, 0);
            const slope = a.slopeTo(b);
            expect(Object.is(slope, 0)).toBe(true);
            expect(1 / slope).toBe(Number.POSITIVE_INFINITY);
        });

        test('vertical segment returns +Infinity', () => {
            const a = new Point(2, 3);
            const b = new Point(2, 10);
            expect(a.slopeTo(b)).toBe(Number.POSITIVE_INFINITY);
        });

        test('degenerate segment (same point) returns -Infinity', () => {
            const p = new Point(5, 5);
            expect(p.slopeTo(p)).toBe(Number.NEGATIVE_INFINITY);
        });
    });

    describe('midpointTo', () => {
        test('returns the midpoint between two points', () => {
            const a = new Point(1, 1);
            const b = new Point(3, 5);
            const mid = a.midpointTo(b);
            expect(mid.x).toBeCloseTo(2, 12);
            expect(mid.y).toBeCloseTo(3, 12);
        });

        test('midpoint with identical points equals the same point', () => {
            const p = new Point(-2, 7.5);
            const mid = p.midpointTo(p);
            expect(mid.x).toBeCloseTo(p.x, 12);
            expect(mid.y).toBeCloseTo(p.y, 12);
        });
    });

    describe('vectorTo', () => {
        test('returns a Vector2d instance with correct direction', () => {
            const a = new Point(1, 2);
            const b = new Point(4, 6);
            const v = a.vectorTo(b);
            expect(v).toBeInstanceOf(Vector2d);

            expect(v.magnitude()).toBeCloseTo(a.distanceTo(b), 6);
        });
    });

    describe('angleBetween', () => {
        test('orthogonal vectors return 90 degrees', () => {
            const center = new Point(0, 0);
            const p1 = new Point(1, 0);
            const p2 = new Point(0, 1);
            expect(center.angleBetween(p1, p2)).toBeCloseTo(90, 6);
        });

        test('colinear same direction returns 0 degrees', () => {
            const center = new Point(0, 0);
            const p1 = new Point(1, 1);
            const p2 = new Point(2, 2);
            expect(center.angleBetween(p1, p2)).toBeCloseTo(0, 6);
        });

        test('colinear opposite direction returns 180 degrees', () => {
            const center = new Point(0, 0);
            const p1 = new Point(1, 0);
            const p2 = new Point(-1, 0);
            expect(center.angleBetween(p1, p2)).toBeCloseTo(180, 6);
        });

        test('returns 0 if either vector has zero magnitude', () => {
            const center = new Point(1, 1);
            const same = new Point(1, 1); // zero-length vector
            const other = new Point(2, 2);
            expect(center.angleBetween(same, other)).toBeCloseTo(0, 6);
            expect(center.angleBetween(other, same)).toBeCloseTo(0, 6);
        });

        test('robustness for floating rounding: angle between nearly colinear vectors', () => {
            const center = new Point(0, 0);
            const p1 = new Point(1e-9, 1e-9);
            const p2 = new Point(2, 2);
            expect(center.angleBetween(p1, p2)).toBeCloseTo(0, 3);
        });
    });
});
