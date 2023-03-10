export default class Point {
    public readonly y: number;
    public readonly x: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    distanceTo(other: Point): number {
        const dx = this.x - other.x;
        const dy = this.y - other.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    slopeTo(other: Point): number {
        const dx = other.x - this.x;
        const dy = other.y - this.y;
        return dy / dx;
    }
}