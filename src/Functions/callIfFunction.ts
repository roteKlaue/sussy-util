import isFunction from "./isFunction";

export default function(func:any, ...params:any[]):any {
    if(!isFunction(func)) return null;
    return func(...params);
}