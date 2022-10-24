import isArray from "./isArray";
import isClass from "./isClass";
import isRegExp from "./isRegExp";

export default function(arg:any):string|undefined {
    if(typeof arg === 'boolean' || typeof arg === "number" || typeof arg === 'undefined' || typeof arg === 'bigint' || typeof arg === 'symbol' || typeof arg === 'string') {
        return typeof arg;
    }

    if(arg === null) {
        return 'null';
    }

    if(isRegExp(arg)) return "RegExp";

    if(typeof arg === 'function') {
        return isClass(arg)? "class" : "function";
    }

    if(typeof arg === 'object') {
        return isArray(arg)? "array":"object";
    }
}