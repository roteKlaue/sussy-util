/**
 * @param {any} o - o
 * @returns {string} Returns [type Type] of the given object
*/
export default (o: any): string => {
    return Object.prototype.toString.call(o);
}