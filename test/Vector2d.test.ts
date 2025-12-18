import { Vector2d, Tuple } from "../src";

describe('Vector2d', () => {
  describe('construction & clone', () => {
    test('defaults to (0,0) and clone returns equal but distinct instance', () => {
      const v = new Vector2d();
      expect(v.x).toBe(0);
      expect(v.y).toBe(0);

      const c = v.clone();
      expect(c).not.toBe(v);
      expect(c.equals(v)).toBe(true);
    });

    test('construct with values', () => {
      const v = new Vector2d(3, 4);
      expect(v.x).toBe(3);
      expect(v.y).toBe(4);
    });
  });

  describe('arithmetic', () => {
    test('add and subtract produce expected results', () => {
      const a = new Vector2d(1, 2);
      const b = new Vector2d(3, 4);
      expect(a.add(b)).toEqual(new Vector2d(4, 6));
      expect(b.subtract(a)).toEqual(new Vector2d(2, 2));
    });

    test('multiply and divide by scalar', () => {
      const v = new Vector2d(2, -3);
      expect(v.multiply(3)).toEqual(new Vector2d(6, -9));
      expect(v.divide(2)).toEqual(new Vector2d(1, -1.5));
    });

    test('divide by zero throws', () => {
      const v = new Vector2d(1, 1);
      expect(() => v.divide(0)).toThrow(Error);
      expect(() => v.divide(0)).toThrow(/divide by zero|Cannot divide by zero/i);
    });
  });

  describe('magnitude & normalize', () => {
    test('magnitude computes Euclidean length', () => {
      const v = new Vector2d(3, 4);
      expect(v.magnitude()).toBeCloseTo(5, 12);
    });

    test('normalize returns unit vector and preserves direction', () => {
      const v = new Vector2d(3, 4);
      const n = v.normalize();
      expect(n.magnitude()).toBeCloseTo(1, 12);
      expect(n.x).toBeCloseTo(3 / 5, 12);
      expect(n.y).toBeCloseTo(4 / 5, 12);
    });

    test('normalize of zero vector throws', () => {
      const z = new Vector2d(0, 0);
      expect(() => z.normalize()).toThrow(Error);
      expect(() => z.normalize()).toThrow(/zero vector|Cannot normalize/i);
    });
  });

  describe('dot, distance, angle', () => {
    test('dot product works', () => {
      const a = new Vector2d(1, 2);
      const b = new Vector2d(3, 4);
      expect(a.dotProduct(b)).toBe(1 * 3 + 2 * 4);
    });

    test('distanceTo equals Euclidean distance', () => {
      const a = new Vector2d(-1, 0);
      const b = new Vector2d(2, 4);
      const dx = 2 - (-1);
      const dy = 4 - 0;
      expect(a.distanceTo(b)).toBeCloseTo(Math.sqrt(dx * dx + dy * dy), 12);
    });

    test('angleTo between orthogonal vectors is PI/2', () => {
      const right = new Vector2d(1, 0);
      const up = new Vector2d(0, 1);
      expect(right.angleTo(up)).toBeCloseTo(Math.PI / 2, 12);
    });

    test('angleTo between opposite vectors is PI', () => {
      const a = new Vector2d(1, 0);
      const b = new Vector2d(-1, 0);
      expect(a.angleTo(b)).toBeCloseTo(Math.PI, 12);
    });

    test('angleTo involving zero-length vector yields NaN', () => {
      const a = new Vector2d(1, 0);
      const z = new Vector2d(0, 0);
      const angle = a.angleTo(z);
      expect(Number.isNaN(angle)).toBe(true);
    });

    test('angleTo for same direction returns ~0', () => {
      const a = new Vector2d(2, 2);
      const b = new Vector2d(4, 4);
      expect(a.angleTo(b)).toBeCloseTo(0, 12);
    });
  });

  describe('utility & equality', () => {
    test('abs returns absolute components', () => {
      const v = new Vector2d(-3, 4);
      expect(v.abs()).toEqual(new Vector2d(3, 4));
    });

    test('equals checks both components strictly', () => {
      expect(new Vector2d(1, 2).equals(new Vector2d(1, 2))).toBe(true);
      expect(new Vector2d(1, 2).equals(new Vector2d(1, 2.0000001))).toBe(false);
    });

    test('toString and toArray', () => {
      const v = new Vector2d(5, -6);
      expect(v.toString()).toBe('(5, -6)');
      expect(v.toArray()).toEqual([5, -6]);
    });

    test('toTuple returns a Tuple with first and second', () => {
      const v = new Vector2d(7, 8);
      const t = v.toTuple();
      expect(t.first).toBe(7);
      expect(t.second).toBe(8);
      expect(Vector2d.ofTuple(t)).toEqual(new Vector2d(7, 8));
    });
  });

  describe('static constructors', () => {
    test('ofArray creates vector from array length 2', () => {
      const v = Vector2d.ofArray([3, 4]);
      expect(v).toEqual(new Vector2d(3, 4));
      expect(v.magnitude()).toBeCloseTo(5, 12);
    });

    test('ofArray throws for invalid lengths', () => {
      expect(() => Vector2d.ofArray([])).toThrow(Error);
      expect(() => Vector2d.ofArray([1, 2, 3])).toThrow(Error);
      expect(() => Vector2d.ofArray([1])).toThrow(/Invalid array length|Array must contain/i);
    });

    test('ofTuple constructs from Tuple', () => {
      const t = new Tuple(9, 10);
      const v = Vector2d.ofTuple(t);
      expect(v).toEqual(new Vector2d(9, 10));
    });
  });
});
