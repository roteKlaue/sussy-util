import isArray from "./isArray";
import Set from "../Classes/Set";
import isString from "./isString";
import isBoolean from "./isBoolean";
import isNumber from "./isNumber";
import isFunction from "./isFunction";
import Stack from "../Classes/Stack";
import isRegExp from "./isRegExp";

export default function hasValue(a:any):boolean {
    if ((isString(a) && a.length > 0) || isBoolean(a) || a === null || isNumber(a) || isFunction(a) || (isRegExp(a) && a.length > 0)) {
        return true;
    }

    if(isArray(a)) {
        for (const iterator of a) {
            if(hasValue(iterator)) {
                return true;
            }
        }
    }

    if(typeof a === 'object' && !isArray(a)) {
        for (const key in a) {
            if(a.hasOwnProperty(key)) {
                if(hasValue(a[key])) {
                    return true;
                }
            }
        }
    }

    if(a instanceof Set || a instanceof Stack) {
        return hasValue(a.toArray());
    }

    return false;
}