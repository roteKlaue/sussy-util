/**
 * Parses the base64 encoded string and returns the utf-8 encoded string
 * @param {string} val The base64 encoded value
 * @returns {string} The utf8 encoded value
 */
export default (val: string): string => Buffer.from(val, 'base64').toString("utf8");