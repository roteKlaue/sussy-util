import isArray from "./isArray";

export default function(arg:any):boolean {
    return arg instanceof Object && !isArray(arg);
}