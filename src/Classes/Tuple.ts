export default class Tuple<A, B> {
    constructor(public readonly first: A, public readonly second: B) {
        Object.freeze(this);
    }
    public swap(): Tuple<B, A> {
        return new Tuple(this.second, this.first);
    }

    public contains(value: A | B): boolean {
        return this.first === value || this.second === value;
    }

    public toString(): string {
        return `(${this.first}, ${this.second})`;
    }
}