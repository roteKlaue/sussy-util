import Vector3d from './Vector3d';

export default class Point3d {
  /**
   * Creates a new Point3d instance.
   * @param {number} x - The x-coordinate of the point.
   * @param {number} y - The y-coordinate of the point.
   * @param {number} z - The z-coordinate of the point.
   */
  public constructor(
    public readonly x: number,
    public readonly y: number,
    public readonly z: number,
  ) {}

  /**
   * Calculates the distance between this point and another point in 3D space.
   * @param {Point3d} other - The other point to calculate the distance to.
   * @returns {number} The distance between the two points.
   */
  public distanceTo(other: Point3d): number {
    const dx = this.x - other.x;
    const dy = this.y - other.y;
    const dz = this.z - other.z;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
  }

  /**
   * Calculates the slope between this point and another point in 3D space.
   * @param {Point3d} other - The other point to calculate the slope to.
   * @returns {number} The slope between the two points.
   */
  public slopeTo(other: Point3d): number {
    const dx = other.x - this.x;
    const dy = other.y - this.y;
    const dz = other.z - this.z;

    if (dx === 0 && dy === 0) {
      if (dz === 0) {
        return Number.NEGATIVE_INFINITY;
      }
      return Number.POSITIVE_INFINITY;
    }

    return dz / Math.sqrt(dx * dx + dy * dy);
  }

  /**
   * Calculates the midpoint between this point and another point in 3D space.
   * @param {Point3d} other - The other point to calculate the midpoint to.
   * @returns {Point3d} The midpoint between the two points.
   */
  public midpointTo(other: Point3d): Point3d {
    const midX = (this.x + other.x) / 2;
    const midY = (this.y + other.y) / 2;
    const midZ = (this.z + other.z) / 2;
    return new Point3d(midX, midY, midZ);
  }

  /**
   * Creates a Vector3d object from this point to the given point.
   * @param {Point3d} other - The point to create a vector towards.
   * @returns {Vector3d} A Vector3d object representing the vector from this point to the given point.
   */
  public vectorTo(other: Point3d): Vector3d {
    const dx = other.x - this.x;
    const dy = other.y - this.y;
    const dz = other.z - this.z;
    return new Vector3d(dx, dy, dz);
  }

  /**
   * Calculates the angle in degrees between two vectors formed by three points (this point, p1, and p2).
   * @param {Point3d} p1 - The second point.
   * @param {Point3d} p2 - The third point.
   * @returns {number} The angle in degrees between the two vectors.
   */
  public angleBetween(p1: Point3d, p2: Point3d): number {
    const vector1 = this.vectorTo(p1);
    const vector2 = this.vectorTo(p2);

    const dotProduct = vector1.dotProduct(vector2);
    const magnitudeProduct = vector1.magnitude() * vector2.magnitude();

    if (magnitudeProduct === 0 || Math.abs(magnitudeProduct) < Number.EPSILON) {
      return 0;
    }

    const cosTheta = dotProduct / magnitudeProduct;
    const theta = Math.acos(cosTheta);

    return theta * (180 / Math.PI);
  }
}
