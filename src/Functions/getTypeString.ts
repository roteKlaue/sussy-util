import isArray from "./isArray";
import isClass from "./isClass";
import isDate from "./isDate";
import isError from "./isError";
import isRegExp from "./isRegExp";

export default function(arg:any):string|undefined {
    if(typeof arg === 'boolean' || typeof arg === "number" || typeof arg === 'undefined' || typeof arg === 'bigint' || typeof arg === 'symbol' || typeof arg === 'string') {
        return typeof arg;
    }

    if(arg === null) {
        return 'null';
    }

    if(isDate(arg)) return "Date";

    if(isError(arg)) return "Error";

    if(isRegExp(arg)) return "RegExp";

    if(typeof arg === 'function') {
        return isClass(arg)? arg.constructor.name : "function";
    }

    if(typeof arg === 'object') {
        return isArray(arg)? "array":"object";
    }
}