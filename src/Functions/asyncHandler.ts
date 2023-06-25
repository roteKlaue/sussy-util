import { PromiseOr } from "../Types";

/**
 * Asynchronous error handling function.
 * @template T - The error type.
 * @template R - The result type.
 * @param {(...args: any[]) => PromiseOr<R>} promise - The promise function to be executed.
 * @param {...any[]} args - Additional arguments to be passed to the promise function.
 * @returns {Promise<[R | null, null | T]>} A promise that resolves to a tuple containing the result and error.
 */
const asyncHandler = async <T extends Error, R>(promise: (...a: any) => PromiseOr<R>, ...args: any[]): Promise<[R | null, null | T]> => {
	try {
		const data = await promise(...args);
		return [data, null];
	} catch (e) {
		return [null, e as T];
	}
}

export default asyncHandler;