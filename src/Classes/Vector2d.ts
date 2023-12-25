import Tuple from "./Tuple";

export default class Vector2d {
    public constructor(public readonly x: number = 0, public readonly y: number = 0) { }

    /**
     * Creates a copy of the vector.
     * @returns {Vector2d} - A new Vector2d object with the same x and y coordinates.
     */
    public clone(): Vector2d {
        return new Vector2d(this.x, this.y);
    }

    /**
     * Adds another vector to the current vector.
     * @param {Vector2d} vector - The vector to be added.
     * @returns {Vector2d} - A new Vector2d object representing the sum of the two vectors.
     */
    public add(vector: Vector2d): Vector2d {
        return new Vector2d(this.x + vector.x, this.y + vector.y);
    }

    /**
     * Subtracts another vector from the current vector.
     * @param {Vector2d} vector - The vector to be subtracted.
     * @returns {Vector2d} - A new Vector2d object representing the difference between the two vectors.
     */
    public subtract(vector: Vector2d): Vector2d {
        return new Vector2d(this.x - vector.x, this.y - vector.y);
    }

    /**
     * Multiplies the vector by a scalar value.
     * @param {number} scalar - The scalar value to multiply the vector by.
     * @returns {Vector2d} - A new Vector2d object representing the scaled vector.
     */
    public multiply(scalar: number): Vector2d {
        return new Vector2d(this.x * scalar, this.y * scalar);
    }

    /**
     * Divides the vector by a scalar value.
     * @param {number} scalar - The scalar value to divide the vector by.
     * @returns {Vector2d} - A new Vector2d object representing the divided vector.
     * @throws {Error} - Throws an error if the scalar is zero.
     */
    public divide(scalar: number): Vector2d {
        if (scalar === 0) {
            throw new Error("Cannot divide by zero.");
        }
        return new Vector2d(this.x / scalar, this.y / scalar);
    }

    /**
     * Calculates the magnitude (length) of the vector.
     * @returns {number} - The magnitude of the vector.
     */
    public magnitude(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    /**
     * Returns a normalized version of the vector.
     * @returns {Vector2d} - A new Vector2d object representing the normalized vector.
     * @throws {Error} - Throws an error if the vector is a zero vector.
     */
    public normalize(): Vector2d {
        const magnitude = this.magnitude();
        if (magnitude !== 0) {
            return new Vector2d(this.x / magnitude, this.y / magnitude);
        } else {
            throw new Error("Cannot normalize a zero vector.");
        }
    }

    /**
     * Calculates the dot product of the vector with another vector.
     * @param {Vector2d} vector - The vector to calculate the dot product with.
     * @returns {number} - The dot product of the two vectors.
     */
    public dotProduct(vector: Vector2d): number {
        return this.x * vector.x + this.y * vector.y;
    }

    /**
     * Calculates the distance between two vectors.
     * @param {Vector2d} vector - The vector to calculate the distance to.
     * @returns {number} - The distance between the two vectors.
     */
    public distanceTo(vector: Vector2d): number {
        const dx = vector.x - this.x;
        const dy = vector.y - this.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    /**
     * Calculates the angle between two vectors in radians.
     * @param {Vector2d} vector - The vector to calculate the angle to.
     * @returns {number} - The angle between the two vectors in radians.
     */
    public angleTo(vector: Vector2d): number {
        const dot = this.dotProduct(vector);
        const magProduct = this.magnitude() * vector.magnitude();
        return Math.acos(dot / magProduct);
    }

    /**
     * Returns a vector with the absolute values of the original vector's components.
     * @returns {Vector2d} - A new Vector2d object with absolute values.
     */
    public abs(): Vector2d {
        return new Vector2d(Math.abs(this.x), Math.abs(this.y));
    }

    /**
     * Checks if the vector is equal to another vector.
     * @param {Vector2d} vector - The vector to compare with.
     * @returns {boolean} - True if the vectors are equal, false otherwise.
     */
    public equals(vector: Vector2d): boolean {
        return this.x === vector.x && this.y === vector.y;
    }

    public toString(): string {
        return `(${this.x}, ${this.y})`;
    }

    /**
     * Converts the vector to an array representation.
     * @returns An array containing the x, y, and z components of the vector.
     */
    public toArray(): number[] {
        return [this.x, this.y];
    }

    /**
     * Converts the vector to an array representation.
     * @returns An array containing the x, y, and z components of the vector.
     */
    public toTuple(): Tuple<number, number> {
        return new Tuple(this.x, this.y);
    }

    /**
     * Creates a new Vector2d instance from an array representation.
     * @param arr - An array containing the x and y components of the vector.
     * @returns A new Vector2d instance created from the array.
     * @throws Throws an error if the array length is not 2.
     */
    public static ofArray(arr: number[]): Vector2d {
        if (arr.length !== 2) throw new Error("Invalid array length. Array must contain three elements.");
        return new Vector2d(arr[0], arr[1]);
    }

    public static ofTuple(tuple: Tuple<number, number>) {
        return new Vector2d(tuple.first, tuple.second);
    }
}