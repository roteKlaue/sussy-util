export default class Vector2d {
    private x: number;
    private y: number;

    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    public set(x: number, y: number): void {
        this.x = x;
        this.y = y;
    }

    public clone(): Vector2d {
        return new Vector2d(this.x, this.y);
    }

    public add(vector: Vector2d): Vector2d {
        return new Vector2d(this.x + vector.x, this.y + vector.y);
    }

    public subtract(vector: Vector2d): Vector2d {
        return new Vector2d(this.x - vector.x, this.y - vector.y);
    }

    public multiply(scalar: number): Vector2d {
        return new Vector2d(this.x * scalar, this.y * scalar);
    }

    public divide(scalar: number): Vector2d {
        if (scalar !== 0) {
            return new Vector2d(this.x / scalar, this.y / scalar);
        } else {
            throw new Error("Cannot divide by zero.");
        }
    }

    public magnitude(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    public normalize(): Vector2d {
        const magnitude = this.magnitude();
        if (magnitude !== 0) {
            return new Vector2d(this.x / magnitude, this.y / magnitude);
        } else {
            throw new Error("Cannot normalize a zero vector.");
        }
    }

    public dotProduct(vector: Vector2d): number {
        return this.x * vector.x + this.y * vector.y;
    }

    public toString(): string {
        return `(${this.x}, ${this.y})`;
    }
}