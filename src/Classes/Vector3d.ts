export default class Vector3d {
    x: number;
    y: number;
    z: number;

    constructor(x: number = 0, y: number = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    public set(x: number, y: number, z: number): void {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    public clone(): Vector3d {
        return new Vector3d(this.x, this.y);
    }

    public add(vector: Vector3d): Vector3d {
        return new Vector3d(this.x + vector.x, this.y + vector.y, this.z + vector.z);
    }

    public subtract(vector: Vector3d): Vector3d {
        return new Vector3d(this.x - vector.x, this.y - vector.y, this.z - vector.z);
    }

    public multiply(scalar: number): Vector3d {
        return new Vector3d(this.x * scalar, this.y * scalar, this.z * scalar);
    }

    public divide(scalar: number): Vector3d {
        if (scalar !== 0) {
            return new Vector3d(this.x / scalar, this.y / scalar, this.z / scalar);
        } else {
            throw new Error("Cannot divide by zero.");
        }
    }

    public magnitude(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }

    public normalize(): Vector3d {
        const magnitude = this.magnitude();
        if (magnitude !== 0) {
            return new Vector3d(this.x / magnitude, this.y / magnitude, this.z / magnitude);
        } else {
            throw new Error("Cannot normalize a zero vector.");
        }
    }

    public dotProduct(vector: Vector3d): number {
        return this.x * vector.x + this.y * vector.y + this.z * vector.z;
    }

    public crossProduct(vector: Vector3d): Vector3d {
        const crossX = this.y * vector.z - this.z * vector.y;
        const crossY = this.z * vector.x - this.x * vector.z;
        const crossZ = this.x * vector.y - this.y * vector.x;
        return new Vector3d(crossX, crossY, crossZ);
    }

    public toString(): string {
        return `(${this.x}, ${this.y}, ${this.z})`;
    }
}