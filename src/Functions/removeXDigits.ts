/**
 * @param {number} n - n number
 * @param {number} pos - position of the digit to remove
 * @returns {number} returns the number without the nth digit
 */
export default (n: number, pos: number): number => {
  return parseFloat(
    n
      .toString()
      .substring(0, pos - 1)
      .concat(n.toString().substring(pos, n)),
  );
};
