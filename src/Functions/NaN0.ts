/**
 * Returns the provided value if it is a number, otherwise returns 0.
 *
 * @param {any} val - The value to check.
 * @returns {number|0} The provided value if it is a number, otherwise 0.
 */
export default (val: never): number | 0 => (isNaN(val) ? 0 : val);
