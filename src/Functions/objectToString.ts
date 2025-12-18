/**
 * @param {any} o - o
 * @returns {string} Returns [type Type] of the given object
 */
export default (o: unknown): string => Object.prototype.toString.call(o);
