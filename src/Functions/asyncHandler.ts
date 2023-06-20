/**
 * It takes a promise and returns a promise that resolves to an array of two elements, the first being
 * the resolved value of the promise and the second being the error if the promise was rejected
 * @param promise - (...a: any) => Promise<R>
 * @param {R[]} args - R[] - The arguments to pass to the promise.
 * @returns [R | null, null | T]
 */
const asyncHandler = async <T extends Error, R>(promise: (...a: any) => Promise<R>, ...args: any[]): Promise<[R | null, null | T]> => {
	try {
		const data = await promise(...args);
		return [data, null];
	} catch (e) {
		return [null, e as T];
	}
}

export default asyncHandler;