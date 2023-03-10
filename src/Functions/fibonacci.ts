const fibonacci = (index: number, cache: number[] = [0, 1]): number => {
    if (index < 0) {
        throw new Error("Index must be greater than or equal to 0.");
    }
    if (cache[index] === void 0) {
        cache[index] = fibonacci(index - 1, cache) + fibonacci(index - 2, cache);
    }
    return cache[index];
}

export default (index: number): number => fibonacci(index);