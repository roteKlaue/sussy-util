/**
 * Represents a tuple with two elements of types A and B.
 * @template A - The type of the first element.
 * @template B - The type of the second element.
 */
export default class Tuple<A, B> {
    /**
     * Creates a new Tuple instance with the specified first and second elements.
     * @param {A} first - The first element of the tuple.
     * @param {B} second - The second element of the tuple.
     */
    public constructor(public readonly first: A, public readonly second: B) {
        Object.freeze(this);
    }

    /**
     * Swaps the first and second elements of the tuple.
     * @returns {Tuple<B, A>} - A new Tuple with the elements swapped.
     */
    public swap(): Tuple<B, A> {
        return new Tuple(this.second, this.first);
    }

    /**
     * Checks if the tuple contains a specific value.
     * @param {A | B} value - The value to check for in the tuple.
     * @returns {boolean} - True if the value is found, false otherwise.
     */
    public contains(value: A | B): boolean {
        return this.first === value || this.second === value;
    }

    /**
     * Returns a string representation of the tuple.
     * @returns {string} - The string representation of the tuple.
     */
    public toString(): string {
        return `(${this.first}, ${this.second})`;
    }
}