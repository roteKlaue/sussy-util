type Callback<T, E extends Error> = (result: T, error: E | null) => void;
type Func<T, R, E extends Error> = (...args: [...T[], Callback<R, E>]) => void;

/**
 * Promisifies a callback-based function.
 * @param func - The callback-based function to promisify.
 * @returns A promise-wrapped function.
 */
export default function promisify<T, R, E extends Error>(func: Func<T, R, E>): (...args: T[]) => Promise<R> {
    return (...args: T[]) => new Promise((resolve, reject) => {
        func(...args, (result, error) => {
            if (error !== null) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
}
