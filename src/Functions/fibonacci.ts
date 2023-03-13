/**
 * "If the index is not in the cache, then add the sum of the previous two numbers to the cache and
 * return it."
 * @param {number} index - The index of the number in the Fibonacci sequence to return.
 * @param {number[]} cache - This is an array that will store the values of the fibonacci sequence.
 * @returns The nth number in the fibonacci sequence.
 */
const fibonacci = (index: number, cache: number[] = [0, 1]): number => {
    if (index < 0) {
        throw new Error("Index must be greater than or equal to 0.");
    }
    if (cache[index] === void 0) {
        cache[index] = fibonacci(index - 1, cache) + fibonacci(index - 2, cache);
    }
    return cache[index];
}

/**
 * @param {number} index - The index of the number in the Fibonacci sequence to return.
 * @returns The nth number in the fibonacci sequence.
 */
export default (index: number): number => fibonacci(index);