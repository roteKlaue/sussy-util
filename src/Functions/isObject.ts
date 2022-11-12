import { IsSomething } from "../allClasses";
/** @deprecated */
export default (arg:any):boolean => arg instanceof Object && !IsSomething.isArray(arg);
