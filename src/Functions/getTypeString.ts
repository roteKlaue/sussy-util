import IsSomething from "../Classes/IsSomething";

/**
 * @param {any} arg - arg - the value to be tested
 * @returns {string} returns a string name of the data type of the given variable
*/
export default (arg: any): string | undefined => {
    if (['boolean', 'number', 'string', 'symbol', 'bigint', 'undefined'].includes(typeof arg)) {
        return typeof arg;
    }

    if (arg === null) {
        return 'null';
    }

    if (IsSomething.isDate(arg)) return "Date";

    if (IsSomething.isError(arg)) return "Error";

    if (IsSomething.isRegExp(arg)) return "RegExp";

    if (typeof arg === 'function') {
        return IsSomething.isClass(arg) ? arg.constructor.name : "function";
    }

    if (typeof arg === 'object') {
        return IsSomething.isArray(arg) ? "array" : "object";
    }
}