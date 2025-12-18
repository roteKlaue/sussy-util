import { Point3d, Vector3d } from "../src"

describe('Point3d', () => {
  describe('distanceTo', () => {
    test('computes 3D Euclidean distance', () => {
      const a = new Point3d(0, 0, 0);
      const b = new Point3d(1, 2, 2);
      expect(a.distanceTo(b)).toBeCloseTo(3, 12);
      expect(b.distanceTo(a)).toBeCloseTo(3, 12);
    });

    test('zero distance for identical points', () => {
      const p = new Point3d(1, -1, 0.5);
      expect(p.distanceTo(p)).toBeCloseTo(0, 12);
    });
  });

  describe('slopeTo', () => {
    test('degenerate segment (same point) returns -Infinity', () => {
      const p = new Point3d(2, 3, 4);
      expect(p.slopeTo(p)).toBe(Number.NEGATIVE_INFINITY);
    });

    test('vertical along z (dx and dy zero, dz nonzero) returns +Infinity', () => {
      const a = new Point3d(1, 1, 1);
      const b = new Point3d(1, 1, 5);
      expect(a.slopeTo(b)).toBe(Number.POSITIVE_INFINITY);
    });

    test('regular slope computed as dz / sqrt(dx^2 + dy^2)', () => {
      const a = new Point3d(0, 0, 0);
      const b = new Point3d(3, 4, 5);
      expect(a.slopeTo(b)).toBeCloseTo(1, 12);
    });

    test('horizontal (dz = 0) returns +0 (positive zero)', () => {
      const a = new Point3d(0, 0, 0);
      const b = new Point3d(1, 1, 0);
      const slope = a.slopeTo(b);
      expect(Object.is(slope, 0)).toBe(true);
      expect(1 / slope).toBe(Number.POSITIVE_INFINITY);
    });
  });

  describe('midpointTo', () => {
    test('returns midpoint between two points', () => {
      const a = new Point3d(1, 2, 3);
      const b = new Point3d(3, 4, 5);
      const mid = a.midpointTo(b);
      expect(mid.x).toBeCloseTo(2, 12);
      expect(mid.y).toBeCloseTo(3, 12);
      expect(mid.z).toBeCloseTo(4, 12);
    });

    test('midpoint of identical points equals the point', () => {
      const p = new Point3d(-1, -2, -3);
      const mid = p.midpointTo(p);
      expect(mid.x).toBeCloseTo(p.x, 12);
      expect(mid.y).toBeCloseTo(p.y, 12);
      expect(mid.z).toBeCloseTo(p.z, 12);
    });
  });

  describe('vectorTo', () => {
    test('returns Vector3d instance with correct components and magnitude equals distance', () => {
      const a = new Point3d(1, 1, 1);
      const b = new Point3d(4, 5, 6);
      const v = a.vectorTo(b);
      expect(v).toBeInstanceOf(Vector3d);
      expect(v.x).toBe(3);
      expect(v.y).toBe(4);
      expect(v.z).toBe(5);
      expect(v.magnitude()).toBeCloseTo(a.distanceTo(b), 12);
    });
  });

  describe('angleBetween', () => {
    test('orthogonal vectors return 90 degrees', () => {
      const origin = new Point3d(0, 0, 0);
      const p1 = new Point3d(1, 0, 0);
      const p2 = new Point3d(0, 1, 0);
      expect(origin.angleBetween(p1, p2)).toBeCloseTo(90, 6);
    });

    test('colinear same direction returns 0 degrees', () => {
      const origin = new Point3d(0, 0, 0);
      const p1 = new Point3d(1, 1, 1);
      const p2 = new Point3d(2, 2, 2);
      expect(origin.angleBetween(p1, p2)).toBeCloseTo(0, 6);
    });

    test('colinear opposite direction returns 180 degrees', () => {
      const origin = new Point3d(0, 0, 0);
      const p1 = new Point3d(1, 0, 0);
      const p2 = new Point3d(-1, 0, 0);
      expect(origin.angleBetween(p1, p2)).toBeCloseTo(180, 6);
    });

    test('returns 0 if either vector has zero magnitude', () => {
      const center = new Point3d(1, 1, 1);
      const same = new Point3d(1, 1, 1); // zero-length vector
      const other = new Point3d(2, 2, 2);
      expect(center.angleBetween(same, other)).toBeCloseTo(0, 6);
      expect(center.angleBetween(other, same)).toBeCloseTo(0, 6);
    });

    test('robustness for very small magnitudes: uses EPSILON check path', () => {
      const c = new Point3d(0, 0, 0);
      const tiny = new Point3d(Number.EPSILON / 2, 0, 0);
      const p = new Point3d(1, 0, 0);
      const angle = c.angleBetween(tiny, p);
      expect(angle).toBeCloseTo(0, 6);
    });
  });
});