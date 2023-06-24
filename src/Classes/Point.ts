import Vector2d from "./Vector2d";

export default class Point {
    public readonly y: number;
    public readonly x: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    /**
     * This function takes a Point object as an argument and returns the distance between the two
     * points.
     * @param {Point} other - Point - The point to calculate the distance to.
     * @returns The distance between two points.
     */
    public distanceTo(other: Point): number {
        const dx = this.x - other.x;
        const dy = this.y - other.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    /**
     * The slopeTo() function returns the slope between the invoking point (x0, y0) and the argument
     * point (x1, y1) to be (y1 − y0) / (x1 − x0). Treat the slope of a horizontal line segment as
     * positive zero; treat the slope of a vertical line segment as positive infinity; treat the slope
     * of a degenerate line segment (between a point and itself) as negative infinity
     * @param {Point} other - Point - The point to which the slope is being calculated.
     * @returns The slope of the line between this point and the other point.
     */
    public slopeTo(other: Point): number {
        const dx = other.x - this.x;
        const dy = other.y - this.y;

        if (dx === 0) {
            if (dy === 0) {
                return Number.NEGATIVE_INFINITY;
            }
            return Number.POSITIVE_INFINITY;
        }

        return dy / dx;
    }

    /**
     * The midpointTo() function returns the midpoint between the invoking point and the argument point.
     * @param {Point} other - Point - The point to which the midpoint is being calculated.
     * @returns The midpoint between this point and the other point.
     */
    public midpointTo(other: Point): Point {
        const midX = (this.x + other.x) / 2;
        const midY = (this.y + other.y) / 2;
        return new Point(midX, midY);
    }

    /**
     * Creates a Vector2d object from this point to the given point.
     * @param other The point to create a vector towards.
     * @returns A Vector2d object representing the vector from this point to the given point.
     */
    public vectorTo(other: Point): Vector2d {
        const dx = other.x - this.x;
        const dy = other.y - this.y;
        return new Vector2d(dx, dy);
    }

    /**
     * Calculates the angle in degrees between two vectors formed by three points (this point, p1, and p2).
     * @param p1 The second point.
     * @param p2 The third point.
     * @returns The angle in degrees between the two vectors.
     */
    public angleBetween(p1: Point, p2: Point): number {
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