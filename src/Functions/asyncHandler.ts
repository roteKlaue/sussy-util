/**
 * It takes a promise and returns a promise that resolves to an array of two elements, the first being
 * the resolved value of the promise and the second being the error if the promise was rejected
 * @param promise - (...a: any) => Promise<any>
 * @param {any[]} args - any[] - The arguments to pass to the promise.
 * @returns [any | null, null | T]
 */
const asyncHandler = async <T extends Error>(promise: (...a: any) => Promise<any>, ...args: any[]): Promise<[any | null, null | T]> => {
	try {
		const data = await promise(...args);
		return [data, null];
	} catch (e) {
		return [null, e as T];
	}
}

export default asyncHandler;