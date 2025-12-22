/**
 * returns an array of prime factors of a number
 * @param {number} numb - numb - the number of which the prime factors should be computed
 * @returns {number[]} array of prime factors
 */
export default (numb: number): number[] => {
  numb = numb || 10;
  const primefactors = [];
  if (numb < 2) return [];
  for (let i = 2; numb > 1; i++) {
    if (numb % i == 0) {
      for (let j = 0; numb % i == 0; j++) {
        primefactors.push(i);
        numb /= i;
      }
    }
  }
  return primefactors;
};
