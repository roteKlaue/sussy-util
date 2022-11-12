import { IsSomething } from "../allClasses";
/** @deprecated */
export default (a:any):boolean => a && (typeof a === 'function' || a instanceof Function) && !IsSomething.isClass(a);