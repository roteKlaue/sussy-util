/**
 * AsyncTimeout returns a Promise that resolves after a given number of milliseconds.
 * @param {number} ms - number - The number of milliseconds to wait before resolving the promise.
 * @returns A function that returns a promise that resolves after a timeout.
 */
const asyncTimeout = async (ms: number): Promise<number | NodeJS.Timeout> => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default asyncTimeout;