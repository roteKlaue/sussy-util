import IsSomething from "../Classes/IsSomething";

export default function(func:any, ...params:any[]):any {
    if(!IsSomething.isFunction(func)) return null;
    return func(...params);
}