import { PromiseOr } from "../Types";

/**
 * Asynchronous error handling function.
 * @template T - The error type.
 * @template R - The result type.
 * @param {(...args: any[]) => PromiseOr<R>} promise - The promise function to be executed.
 * @returns {Promise<[R | null, null | T]>} A promise that resolves to a tuple containing the result and error.
 */
const asyncHandler = async <T extends Error, R>(promise: (...a: any) => PromiseOr<R> | Promise<R>): Promise<[R | null, null | T]> => {
	try {
		const data = await promise();
		return [data, null];
	} catch (e) {
		return [null, e as T];
	}
}

export default asyncHandler;