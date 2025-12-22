/**
 * @param {string} str The string to convert
 * @returns {Object} The converted string value
 */
export default (str: string): object => {
  const obj = JSON.parse(str);
  if (typeof obj !== 'object') {
    throw new TypeError('Invalid JSON string passed');
  }
  return obj;
};
