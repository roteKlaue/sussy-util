/**
 * Returns the given number as a string with an ordinal suffix indicating its position in an ordered sequence.
 *
 * @param {number} n - The number to be converted to an ordinal string.
 * @returns {string} The ordinal string representation of the given number.
 * @example
 * // returns '1st'
 * getOrdinalSuffix(1);
 *
 * @example
 * // returns '42nd'
 * getOrdinalSuffix(42);
 *
 * @example
 * // returns '123rd'
 * getOrdinalSuffix(123);
 */
export default (n: number): string => {
  const lastDigit = n % 10;
  if (n === 11 || n === 12 || n === 13) {
    return n + 'th';
  }
  if (lastDigit === 1) {
    return n + 'st';
  }
  if (lastDigit === 2) {
    return n + 'nd';
  }
  if (lastDigit === 3) {
    return n + 'rd';
  }
  return n + 'th';
};
