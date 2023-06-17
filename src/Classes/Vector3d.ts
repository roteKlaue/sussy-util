export default class Vector3d {
    x: number;
    y: number;
    z: number;

    constructor(x: number = 0, y: number = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    /**
     * Sets the x, y, and z components of the vector.
     * @param x - The new value for the x-component.
     * @param y - The new value for the y-component.
     * @param z - The new value for the z-component.
     */
    public set(x: number, y: number, z: number): void {
        this.x = x;
        this.y = y;
        this.z = z;
    }

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
        if (scalar !== 0) {
            return new Vector3d(this.x / scalar, this.y / scalar, this.z / scalar);
        } else {
            throw new Error("Cannot divide by zero.");
        }
    }

    /**
     * Calculates the magnitude (length) of the vector.
     * @returns The magnitude of the vector.
     */
    public magnitude(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }

    /**
     * Normalizes the vector to have a magnitude of 1 and returns the result as a new vector.
     * @returns The normalized vector as a new Vector3d instance.
     * @throws Throws an error if the vector is a zero vector (magnitude is 0).
     */
    public normalize(): Vector3d {
        const magnitude = this.magnitude();
        if (magnitude !== 0) {
            return new Vector3d(this.x / magnitude, this.y / magnitude, this.z / magnitude);
        } else {
            throw new Error("Cannot normalize a zero vector.");
        }
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
     * Returns a string representation of the vector in the format "(x, y, z)".
     * @returns A string representation of the vector.
     */
    public toString(): string {
        return `(${this.x}, ${this.y}, ${this.z})`;
    }
}