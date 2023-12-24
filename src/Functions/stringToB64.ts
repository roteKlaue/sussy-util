/**
 * encodes the given string into a base64 encoded string
 * @param {string} value The utf-8 encoded value
 * @returns {string} The base64 encoded value
 */
export default (value: String): String => Buffer.from(value).toString("base64");
