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
        return dy / dx;
    }
}