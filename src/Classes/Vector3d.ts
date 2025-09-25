import Vector2d from './Vector2d';

export default class Vector3d {
  public constructor(
    public readonly x: number = 0,
    public readonly y: number = 0,
    public readonly z: number = 0,
  ) {}

  /**
   * Creates a new Vector3d instance with the same x, y, and z values as the current vector.
   * @returns A new Vector3d instance.
   */
  public clone(): Vector3d {
    return new Vector3d(this.x, this.y, this.z);
  }

  /**
   * Adds another vector to the current vector and returns the result as a new vector.
   * @param vector - The vector to be added.
   * @returns The sum of the two vectors as a new Vector3d instance.
   */
  public add(vector: Vector3d): Vector3d {
    return new Vector3d(this.x + vector.x, this.y + vector.y, this.z + vector.z);
  }

  /**
   * Subtracts another vector from the current vector and returns the result as a new vector.
   * @param vector - The vector to be subtracted.
   * @returns The difference between the two vectors as a new Vector3d instance.
   */
  public subtract(vector: Vector3d): Vector3d {
    return new Vector3d(this.x - vector.x, this.y - vector.y, this.z - vector.z);
  }

  /**
   * Multiplies the vector by a scalar value and returns the result as a new vector.
   * @param scalar - The scalar value to multiply the vector by.
   * @returns The vector multiplied by the scalar value as a new Vector3d instance.
   */
  public multiply(scalar: number): Vector3d {
    return new Vector3d(this.x * scalar, this.y * scalar, this.z * scalar);
  }

  /**
   * Divides the vector by a scalar value and returns the result as a new vector.
   * @param scalar - The scalar value to divide the vector by.
   * @returns The vector divided by the scalar value as a new Vector3d instance.
   * @throws Throws an error if the scalar value is 0.
   */
  public divide(scalar: number): Vector3d {
    if (scalar === 0) {
      throw new Error('Cannot divide by zero.');
    }
    return new Vector3d(this.x / scalar, this.y / scalar, this.z / scalar);
  }

  /**
   * Calculates the magnitude (length) of the vector.
   * @returns The magnitude of the vector.
   */
  public magnitude(): number {
    return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
  }

  /**
   * Normalizes the vector to have a magnitude of 1 and returns the result as a new vector.
   * @returns The normalized vector as a new Vector3d instance.
   * @throws Throws an error if the vector is a zero vector (magnitude is 0).
   */
  public normalize(): Vector3d {
    const magnitude = this.magnitude();
    if (magnitude === 0) {
      throw new Error('Cannot normalize a zero vector.');
    }
    return this.divide(magnitude);
  }

  /**
   * Calculates the dot product of the current vector and another vector.
   * @param vector - The other vector.
   * @returns The dot product of the two vectors.
   */
  public dotProduct(vector: Vector3d): number {
    return this.x * vector.x + this.y * vector.y + this.z * vector.z;
  }

  /**
   * Calculates the cross product of the current vector and another vector.
   * @param vector - The other vector.
   * @returns The cross product of the two vectors as a new Vector3d instance.
   */
  public crossProduct(vector: Vector3d): Vector3d {
    const crossX = this.y * vector.z - this.z * vector.y;
    const crossY = this.z * vector.x - this.x * vector.z;
    const crossZ = this.x * vector.y - this.y * vector.x;
    return new Vector3d(crossX, crossY, crossZ);
  }

  /**
   * Calculates the angle in radians between the current vector and another vector.
   * @param vector - The other vector.
   * @returns The angle between the two vectors in radians.
   */
  public angleTo(vector: Vector3d): number {
    const thisMagnitude = this.magnitude();
    const vectorMagnitude = vector.magnitude();
    if (vectorMagnitude != 0 && thisMagnitude != 0 && this.normalize().equals(vector.normalize()))
      return 0;
    const dotProduct = this.dotProduct(vector);
    const clampedDotProduct = Math.max(-1, Math.min(1, dotProduct));
    return Math.acos(clampedDotProduct / (thisMagnitude * vectorMagnitude));
  }

  /**
   * Determines if the current vector is parallel to another vector.
   * @param vector - The other vector.
   * @returns True if the vectors are parallel, false otherwise.
   */
  public isParallelTo(vector: Vector3d): boolean {
    const ratioX = this.x / vector.x;
    const ratioY = this.y / vector.y;
    const ratioZ = this.z / vector.z;

    return Math.abs(ratioX - ratioY) < Number.EPSILON && Math.abs(ratioY - ratioZ) < Number.EPSILON;
  }

  /**
   * Determines if the current vector is perpendicular (orthogonal) to another vector.
   * @param vector - The other vector.
   * @returns True if the vectors are perpendicular, false otherwise.
   */
  public isPerpendicularTo(vector: Vector3d): boolean {
    return this.dotProduct(vector) === 0;
  }

  /**
   * Returns a vector with the absolute values of the original vector's components.
   * @returns {Vector3d} - A new Vector2d object with absolute values.
   */
  public abs(): Vector3d {
    return new Vector3d(Math.abs(this.x), Math.abs(this.y), Math.abs(this.z));
  }

  /**
   * Checks if the vector is equal to another vector.
   * @param {Vector3d} vector - The vector to compare with.
   * @returns {boolean} - True if the vectors are equal, false otherwise.
   */
  public equals(vector: Vector3d): boolean {
    return this.x === vector.x && this.y === vector.y && this.z === vector.z;
  }

  /**
   * Converts the vector to an array representation.
   * @returns An array containing the x, y, and z components of the vector.
   */
  public toArray(): number[] {
    return [this.x, this.y, this.z];
  }

  /**
   * Returns a string representation of the vector in the format "(x, y, z)".
   * @returns A string representation of the vector.
   */
  public toString(): string {
    return `(${this.x}, ${this.y}, ${this.z})`;
  }

  /**
   * Creates a new Vector3d instance from an array representation.
   * @param arr - An array containing the x, y, and z components of the vector.
   * @returns A new Vector3d instance created from the array.
   * @throws Throws an error if the array length is not 3.
   */
  public static ofArray(arr: number[]): Vector3d {
    if (arr.length !== 3)
      throw new Error('Invalid array length. Array must contain three elements.');
    return new Vector3d(arr[0], arr[1], arr[2]);
  }

  public static of2d(other: Vector2d) {
    return new Vector3d(other.x, other.y);
  }
}
