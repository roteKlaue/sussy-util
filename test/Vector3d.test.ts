import { Vector2d, Vector3d } from "../src";

describe('Vector3d', () => {
  describe('construction & clone', () => {
    test('defaults to (0,0,0) and clone returns equal but distinct instance', () => {
      const v = new Vector3d();
      expect(v.x).toBe(0);
      expect(v.y).toBe(0);
      expect(v.z).toBe(0);

      const c = v.clone();
      expect(c).not.toBe(v);
      expect(c.equals(v)).toBe(true);
    });

    test('construct with values', () => {
      const v = new Vector3d(1, 2, 3);
      expect(v.x).toBe(1);
      expect(v.y).toBe(2);
      expect(v.z).toBe(3);
    });
  });

  describe('arithmetic', () => {
    test('add and subtract produce expected results', () => {
      const a = new Vector3d(1, 2, 3);
      const b = new Vector3d(4, 5, 6);
      expect(a.add(b)).toEqual(new Vector3d(5, 7, 9));
      expect(b.subtract(a)).toEqual(new Vector3d(3, 3, 3));
    });

    test('multiply and divide by scalar', () => {
      const v = new Vector3d(2, -3, 4);
      expect(v.multiply(3)).toEqual(new Vector3d(6, -9, 12));
      expect(v.divide(2)).toEqual(new Vector3d(1, -1.5, 2));
    });

    test('divide by zero throws', () => {
      const v = new Vector3d(1, 1, 1);
      expect(() => v.divide(0)).toThrow(Error);
      expect(() => v.divide(0)).toThrow(/Cannot divide by zero/i);
    });
  });

  describe('magnitude & normalize', () => {
    test('magnitude computes Euclidean length', () => {
      const v = new Vector3d(1, 2, 2);
      // sqrt(1 + 4 + 4) = 3
      expect(v.magnitude()).toBeCloseTo(3, 12);
    });

    test('normalize returns unit vector and preserves direction', () => {
      const v = new Vector3d(0, 3, 4);
      const n = v.normalize();
      expect(n.magnitude()).toBeCloseTo(1, 12);
      expect(n.x).toBeCloseTo(0 / 5, 12);
      expect(n.y).toBeCloseTo(3 / 5, 12);
      expect(n.z).toBeCloseTo(4 / 5, 12);
    });

    test('normalize of zero vector throws', () => {
      const z = new Vector3d(0, 0, 0);
      expect(() => z.normalize()).toThrow(Error);
      expect(() => z.normalize()).toThrow(/Cannot normalize a zero vector/i);
    });
  });

  describe('dot & cross product', () => {
    test('dot product works', () => {
      const a = new Vector3d(1, 2, 3);
      const b = new Vector3d(4, -5, 6);
      expect(a.dotProduct(b)).toBe(1 * 4 + 2 * -5 + 3 * 6);
    });

    test('cross product of orthonormal basis', () => {
      const i = new Vector3d(1, 0, 0);
      const j = new Vector3d(0, 1, 0);
      const k = new Vector3d(0, 0, 1);

      expect(i.crossProduct(j)).toEqual(k);
      expect(j.crossProduct(k)).toEqual(i);
      expect(k.crossProduct(i)).toEqual(j);
    });

    test('cross product of parallel vectors is zero vector', () => {
      const a = new Vector3d(1, 2, 3);
      const b = new Vector3d(2, 4, 6); // parallel (scalar 2)
      expect(a.crossProduct(b)).toEqual(new Vector3d(0, 0, 0));
    });
  });

  describe('angleTo', () => {
    test('angle between orthogonal vectors is PI/2', () => {
      const a = new Vector3d(1, 0, 0);
      const b = new Vector3d(0, 1, 0);
      expect(a.angleTo(b)).toBeCloseTo(Math.PI / 2, 12);
    });

    test('angle between opposite vectors is PI', () => {
      const a = new Vector3d(1, 0, 0);
      const b = new Vector3d(-1, 0, 0);
      expect(a.angleTo(b)).toBeCloseTo(Math.PI, 12);
    });

    test('angle between same-direction vectors is ~0', () => {
      const a = new Vector3d(2, 2, 2);
      const b = new Vector3d(4, 4, 4);
      expect(a.angleTo(b)).toBeCloseTo(0, 12);
    });

    test('angle involving a zero-length vector yields NaN', () => {
      const a = new Vector3d(1, 0, 0);
      const z = new Vector3d(0, 0, 0);
      expect(Number.isNaN(a.angleTo(z))).toBe(true);
      expect(Number.isNaN(z.angleTo(a))).toBe(true);
    });
  });

  describe('parallel & perpendicular checks', () => {
    test('isParallelTo returns true for proportional non-zero vectors', () => {
      const a = new Vector3d(2, 4, 6);
      const b = new Vector3d(1, 2, 3); // a === 2 * b
      expect(a.isParallelTo(b)).toBe(true);
      expect(b.isParallelTo(a)).toBe(true);
    });

    test('isParallelTo returns false for non-proportional vectors', () => {
      const a = new Vector3d(1, 0, 0);
      const b = new Vector3d(0, 1, 1);
      expect(a.isParallelTo(b)).toBe(false);
    });

    test('isPerpendicularTo uses dot product equality to zero', () => {
      const a = new Vector3d(1, 0, 0);
      const b = new Vector3d(0, 1, 0);
      expect(a.isPerpendicularTo(b)).toBe(true);

      const c = new Vector3d(1, 1, 0);
      expect(a.isPerpendicularTo(c)).toBe(false);
    });
  });

  describe('utils & equality', () => {
    test('abs returns absolute components', () => {
      const v = new Vector3d(-3, 4, -5);
      expect(v.abs()).toEqual(new Vector3d(3, 4, 5));
    });

    test('equals checks all three components strictly', () => {
      expect(new Vector3d(1, 2, 3).equals(new Vector3d(1, 2, 3))).toBe(true);
      expect(new Vector3d(1, 2, 3).equals(new Vector3d(1, 2, 3.0000001))).toBe(false);
    });

    test('toArray and toString', () => {
      const v = new Vector3d(5, -6, 7);
      expect(v.toArray()).toEqual([5, -6, 7]);
      expect(v.toString()).toBe('(5, -6, 7)');
    });
  });

  describe('static constructors', () => {
    test('ofArray creates vector from array length 3', () => {
      const v = Vector3d.ofArray([3, 4, 12]);
      expect(v).toEqual(new Vector3d(3, 4, 12));
      expect(v.magnitude()).toBeCloseTo(13, 12); // 3-4-12 -> sqrt(9+16+144)=13
    });

    test('ofArray throws for invalid lengths', () => {
      expect(() => Vector3d.ofArray([])).toThrow(Error);
      expect(() => Vector3d.ofArray([1, 2])).toThrow(/Invalid array length|three elements/i);
      expect(() => Vector3d.ofArray([1, 2, 3, 4])).toThrow(Error);
    });

    test('of2d constructs from a Vector2d (z defaults to 0)', () => {
      const v2 = new Vector2d(9, 10);
      const v3 = Vector3d.of2d(v2);
      expect(v3).toEqual(new Vector3d(9, 10, 0));
    });
  });
});