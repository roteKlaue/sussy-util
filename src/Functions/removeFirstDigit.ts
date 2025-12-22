/**
 * @param {number} n - n number
 * @returns {number} returns the number without the leading digit
 */
export default (n: number): number => {
  return parseFloat(n.toString().substring(1));
};
