/**
 * Converts the provided value to undefined and returns it.
 * @template T - The type of the value to convert.
 * @param {T} sus - The value to convert.
 * @returns {undefined} The converted value, which is always undefined.
 */
const convertToUndefined = <T> (sus: T): undefined => void (sus);

export default convertToUndefined;