/**
 * Measures the execution time of the provided function and logs the result to the console using the given label.
 *
 * @param {string} label - The label to use when logging the execution time.
 * @param {Function} func - The function to measure the execution time of.
 * @param {...any} params - The parameters to pass to the function.
 * @returns {void}
 */
export default (label: string, func: (...args: unknown[]) => unknown, ...params: unknown[]): void => {
	console.time(label);
	func.bind(this, ...params);
	console.timeEnd(label);
};