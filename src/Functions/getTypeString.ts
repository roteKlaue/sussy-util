import IsSomething from "../Classes/IsSomething";

export default function(arg:any):string|undefined {
    if(typeof arg === 'boolean' || typeof arg === "number" || typeof arg === 'undefined' || typeof arg === 'bigint' || typeof arg === 'symbol' || typeof arg === 'string') {
        return typeof arg;
    }

    if(arg === null) {
        return 'null';
    }

    if(IsSomething.isDate(arg)) return "Date";

    if(IsSomething.isError(arg)) return "Error";

    if(IsSomething.isRegExp(arg)) return "RegExp";

    if(typeof arg === 'function') {
        return IsSomething.isClass(arg)? arg.constructor.name : "function";
    }

    if(typeof arg === 'object') {
        return IsSomething.isArray(arg)? "array":"object";
    }
}