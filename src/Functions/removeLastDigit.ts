/**
 * @param {number} n - n number
 * @returns {number} returns the number without the last digit
 */
export default (n: number): number => +(n.toString().substring(0, n.toString().length - 1));